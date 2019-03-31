import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import { Container, Content,Card,CardItem,Left,Right,Alert,Thumbnail,Body,Header, Button, Icon, Fab,List } from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';
import SocketIOClient from 'socket.io-client';
import axios from 'axios';
import call from 'react-native-phone-call'

import IPADDR from '../../assets/constant/IP';

const routes = [
  {author :"Jack ",title:"PM Modi's address to nation did not violate model code:EC",description:"Prime Minister Narendra Modi's address to the nation on the successful test-firing of an anti-satellite missile did not violate provisions of the model code of conduct, the Election Commission said on Friday night.",name:"Profile",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/modi_AP.jpeg?a0CAPULR2DuLsseSzSsuexLB1WhOCDpW",publishedAt:"2019-03-30T07:00:56Z",},
  {author :"William ",title:"Mueller report release: Democrats demand full report by early April - as it happened" ,description:"El Paso, Texas readies for hometown 2020 candidate Beto O’Rourke’s first campaign rally there on Saturday morning. The Associated Press has a revealing look at the Democrat’s local history," ,name:"Help Section" ,url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/03/28/931/524/694940094001_6018970625001_6018975820001-vs.jpg?ve=1&tl=1",publishedAt:"2019-03-30T07:00:56Z",},
  {author :"William ",title:"MPs inflict third defeat on Theresa May’s Brexit deal – as it happened",description:"From 0930, parliament will kick off a five hour debate on the first part of Theresa May's Brexit deal, which is her withdrawal agreement.",name:"Filter",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://g8fip1kplyr33r3krz5b97d1-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/GettyImages-656768806-1160x773.jpg",publishedAt:"2019-03-30T07:00:56Z", },
  {author :"William ",title:"If Indira Gandhi Is Credited, Why Should PM Modi Not Be?: Rajnath Singh",description:" At an election rally in Gujarat to mark the day when Amit Shah takes over from LK Advani to contest the 2019 Lok Sabha election from Gandhinagar, Union Home Minister Rajnath Singh asked the crowd why PM Modi should not get credit for the decision to carry out air strikes in Pakistan's Balakot, which destroyed a Jaish-e-Mohammed terror camp.",name:"Feedback",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://c.ndtvimg.com/2019-03/ip36rrik_rajnath-singh-gandhinagar-rally_625x300_30_March_19.jpg",publishedAt:"2019-03-30T07:00:56Z", },
  {author :"William ",title:"Brexit: What happens next after latest government defeat?",description:"The UK was supposed to leave the EU on Friday but, following the government's latest setback, it is no clearer when Brexit will happen.The UK faces a new deadline of 12 April to come up with a way forward.",name:"Chatroom",url:"https://timesofindia.indiatimes.com/elections " ,urlToImage:"https://ichef.bbci.co.uk/news/660/cpsprodpb/FF35/production/_106233356_mediaitem106231222.jpg",publishedAt:"2019-03-30T07:00:56Z", }
  ];

export default class DriverDummy extends Component {  //rename ur calss same as ur folder path
  static navigationOptions = {
    title: 'Favourites',
  };
  toggleLike = () => this.setState(state => ({ liked: !state.liked }));
  lastTap = null; 
  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      this.toggleLike();
    } else {
      this.lastTap = now;
    }
}
  constructor(props) {
    super(props);
    this.socket = SocketIOClient(`http://${IPADDR}:3000`);
    var navi = this.props.navigation;
    var user = navi.getParam('user', {
      name : 'Abby Patil',
      contactNo : 95624723541,
      rating : 2
    })
    this.state = {
      showAlert: true,
      onlineStatus:false,
      id : user.name,
      requested : false,
      riderId : null,
      rider : null,
      seats : 5,
      riderContact : '123456',
      riderRating : 5,
      contactNo : user.contactNo,
      rating : user.rating
    };

    
  }



  render() {
    const {showAlert} = this.state;
    return (
//      
      <Container>
        <Header />
        <Content>
          <List dataArray={routes} 
          renderRow={data=>{
return(  <Card>
  <CardItem>
    <Left>
      <Thumbnail source={{uri: 'Image URL'}} />
      <Body>
        <Text>{data.title}</Text>
        <Text note>{data.name}</Text>
      </Body>
    </Left>
  </CardItem>
  <CardItem cardBody>
    <Image source={{uri: data.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
  </CardItem>
  <CardItem>
    <Left>
      <Button transparent onPress={this.handleDoubleTap}>
        <Icon active name="thumbs-up" />
        <Text>12 Likes</Text>
      </Button>
    </Left>
    <Body>
      <Button transparent>
        <Icon active name="chatbubbles" />
        <Text>4 Comments</Text>
      </Button>
    </Body>
    <Right>
      <Text>11h ago</Text>
    </Right>
  </CardItem>
</Card>

)}}
/>
        
        </Content>
      </Container>

      // <View style={{ flex: 1,alignItems:'center',flexDirection:'row' }}>
      
          
      // {
      //   this.state.requested && 

      //   <AwesomeAlert
      //   show={showAlert}
      //   showProgress={false}
      //   title="Booking needed"
      //   message={ this.state.rider + " wants to book for " + this.state.seats + " seats" }
      //   closeOnTouchOutside={true}
      //   closeOnHardwareBackPress={false}
      //   showCancelButton={true}
      //   showConfirmButton={true}
      //   cancelText="Reject"
      //   confirmText="Accept"
      //   confirmButtonColor="#DD6B55"
      //   onCancelPressed={() => {
      //     this.hideAlert();
      //   }}
      //   onConfirmPressed={ this.acceptRequest }
      // />

      // }

      // </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});
