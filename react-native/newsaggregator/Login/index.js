import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Tab, Tabs, Button, TabHeading, Icon} from 'native-base';
import SignIn from './SignIn';
import Register from './Register';

import {NetInfo} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            abc: 1,
        };
    }


  


    render() {
        return ( 
            <View>
                <Text>Yes</Text>
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

