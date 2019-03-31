# Dependencies
from flask import Flask, request, jsonify
from sklearn.externals import joblib
import traceback
import pandas as pd
import numpy as np
import pickle
#import requests
import random



app = Flask(__name__)


@app.route('/smart', methods=['GET'])
def predict():

    if loaded_model:
        
            

        try:
            data=request.get_json(silent=True,force=True)
            #title="Jet Airways Crisis Deepens as Airlines Says it Can't Clear Pilots' Dues Immediately - News18"
            title = requests.get(title[])
            author=requests.get(author[])
            location=requests.get(location[])
            json_ = request.json()
            print(json_)

            #subject
            nlp = spacy.load('en')
            doc=nlp(title)
            sub_toks = [tok for tok in doc if (tok.dep_ == "nsubj") ]
            
            if not sub_toks:
                subject=""
            else:
                subject=sub_toks[0]

            query = pd.get_dummies(pd.DataFrame(json_))
            query = query.reindex(columns=model_columns, fill_value=0)
            prediction = list(loaded_model.predict(query))
            return jsonify({'prediction': str(prediction)})

        except:

            return jsonify({'trace': traceback.format_exc()})
         
    else:
        print ('Train the model first')
        return ('No model here to use')

if __name__ == '__main__':
    
    loaded_model = pickle.load(open('finalized_model.sav', 'rb'))

    app.run(port=6565, debug=True)