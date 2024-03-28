
import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const NotificationScreen = () => {

    const navigation = useNavigation();
    const data = [{ id: 1, title: "WhatsApp", description: "New Message pending" },
    { id:1, title: "Snapchat", description: "New snap pending" },{ id: 1, title: "Twitter", description: "MOSSAD killed 20 HAMAS terrorist" }
    ,{ id: 1, title: "WhatsApp", description: "Rohan message you please check" },{ id: 1, title: "Snapchat", description: "Rohan send a snap " },{ id: 1, title: "Twitter", description: "trending tweets" }];
    
    
    
    const Item = ({ title, description, navigation }) => {
      const handlePress = () => {
        navigation.navigate('NotificationDetailScreen', {
          title: title,
          description: description,
        });
      };
    
      return (
        <View style={styles.container1}>
        <Pressable onPress={handlePress} >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </Pressable>
        </View>
      );
    };
    
    const renderItem = ({ item }) => {
      
      return <Item title={item.title} description={item.description} navigation={navigation} />;
    };


  return (
    <View style={styles.container1}>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};




const styles = StyleSheet.create({ 
    container1: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',

        
      },
      innerContainer: {
        backgroundColor: '#e5e5e5',
        paddingBottom:10,
        borderRadius: 15,
        marginHorizontal: 10,
        padding: 15,
        
    
      },
      title:{
        fontWeight: 'bold',
        marginBottom:2,
      },
      description:{
          marginLeft:5,
      }
      
      


 })

export default NotificationScreen;
