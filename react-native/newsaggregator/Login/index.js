import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Tab, Tabs, Button, TabHeading, Icon} from 'native-base';

import {NetInfo} from 'react-native';

export default class Login extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            abc: 1,
        };
    }


  


    render() {
        return ( 
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {},
    tab: {
        backgroundColor: '#3F51B5'
    }

})

