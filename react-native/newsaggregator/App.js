/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Item, Input, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator, createAppContainer,  createDrawerNavigator, createSwitchNavigator ,createBottomTabNavigator } from "react-navigation";
import Login from './Login';
import NearMeMap from './NearMeMap';
// import OK from './ok.js'
// const Mdn = createDrawerNavigator({
//   nearmeMap: {screen:NearMeMap}, 
//   // secondOption:{screen:OK}, 

// },


// )


const Mdn = createDrawerNavigator({
  Login:Login,
  Language:NearMeMap,
  
  
}

)

const AppNavigator = createStackNavigator({
  profile:Mdn,
  
  

    },
{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft:(
        <FontAwesome5 name={"bars"} brand style={{paddingLeft:15 , fontSize: 30, color:'white'}} onPress={() => navigation.toggleDrawer()}/>
      ),
      title:("EVAN "),
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize:30,
        paddingLeft:100,
        color: "white",
        
        alignSelf: 'center',
      },
      headerStyle: {
        borderBottomColor:"white",
        borderBottomWidth:1,
        backgroundColor: "#6200EE"
      }
    };
  }
});

export default createAppContainer(AppNavigator);