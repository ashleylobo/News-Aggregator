import React,{Component} from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,Tab, Tabs,Header,List,Content,Icon,Thumbnail, View} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SignIn from './SignIn';
import Register from './Register';


const routes = [
                {title:"prof",name:"Profile", icon:"user"},
                {title:"rout" , name:"Help Section" , icon:"question-circle"},
                {title:"filter",name:"Filter", icon:"filter"},
                {title:"feedback",name:"Feedback", icon:"comments"},
                {title:"chat",name:"Chatroom", icon:"comment-dots"},
                {title:"prof",name:"Profile", icon:"user"},
                {title:"rout" , name:"Help Section" , icon:"question-circle"},
                {title:"filter",name:"Filter", icon:"filter"},
                {title:"feedback",name:"Feedback", icon:"comments"},
                {title:"chat",name:"Chatroom", icon:"comment-dots"}];

export default class ListItem extends Component {
  render() {
    
    return (    
      

    <Container style={{backgroundColor:'#e8f5fc'}}>
        <Content>  
    
        
            
          

                <View style={{flex:1,}}>
                <Header style={{height: 0}} hasTabs/>
                <Tabs tabBarUnderlineStyle={{backgroundColor: '#00a4fe', opacity:0}} >
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 60}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 60}}
                         heading="Sports">
                        <SignIn navigation={this.props.navigation}/>
                    </Tab>

                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 60}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 60}}
                         heading="Politics">
                        <Register navigation={this.props.navigation}/>
                    </Tab>
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 60}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 60}}
                         heading="Politics">
                        <Register navigation={this.props.navigation}/>
                    </Tab>
                    
                </Tabs>
                  
                

                  <View
                    style={{
                      header: {},
                      tab: {
                          backgroundColor: '#3F51B5'
                      },
                      alignSelf:'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      paddingLeft:20,
                      width:370
                    }}
                  />
            
                </View>  
              
            
          
        </Content>
      </Container>


      
    );
  }
}