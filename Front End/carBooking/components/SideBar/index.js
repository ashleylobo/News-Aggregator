import React from "react";
import { AppRegistry, Image, StatusBar,Text , StyleSheet ,TouchableOpacity} from "react-native";
import { Button,Container,List,ListItem,Content,Icon,Thumbnail, View} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//const routes = ["Cam", "Ram"];

// const routes = [
//                 {title:"prof",name:"Profile", icon:"user"},
//                 {title:"rout" , name:"Help Section" , icon:"question-circle"},
//                 {title:"filter",name:"Filter", icon:"filter"},
//                 {title:"feedback",name:"Feedback", icon:"comments"},
//                 {title:"chat",name:"Chatroom", icon:"comment-dots"}];

const routes = ["Home", "Chat", "Profile","Extra"];

export default class SideBar extends React.Component {
  render() {

   
    return (
      // <View style={styles.container}>
      //     <View style={styles.header}></View>
          
      //     <View style={styles.body}>
      //       <View style={styles.bodyContent}>
      //         {/* <Text style={styles.name}>John Doe</Text>
      //         <Text style={styles.info}>UX Designer </Text>
      //         <Text style={styles.description}>Lorem ipsum dolor sit amet, isse consequuntur ius an,</Text>
              
      //         <TouchableOpacity style={styles.buttonContainer}
      //             onPress={() => this.props.navigation.navigate('pastRides')}>
                
      //           <Text>Past Rides</Text>  
      //         </TouchableOpacity> */}
                
      //         <Text style={styles.name} 
      //         onPress={() => this.props.navigation.navigate('login')}>        
      //            Home
      //          </Text> 
      //          <Text style={styles.name} 
      //         onPress={() => this.props.navigation.navigate('login')}>        
      //            Favourites
      //          </Text> 
      //       </View>
      //   </View>
      // </View>
      
      <Container>
        <Content>
        <Image style={{alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center", height: 120}} source={require('./w.jpg')} >
          {/* <Image
            source={{
              require('./pexels-photo-459225.jpeg')
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}> */}

</Image>

            {/* <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                require('./a.png')
              }}
            />
          </Image> */}
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>

      
    
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:40,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:80
  },
  name:{
    fontSize:18,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
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