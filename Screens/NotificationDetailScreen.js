import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const NotificationDetailScreen=({route})=>{
    const {title,description}=route.params;


    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>Title: {title}</Text>
            <Text style={StyleSheet.description}>Description: {description}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,

    },
    description:{
        fontSize:16,
    }
})

export default NotificationDetailScreen;