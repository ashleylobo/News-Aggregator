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
            sports:true,
            Entertainment:true,
            Science:true,
            Politics:true,
            Finance:true,
            Technology:true,
            English:true,
            Hindi:true,
            Marathi:true,
            Gujarati:true
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
    backgroundColorChange(bgcolor){
        this.setState({
            bgcolor:!bgcolor
        })
    }

    render() {
        console.disableYellowBox = true;
        return ( 

            <View style={styles.container}>
                <View style={styles.header}><Button rounded info style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:260 , marginTop: 20, backgroundColor:"#000c21"  }}
                            onPress={() => {this.backgroundColorChange(this.backgroundColor)}}>
                            <Text style={{color:'white', fontSize:28 }}>Preferences</Text>
                        </Button></View>
                        <Button rounded info style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:660 , marginTop: 5, backgroundColor:"#000160"  }}
                            onPress={() => {this.backgroundColorChange(this.backgroundColor)}}>
                            <Text style={{color:'white', fontSize:28 }}>Topics</Text>
                        </Button>
                {/* <Image style={styles.avatar} source={require('../../assets/images/tumtum.jpg')}/> */}
                <View style={styles.body}>
                    <View>
                        {/* <Button rounded info style={{textAlign:'center',justifyContent:'center',width:260 ,marginTop: 30, alignSelf: 'center', backgroundColor:"#fff"}}
                                onPress={() => this.props.navigation.navigate('studentLogin')}>
                            <Text style={{color:'black'}} >I'm a Student</Text>
                        </Button> */}
                        
                        <View style={{flexDirection:"row"}}>
                        <Button  rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.sports?'#0083d9':'white'  }}
                           onPress={() => this.setState({sports:!(this.state.sports)})}>
                            <Text style={{color:'black'}}>Sports</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.Entertainment?"#0083d9":"white"  }}
                            onPress={() => this.setState({Entertainment:!(this.state.Entertainment)})}>
                            <Text style={{color:'black'}}>Entertainment</Text>
                        </Button>
                        </View>
                        
                        <View style={{flexDirection:"row"}}>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.Science?"#0083d9":"white"  }}
                            onPress={() => this.setState({Science:!(this.state.Science)})}>
                            <Text style={{color:'black'}}>Science</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.Politics?"#0083d9":"white"  }}
                            onPress={() => this.setState({Politics:!(this.state.Politics)})}>
                            <Text style={{color:'black'}}>Politics</Text>
                        </Button>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.Finance?"#0083d9" :"white" }}
                            onPress={() => this.setState({Finance:!(this.state.Finance)})}>
                            <Text style={{color:'black'}}>Finance</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.Technology?"#0083d9" :"white" }}
                            onPress={() => this.setState({Technology:!(this.state.Technology)})}>
                            <Text style={{color:'black'}}>Technology</Text>
                        </Button>
                        </View>
                    </View>
                </View>
                
                <Button rounded info style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:660 , marginTop: 20, backgroundColor:"#000160"  }}
                            onPress={() => {this.backgroundColorChange(this.backgroundColor)}}>
                            <Text style={{color:'white', fontSize:28 }}>Languages</Text>
                        </Button>
                        <View style={styles.body}>
                    
                        {/* <Button rounded info style={{textAlign:'center',justifyContent:'center',width:260 ,marginTop: 30, alignSelf: 'center', backgroundColor:"#000160"}}
                                onPress={() => this.props.navigation.navigate('studentLogin')}>
                            <Text style={{color:'black'}} >I'm a Student</Text>
                        </Button> */}
                        
                        <View style={{flexDirection:"row"}}>
                        <Button  rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.English?"#0083d9" :"white"  }}
                            onPress={() => this.setState({English:!(this.state.English)})}>
                            <Text style={{color:'black'}}>English</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.Hindi?"#0083d9":"white"   }}
                            onPress={() => this.setState({Hindi:!(this.state.Hindi)})}>
                            <Text style={{color:'black'}}>हिंदी</Text>
                        </Button>
                        </View>
                        
                        <View style={{flexDirection:"row"}}>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.Marathi?"#0083d9" :"white"  }}
                            onPress={() => this.setState({Marathi:!(this.state.Marathi)})}>
                            <Text style={{color:'black'}}>मराठी</Text>
                        </Button>
                        <Button rounded info style={{textAlign:'center',marginLeft:10,alignSelf: 'center',justifyContent:'center' ,width:160 , marginTop: 20, backgroundColor:this.state.Gujarati?"#0083d9" :"white"  }}
                            onPress={() => this.setState({Gujarati:!(this.state.Gujarati)})}>
                            <Text style={{color:'black'}}>ગુજરતી</Text>
                        </Button>
                        </View>
                                        
                        </View>
                        <Button rounded style={{alignSelf:'center',width:110,textAlign:'center',justifyContent:'center'
                     }}>
            <Text onPress={ () =>      this.props.navigation.navigate('profile')} style={{color:'black'}}>Submit</Text>
        </Button>

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
      borderColor: "black",
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
      marginTop:5,
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