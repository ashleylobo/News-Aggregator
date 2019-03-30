import React,{Component} from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,Tab,TabHeaing, Tabs,Header,List,Content,Icon,Thumbnail, View,Fab} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SignIn from './SignIn';
import Register from './Register';
import General from './General';


const routes = [
                {author :"Jack ",title:"PM Modi's address to nation did not violate model code:EC",description:"Prime Minister Narendra Modi's address to the nation on the successful test-firing of an anti-satellite missile did not violate provisions of the model code of conduct, the Election Commission said on Friday night.",name:"Profile",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z",},
                {author :"William ",title:"Mueller report release: Democrats demand full report by early April - as it happened" ,description:"El Paso, Texas readies for hometown 2020 candidate Beto O’Rourke’s first campaign rally there on Saturday morning. The Associated Press has a revealing look at the Democrat’s local history," ,name:"Help Section" ,url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/03/28/931/524/694940094001_6018970625001_6018975820001-vs.jpg?ve=1&tl=1",publishedAt:"2019-03-30T07:00:56Z",},
                {author :"William ",title:"MPs inflict third defeat on Theresa May’s Brexit deal – as it happened",description:"From 0930, parliament will kick off a five hour debate on the first part of Theresa May's Brexit deal, which is her withdrawal agreement.",name:"Filter",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://g8fip1kplyr33r3krz5b97d1-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/GettyImages-656768806-1160x773.jpg",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"If Indira Gandhi Is Credited, Why Should PM Modi Not Be?: Rajnath Singh",description:" At an election rally in Gujarat to mark the day when Amit Shah takes over from LK Advani to contest the 2019 Lok Sabha election from Gandhinagar, Union Home Minister Rajnath Singh asked the crowd why PM Modi should not get credit for the decision to carry out air strikes in Pakistan's Balakot, which destroyed a Jaish-e-Mohammed terror camp.",name:"Feedback",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://c.ndtvimg.com/2019-03/ip36rrik_rajnath-singh-gandhinagar-rally_625x300_30_March_19.jpg",publishedAt:"2019-03-30T07:00:56Z", },
                {author :"William ",title:"Brexit: What happens next after latest government defeat?",description:"The UK was supposed to leave the EU on Friday but, following the government's latest setback, it is no clearer when Brexit will happen.The UK faces a new deadline of 12 April to come up with a way forward.",name:"Chatroom",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://ichef.bbci.co.uk/news/660/cpsprodpb/FF35/production/_106233356_mediaitem106231222.jpg",publishedAt:"2019-03-30T07:00:56Z", }
                ];

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
                         heading="For You">
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