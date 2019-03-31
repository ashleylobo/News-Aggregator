from flask import Flask
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import folium
import json
import re
import glob
import os
import string
import random
import requests
import scipy
from matplotlib.colors import *
import seaborn as sn
from dateutil.parser import parse
import datetime as dt
pd.options.mode.chained_assignment = None  # default='warn'

# Sklearn imports
from sklearn.model_selection import *
from sklearn.preprocessing import *
from sklearn.linear_model import *
from sklearn.ensemble import *
from sklearn.metrics import *
from sklearn.utils import shuffle
from sklearn.utils.class_weight import *
from sklearn.svm import *
from sklearn.externals import *
from scipy.stats import *

# For sentiment analysis
import vaderSentiment
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
nltk.download('vader_lexicon')

from google.cloud import language

from tqdm import tqdm

# Import for WordCloud
import wordcloud

# Text classifier - TextBlob
from textblob.classifiers import NaiveBayesClassifier

# Local imports
from helpers import *
import cleaningtool as ct

# Dependencies
from flask import Flask, request, jsonify
from sklearn.externals import joblib
import traceback
import pandas as pd
import numpy as np

print("import complete")

# Spliting subjects into lists
def subject_split(df):
    '''
    Splits dataframe to have entries for each subject in cases where the original entry had multiple subjects.
    Params - df : Dataframe to operate upon
    Returns - new Dataframe formatted as specified
    '''
    df = df.copy()
    df["subject"] = df["subject"].apply(lambda x : str(x).lower().split(","))
    ## Create a dataframe of all subjects
    subjects = df.subject.apply(pd.Series)
    new_cols = list(df.columns.values)
    new_cols.remove("subject")

    ## Now merge with original frame to create separate columns for each subject
    ## Then melt so that each entry exists under several subjects
    df = subjects.merge(df, right_index = True, left_index = True) \
        .drop(["subject"], axis = 1) \
        .melt(id_vars = new_cols, value_name = "subject") \
        .drop("variable", axis = 1) \
    
    return df

def addSAfeatures(df):
    analyzer = SentimentIntensityAnalyzer()
    return pd.concat([df, pd.DataFrame([analyzer.polarity_scores(l) for l in df.statement])], axis=1, sort=False)

## Define paths
DATA_FOLDER = './data/'
TRAIN_PATH = DATA_FOLDER + 'train.tsv'
TEST_PATH = DATA_FOLDER + 'test.tsv'
VALID_PATH = DATA_FOLDER + 'valid.tsv'

CLEAN_TRAIN = DATA_FOLDER + "train_clean.txt"
CLEAN_TEST = DATA_FOLDER + "test_clean.txt"
CLEAN_VALID = DATA_FOLDER + "valid_clean.txt"

# Data Loading

cols = ["ID", "label", "statement", "subject", "speaker", "job", "state", "party", "barely_true_cts",
        "false_cts", "half_true_cts", "mostly_true_cts", "pants_on_fire_cts", "context"]

train_data = pd.read_table(TRAIN_PATH, header=None) 
train_data.columns = cols

test_data = pd.read_table(TEST_PATH, header=None)
test_data.columns = cols

valid_data = pd.read_table(VALID_PATH, header=None)
valid_data.columns = cols

## Load raw data

df_raw = pd.concat([train_data, test_data, valid_data], axis=0, sort=False)
df_raw = df_raw.sample(frac=1).reset_index()
df_raw = ct.clean_df(df_raw)
df_raw.head(2)

subject_df = subject_split(df_raw)

set_of_subjects = set(subject_df['subject'])

with open('subjects.txt', 'w') as file_handler:
    for item in set_of_subjects:
        file_handler.write("{}\n".format(item))
print("subjects written")
    
speakers_df = df_raw.copy()
speakers = speakers_df['speaker'].unique()

with open('speakers.txt', 'w') as file_handler:
    for item in speakers:
        file_handler.write("{}\n".format(item))
print("speakers written")

