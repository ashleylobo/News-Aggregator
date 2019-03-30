import React,{Component} from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,Tab,TabHeaing, Tabs,Header,List,Content,Icon,Thumbnail, View} from "native-base";
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
    
        <List 
            dataArray={routes}
            renderRow={data => {
              return (

                <View style={{flex:1,}}>
                <Header style={{height: 0}} hasTabs/>
                <Tabs tabBarUnderlineStyle={{borderBottomWidth:0,backgroundColor: 'white', opacity:1}} >
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 40}}
                         
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 40}}
                         heading="Personalised Feed">
                        <SignIn navigation={this.props.navigation} data={data}/>
                    </Tab>

                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 40}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 40}}
                         heading="Trending">
                        <Register navigation={this.props.navigation}/>
                    </Tab>
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 40}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 40}}
                         heading="General Elections">
                        <Register navigation={this.props.navigation}/>
                    </Tab>
                    
                </Tabs>


                  
                  <View style={{flexDirection:'row' ,marginTop:7 , marginBottom: 7}}>
                    {/* <View style={{flex:0.85}}>
                      <Text blurRadius={1} style={{color:'black' , fontSize:23, paddingLeft:20 ,paddingRight:5}}>07:40 PM  COLLEGE</Text>
                      <Text blurRadius={1} style={{color:'grey' , fontSize:12, paddingLeft:20 ,paddingRight:5}}>Superfast Spl. Sunday General</Text>
                      <Text blurRadius={1} style={{color:'grey' , fontSize:12, paddingLeft:20 ,paddingRight:5}}>STATION - COLLEGE</Text>
                    </View> */}
                    
                    {/* <View style={{flex:0.15 ,borderRightWidth:10 , borderRightColor: "red" , justifyContent:'center' , alignItems: 'center', }}>
                      <Text blurRadius={1} style={{color:'black' , fontSize:12,paddingRight:5}}>35 min</Text>
                      <FontAwesome5 name={"star"} style={{fontSize:25}} />
                    </View> */}
                  </View>

                  <View
                    style={{
                      header: {},
                      tab: {
                          backgroundColor: '#0083d9'
                      },
                      alignSelf:'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: 0,
                      paddingLeft:20,
                      width:370
                    }}
                  />
            
                </View>  
              );
            }}
          />
        </Content>
      </Container>


      
    );
  }
}