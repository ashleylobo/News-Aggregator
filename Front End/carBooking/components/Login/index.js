import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import {Container, Header, Tab, Tabs, Button, TabHeading, Icon} from 'native-base';
import SignIn from './SignIn';
import Register from './Register';

import {NetInfo} from 'react-native';

var SampleArray = ["ONE", "TWO"] ;

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


    switchFun() {
        this.props.navigation.navigate('signup')
    }

    switchMap() {

        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
               // this.props.navigation.navigate('listTimeTable');
                //console.warn("Success");
            } else {
                //this.props.navigation.navigate('rout');
            }
        })
    } 

    render() {
        console.disableYellowBox = true;
        return ( 

            <View style={styles.container}>
                <View style={styles.header}><Button rounded info style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:260 , marginTop: 20, backgroundColor:"#000c21"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white', fontSize:28 }}>Preferences</Text>
                        </Button></View>
                        <Button rounded info style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:660 , marginTop: 5, backgroundColor:"#000160"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white', fontSize:28 }}>Topics</Text>
                        </Button>
                {/* <Image style={styles.avatar} source={require('../../assets/images/tumtum.jpg')}/> */}
                <View style={styles.body}>
                    <View>
                        {/* <Button rounded info style={{textAlign:'center',justifyContent:'center',width:260 ,marginTop: 30, alignSelf: 'center', backgroundColor:"#0083d9"}}
                                onPress={() => this.props.navigation.navigate('studentLogin')}>
                            <Text style={{color:'white'}} >I'm a Student</Text>
                        </Button> */}
                        
                        <View style={{flexDirection:"row"}}>
                        <Button  rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Sports</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Entertainment</Text>
                        </Button>
                        </View>
                        
                        <View style={{flexDirection:"row"}}>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Science</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Automobile</Text>
                        </Button>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Astro</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Science</Text>
                        </Button>
                        </View>
                    </View>
                </View>
                <Button rounded info style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:660 , marginTop: 20, backgroundColor:"#000160"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white', fontSize:28 }}>Hashtags</Text>
                        </Button>
                        <View style={styles.body}>
                    
                        {/* <Button rounded info style={{textAlign:'center',justifyContent:'center',width:260 ,marginTop: 30, alignSelf: 'center', backgroundColor:"#0083d9"}}
                                onPress={() => this.props.navigation.navigate('studentLogin')}>
                            <Text style={{color:'white'}} >I'm a Student</Text>
                        </Button> */}
                        
                        <View style={{flexDirection:"row"}}>
                        <Button  rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Sports</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Entertainment</Text>
                        </Button>
                        </View>
                        
                        <View style={{flexDirection:"row"}}>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Science</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:"#0083d9"  }}
                            onPress={() => this.props.navigation.navigate('driverLogin')}>
                            <Text style={{color:'white'}}>Automobile</Text>
                        </Button>
                        </View>
                                        
                        </View>

            </View>
               
        );
    }
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#000c21",
      height:70,
      
    },
    avatar: {
      width: 170,
      height: 170,
      borderRadius: 85,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:150
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:20,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });

// import React, { Component } from "react";
// import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
// export default class CardItemBordered extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content padder>
//           <Card>
//             <CardItem header bordered>
//               <Text>NativeBase</Text>
//             </CardItem>
//             <CardItem bordered>
//               <Body>
//                 <Text>
//                   NativeBase is a free and open source framework that enable
//                   developers to build
//                   high-quality mobile apps using React Native iOS and Android
//                   apps
//                   with a fusion of ES6.
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem footer bordered

// >
//               <Text>GeekyAnts</Text>
//             </CardItem>
//           </Card>
//         </Content>
//       </Container>
//     );
//   }
// }