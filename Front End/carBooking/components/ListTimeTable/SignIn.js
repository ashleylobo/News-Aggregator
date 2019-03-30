import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image, View, Dimensions , Linking} from 'react-native';
import {Container, Content, Header,Body,Button,Left,Thumbnail,Right, Item,Card,CardItem, Label, Input, Form,Text, Icon} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assets/images/logo.png';

const {width: WIDTH} = Dimensions.get('window');
export default class SignIn extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            errorMessage: false
        }
    } 

    render() {
        return (
            <Container>
            
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('./b.png')} />
                    <Body>
                      <Text>News</Text>
                      <Text note>CNN</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={require('./b.png')} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
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