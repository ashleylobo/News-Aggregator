import flask
import os
from flask import jsonify, request
from flask import flash, redirect, url_for, session
from joblib import load
from flask_cors import CORS, cross_origin
import requests, json
import pandas as pd
import requests







app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.secret_key = 'super secret key'
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/predict', methods=['POST'])
def predict():

    # print( json.dumps( request.json['data'] ) )

    try :
        req=request.get_json(silent=True,force=True)
        print(req.get('queryResult').get('parameters'))
        return jsonify( {'fulfillmentText':"Hi"} )

    except:
        return jsonify( { "result" : "error" , "status"  : False } )      






app.run(host='0.0.0.0',port=5000)