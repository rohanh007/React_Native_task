// NotificationScreen.js
import React from 'react';

import { View, Text, StyleSheet, Image } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.container} >
    <View>
    <Image source={require('../images/person1.png')} style={styles.imagePre} />
    <Text style={styles.Text}>Alex</Text>
    <Text style={styles.Text1}>Alex007@gmail.com</Text>
    </View>
  </View> 
  
  );
}


const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        flexDirection: 'row', 
        marginTop:25,
    },
    imagePre:{
        width:400,
        height:300,
        marginTop:20,
        resizeMode: 'contain',
    } ,
    Text:{
        fontSize: 30,
        textAlign:'center',
        alignItems:'center',
        marginTop:20,
        fontWeight:'bold',
        fontStyle:'italic',

        
    },
    Text1:{
        fontSize: 25,
        textAlign:'center',
        alignItems:'center',
        marginTop:10,
        fontWeight:'400',
        fontStyle:'italic',


    } 

})

export default ProfileScreen;