jobs_df = df_raw.copy()
jobs = jobs_df['job'].unique()

with open('jobs.txt', 'w') as file_handler:
    for item in speakers:
        file_handler.write("{}\n".format(item))
print("jobs written")

#model

## Define paths
DATA_FOLDER = './data/'
TRAIN_PATH = DATA_FOLDER + 'train.tsv'
VALID_PATH = DATA_FOLDER + 'valid.tsv'
TEST_PATH = DATA_FOLDER + 'test.tsv'

CLEAN_TRAIN = DATA_FOLDER + "train_clean.txt"
CLEAN_TEST = DATA_FOLDER + "test_clean.txt"
CLEAN_VALID = DATA_FOLDER + "valid_clean.txt"

train_data = load_data(TRAIN_PATH)
test_data = load_data(TEST_PATH)
valid_data = load_data(VALID_PATH)

train_data.label = convert_label(train_data)
test_data.label = convert_label(test_data)
valid_data.label = convert_label(valid_data)

train_data.label[train_data.label <= 0] = 0
train_data.label[train_data.label > 0] = 1

test_data.label[test_data.label <= 0] = 0
test_data.label[test_data.label > 0] = 1

valid_data.label[valid_data.label <= 0] = 0
valid_data.label[valid_data.label > 0] = 1

train_data = addSAfeatures(train_data)
test_data = addSAfeatures(test_data)
valid_data = addSAfeatures(valid_data)

train_data.drop(columns=["ID", "statement", "barely_true_cts", "false_cts", "half_true_cts", "mostly_true_cts", "pants_on_fire_cts"], inplace=True)
test_data.drop(columns=["ID", "statement", "barely_true_cts", "false_cts", "half_true_cts", "mostly_true_cts", "pants_on_fire_cts"], inplace=True)
valid_data.drop(columns=["ID", "statement", "barely_true_cts", "false_cts", "half_true_cts", "mostly_true_cts", "pants_on_fire_cts"], inplace=True)

    # Converting in categorical variables
dummy_train = pd.get_dummies(train_data)
dummy_test = pd.get_dummies(test_data)
dummy_valid = pd.get_dummies(valid_data)

column_set = dummy_train.columns
columns_to_fit = dummy_test.columns
to_remove = set(columns_to_fit) - set(column_set)
to_add = set(column_set) - set(columns_to_fit)

# For each class of feature we did not find, we add this our set of features with all values as 0
for addable in to_add:
     dummy_test[addable] = 0

# For each class new class of features, we attempt to add it an 'Other' feature if it exists
# If not, we simply remove it
for removable in to_remove:
    original_name = removable.split('_')[:-1]
    original_name.append('Other')
    other_col = "_".join(original_name)
    if dummy_test.columns.contains(other_col):
        dummy_test[other_col] += dummy_test[removable]
    dummy_test.drop(removable, axis=1, inplace=True)
        
# Need to sort columns for ordering compatability!
dummy_test = dummy_test.reindex_axis(column_set, axis=1)

# Prepare data and shuffle

X_tr = dummy_train.iloc[:,1:].values
y_tr = dummy_train.iloc[:,0].values
X_te = dummy_test.iloc[:,1:].values
y_te = dummy_test.iloc[:,0].values

X_tr, y_tr = shuffle(X_tr, y_tr)
X_te, y_te = shuffle(X_te, y_te)

    # Standardizing data

std_scaler = StandardScaler()
X_tr = std_scaler.fit_transform(X_tr)
X_te = std_scaler.transform(X_te)

print(X_te)

# Random forest classifier

model = RandomForestClassifier(n_estimators = 100)
model.fit(X_tr, y_tr)
probs = model.predict(X_te)

# save the model to disk
filename = 'finalized_model.sav'
pickle.dump(model, open(filename, 'wb'))

print(probs)

print(accuracy_score(y_te,probs))
    
# load the model from disk
loaded_model = pickle.load(open(filename, 'rb'))
result = loaded_model.predict(X_te)
print(result)
 ##########################################################

