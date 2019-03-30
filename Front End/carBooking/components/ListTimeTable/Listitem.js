import React,{Component} from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,Tab, Tabs,Header,List,Content,Icon,Thumbnail, View} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SignIn from './SignIn';
import Register from './Register';


const routes = [
                {author :"Jack ",title:"PM Modi's address to nation did not violate model code:EC",description:"Its breaking news!!!",name:"Profile",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z",},
                {author :"William ",title:"rout" ,description:"Its breaking news!!!" ,name:"Help Section" ,url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z",},
                {author :"William ",title:"filter",description:"Its breaking news!!!",name:"Filter",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"feedback",description:"Its breaking news!!!",name:"Feedback",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"chat",description:"Its breaking news!!!",name:"Chatroom",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"prof",description:"Its breaking news!!!",name:"Profile",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"rout" ,description:"Its breaking news!!!" ,name:"Help Section" ,url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"filter",description:"Its breaking news!!!",name:"Filter",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"feedback",description:"Its breaking news!!!",name:"Feedback",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z",},
                {author :"William ",title:"chat",description:"Its breaking news!!!",name:"Chatroom",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z", }];

export default class ListItem extends Component {
  render() {
    
    return (    
      

    <Container style={{backgroundColor:'#e8f5fc'}}>
        <Content>  
    
    

                <View style={{flex:1,}}>
                <Header style={{height: 0}} hasTabs/>
                <Tabs tabBarUnderlineStyle={{borderBottomWidth:2,backgroundColor: 'red', opacity:0}} >
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 60}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 60}}
                         heading="For You">
                        <SignIn navigation={this.props.navigation} data={routes}/>
                    </Tab>

                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 60}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 60}}
                         heading="Trending">
                        <Register navigation={this.props.navigation}/>
                    </Tab>
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 60}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 60}}
                         heading="General Elections">
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