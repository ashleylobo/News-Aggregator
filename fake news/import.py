import requests
from nltk.tag import pos_tag
import spacy
import nltk


def get_human_names(text):
    tokens = nltk.tokenize.word_tokenize(text)
    pos = nltk.pos_tag(tokens)
    sentt = nltk.ne_chunk(pos, binary = False)
    person_list = []
    person = []
    name = ""
    for subtree in sentt.subtrees(filter=lambda t: t.label == 'PERSON'):
        for leaf in subtree.labels():
            person.append(label[0])
        if len(person) > 1: #avoid grabbing lone surnames
            for part in person:
                name += part + ' '
            if name[:-1] not in person_list:
                person_list.append(name[:-1])
            name = ''
        person = []

    return (person_list)

URL="https://newsapi.org/v2/top-headlines?country=in&apiKey=22284ec06b3e4717ac7dec4364156177"
response = requests.get(url = URL)

data = response.json()

print(data)
sentence = data["articles"][0]['title']
tagged_sent = pos_tag(sentence.split())
# [('Michael', 'NNP'), ('Jackson', 'NNP'), ('likes', 'VBZ'), ('to', 'TO'), ('eat', 'VB'), ('at', 'IN'), ('McDonalds', 'NNP')]

propernouns = [word for word,pos in tagged_sent if pos == 'NNP']


nlp = spacy.load('en')
doc=nlp(sentence)
sub_toks = [tok for tok in doc if (tok.dep_ == "nsubj") ]



statement = data["articles"][0]['title']
if not sub_toks:
    subject=""
else:
    subject=sub_toks[0]

names = get_human_names(statement)
for name in names: 
    last_first = HumanName(name).last + ', ' + HumanName(name).first
   

if not sub_toks:
    speaker=""
else:
    speaker=last_first[0]

job=""
state=""
party=""

print(statement)
print(subject)
print(speaker)

#  cols = ["ID", "label", "statement", "subject", "speaker", "job", "state", "party", "barely_true_cts",
#     #         "false_cts", "half_true_cts", "mostly_true_cts", "pants_on_fire_cts", "context"]
