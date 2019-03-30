import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image, View, Dimensions , Linking,TouchableOpacity} from 'react-native';
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
      console.warn(typeof(this.props.data))
      console.log("HERE  ",typeof(this.props.data.publishedAt))
      d=new Date(this.props.data.publishedAt)
      date=d.toLocaleString()
      console.log("DATE is ",d.toLocaleString())
        return (
            <Container>
            
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('./b.png')} />
                    <Body>
                      <Text>{this.props.data.title}</Text>
                      <Text note>CNN</Text>
                    </Body>
                  </Left>
                </CardItem>
                <TouchableOpacity onPress={()=>{
                 Linking.openURL("https://www.google.com")
               }} >
                <CardItem cardBody  >
              
            
                  <Image source={{uri:this.props.data.urlToImage}}  style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Body style={{flexDirection: 'row'}}>
                    
                    <Button transparent>
                    <Icon active name="logo-facebook" />
                    </Button>
                    
                    <Button transparent>
                    <Icon active name="logo-whatsapp" />
                      
                    </Button>
                    
                  </Body>
                  
                  <Right>
                    <Text>Published at : {date}</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </Container>    
   
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