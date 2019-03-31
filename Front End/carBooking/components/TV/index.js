//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {WebView} from 'react-native';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';
import {Container, Content, Header,Body,Button,Left,Thumbnail,Right, Item,Card,CardItem,List, FlatList, Input, Form, Icon} from "native-base";
// create a component
class MyClass extends Component {
  render() {
    YouTubeStandaloneAndroid.playVideo({
      apiKey:'AIzaSyA8VjcZDAfsXc9QW3Pyd_ddc_XN9M4SIPo',     // Your YouTube Developer API Key
      videoId: 'cnugE0LByiU',     // YouTube video ID
      autoplay: true,             // Autoplay the video
      startTime: 120,             // Starting point of video (in seconds)
    })
      .then(() => console.log('Standalone Player Exited'))
      .catch(errorMessage => console.error(errorMessage))
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyClass;
