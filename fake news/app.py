from flask import Flask
import requests
from nltk.tag import pos_tag
import spacy
import nltk
import jsonify

app = Flask(__name__)

    
@app.route('/names', methods=['POST'])
def hello():
    sentence = "Mixhael jackson potato"
    tagged_sent = pos_tag(sentence.split())
    propernouns = [word for word,pos in tagged_sent if pos == 'NNP']
    prediction = list(propernouns)

    return jsonify({'propernouns': propernouns})
    


if __name__ == '__main__':
    app.run(debug=True)


