import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import {Container, Header, Tab, Tabs, Button, TabHeading, Icon} from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';  
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from './env';


import {NetInfo} from 'react-native';
const BOT_USER = {  
    _id: 2,
    name: 'FAQ Bot',
    avatar: 'https://i.imgur.com/7k12EPD.png'
  };
export default class ChatBot extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            messages: [
              {
                _id: 1,
                text: `Hi! I am Search Bot. Please send your query`,
                createdAt: new Date(),
                user: BOT_USER,
                // image:''
              }
            ]
          };
    }


    componentDidMount() {
        Dialogflow_V2.setConfiguration(
          dialogflowConfig.client_email,
          dialogflowConfig.private_key,
          Dialogflow_V2.LANG_ENGLISH_US,
          dialogflowConfig.project_id
        );
      }
    
      handleGoogleResponse(result) {
        
        
        // let text = result.queryResult.fulfillmentMessages[0].text.text[1];
        let image=result.queryResult.fulfillmentMessages[0].text.text[0];
        console.log(image)
        // console.warn(text)
        this.sendBotResponse(image);
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages)
        }));
    
        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
          message,
          result => this.handleGoogleResponse(result),
          error => console.log(error)
        );
      }
    
      sendBotResponse(text) {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          user: BOT_USER,
          // image
        };
    
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));
      }
    
      render() {
        return (
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 1
              }}
            />
          </View>
        );
      }
}

