import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image, View, Dimensions , Linking,TouchableOpacity,ScrollView} from 'react-native';
import {Container, Content, Header,Body,Button,Left,Thumbnail,Right, Item,Card,CardItem,List, FlatList, Input, Form,Text, Icon} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assets/images/logo.png';
import InAppBrowser from 'react-native-inappbrowser-reborn'

const {width: WIDTH} = Dimensions.get('window');
export default class SignIn extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            errorMessage: false
        }
        this.openLink=this.openLink.bind(this)
    } 

    async openLink(url) {
      try {
        if (await InAppBrowser.isAvailable()) {
      
          const result = await InAppBrowser.open(url, {
           
            // Android Properties
            showTitle: true,
            toolbarColor: '#6200EE',
            secondaryToolbarColor: 'black',
            enableUrlBarHiding: true,
            enableDefaultShare: true,
            forceCloseOnRedirection: false,
            // Specify full animation resource identifier(package:anim/name)
            // or only resource name(in case of animation bundled with app).
            animations: {
              startEnter: 'slide_in_right',
              startExit: 'slide_out_left',
              endEnter: 'slide_in_right',
              endExit: 'slide_out_left',
            },
            headers: {
              'my-custom-header': 'my custom header value'
            },
          })
          Alert.alert(JSON.stringify(result))
        }
        else Linking.openURL(url)
      } catch (error) {
        Alert.alert(error.message)
      }
    }


    render() {
      console.warn(typeof(this.props.data))
      console.log("HERE  ",this.props.data)
        return (
            <ScrollView>
            <List  
            dataArray ={this.props.data}
            renderRow ={data => {
              return (
 
            
            
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('./q.jpg')} />
                    <Body>
                      <Text>{data.title}</Text>
                      <Text note>Published at :{data.publishedAt}</Text>
                    </Body>
                  </Left>
                </CardItem>
                
                <TouchableOpacity onPress={()=>{
                //  Linking.openURL("https://www.google.com")
                  this.openLink(data.url)
               }} >
                <CardItem   >
               
            
                  <Image source={{uri:data.urlToImage}}  style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                </TouchableOpacity>
                <CardItem   >
                  <Text>{data.description}</Text>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      
                    </Button>
                  </Left>
                  <Body>
                    {/* <Button transparent>
                      <Icon active name="chatbubbles" />
                     
                    </Button> */}
                  </Body>
                  <Right style={{flexDirection: 'row'}}>
                  <Button small >
                    <Icon active name="logo-facebook" />
                    </Button>
                    
                    <Button small>
                    <Icon active name="logo-whatsapp" />
                      
                    </Button>
                  </Right>
                </CardItem>
              </Card>
               
            );
          }}
          />
          
          </ScrollView>    
    //   <Container>
     
    //   <Content >
    //     <Card>
    //       <CardItem header bordered>
    //         <Text>Tittle</Text>
    //       </CardItem>
    //       <CardItem bordered>
    //         <Body>
    //           <Text>
    //             NativeBase is a free and open source framework that enable
    //             developers to build
    //             high-quality mobile apps using React Native iOS and Android
    //             apps
    //             with a fusion of ES6.
    //           </Text>
    //         </Body>
    //       </CardItem>
    //       <CardItem footer bordered>
    //         <Text>GeekyAnts</Text><Icon name="ios-refresh" />
    //       </CardItem>
        
    //     </Card>
    //   </Content>
    // </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    logoText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '300',
        opacity: 0.9,
    },
    item: {
        paddingTop: 10,
    },

});

// export default FloatingLabel;