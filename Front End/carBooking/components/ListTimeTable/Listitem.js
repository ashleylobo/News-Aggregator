import React,{Component} from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,Tab,TabHeaing, Tabs,Header,List,Content,Icon,Thumbnail, View} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SignIn from './SignIn';
import Register from './Register';
import General from './General';


const routes = [
                {author :"Jack ",title:"PM Modi's address to nation did not violate model code:EC",description:"Its breaking news!!!",name:"Profile",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z",},
                {author :"William ",title:"Mueller report release: Democrats demand full report by early April - as it happened" ,description:"Its breaking news!!!" ,name:"Help Section" ,url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/03/28/931/524/694940094001_6018970625001_6018975820001-vs.jpg?ve=1&tl=1",publishedAt:"2019-03-30T07:00:56Z",},
                {author :"William ",title:"MPs inflict third defeat on Theresa May’s Brexit deal – as it happened",description:"Its breaking news!!!",name:"Filter",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://g8fip1kplyr33r3krz5b97d1-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/GettyImages-656768806-1160x773.jpg",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"If Indira Gandhi Is Credited, Why Should PM Modi Not Be?: Rajnath Singh",description:"Its breaking news!!!",name:"Feedback",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://c.ndtvimg.com/2019-03/ip36rrik_rajnath-singh-gandhinagar-rally_625x300_30_March_19.jpg",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"Brexit: What happens next after latest government defeat?",description:"Its breaking news!!!",name:"Chatroom",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://ichef.bbci.co.uk/news/660/cpsprodpb/FF35/production/_106233356_mediaitem106231222.jpg",publishedAt:"2019-03-30T07:00:56Z", },
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
                <Tabs tabBarUnderlineStyle={{borderBottomWidth:0,backgroundColor: 'white', opacity:1}} >
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: 'black', fontSize: 12}}
                         tabStyle={{backgroundColor: '#fff', height: 40}}
                         
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 40}}
                         heading="FOR YOU">
                        <SignIn navigation={this.props.navigation} data={routes}/>
                    </Tab>

                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: 'black', fontSize: 12}}
                         tabStyle={{backgroundColor: '#fff', height: 40}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 40}}
                         heading="Trending">
                        <Register navigation={this.props.navigation} data={routes}/>
                    </Tab>
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: 'black', fontSize: 12}}
                         tabStyle={{backgroundColor: '#fff', height: 40}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 40}}
                         heading="General Elections">
                        <General navigation={this.props.navigation} data={routes}/>
                    </Tab>
                    
                </Tabs>


                  
                  {/* <View style={{flexDirection:'row' ,marginTop:7 , marginBottom: 7}}> */}
                    {/* <View style={{flex:0.85}}>
                      <Text blurRadius={1} style={{color:'black' , fontSize:23, paddingLeft:20 ,paddingRight:5}}>07:40 PM  COLLEGE</Text>
                      <Text blurRadius={1} style={{color:'grey' , fontSize:12, paddingLeft:20 ,paddingRight:5}}>Superfast Spl. Sunday General</Text>
                      <Text blurRadius={1} style={{color:'grey' , fontSize:12, paddingLeft:20 ,paddingRight:5}}>STATION - COLLEGE</Text>
                    </View> */}
                    
                    {/* <View style={{flex:0.15 ,borderRightWidth:10 , borderRightColor: "red" , justifyContent:'center' , alignItems: 'center', }}>
                      <Text blurRadius={1} style={{color:'black' , fontSize:12,paddingRight:5}}>35 min</Text>
                      <FontAwesome5 name={"star"} style={{fontSize:25}} />
                    </View> */}
                  {/* </View> */}

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
              
        </Content>
      </Container>


      
    );
  }
}