import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import { Container, Content,Card,CardItem,Left,Right,Alert,Thumbnail,Body,Header, Button, Icon, Fab } from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';
import SocketIOClient from 'socket.io-client';
import axios from 'axios';
import call from 'react-native-phone-call'

import IPADDR from '../../assets/constant/IP';

export default class TV extends Component {  //rename ur calss same as ur folder path
  static navigationOptions = {
    title: 'TV',
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
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
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
