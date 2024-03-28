// NotificationScreen.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image,ScrollView } from "react-native";
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem';
import data from '../data';


const HomeScreen = () => {
    const isCarousel = React.useRef(null)
  
    return (
      <View>
              <ScrollView style={styles.scrollView} >
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
        <View style={styles.container}>
          <View>
        
        </View>
        <View>
        <Text style={{fontSize:20 ,marginBottom:10,marginLeft:20}}>Clients</Text> 
        <ScrollView horizontal={true} >
                <View style={styles.comp1} >
                  <Image source={require('../images/person1.png')} style={styles.imagePre}  />
                  <Text style={styles.Text}>UserName1</Text>
                </View>  
                <View style={styles.comp2} > 
                <Image source={require('../images/person2.png')} style={styles.imagePre}  />
                  <Text style={styles.Text}>UserName2</Text> 
                </View>
                <View style={styles.comp3} >
                <Image source={require('../images/person1.png')} style={styles.imagePre}  />
                  <Text style={styles.Text}>UserName3</Text>
                </View>
                <View style={styles.comp2} > 
                <Image source={require('../images/person2.png')} style={styles.imagePre}  />
                  <Text style={styles.Text}>UserName2</Text> 
                </View>
                <View>
                <Image source={require('../assets/splash.png')} style={styles.imagePre}  /> 
                </View>
          </ScrollView>
          </View>
        </View>
        <View style={styles.container1} >
        <Text style={{fontSize:20 ,marginTop:20,marginLeft:20}}>Posts</Text> 
        <View>
         <Image source={require('../assets/nodejsimage.jpg')} style={styles.imagePre1} />
         </View>
         <Image source={require('../assets/nodejsimage.jpg')} style={styles.imagePre2} />
         </View> 
         </ScrollView>        
      </View>
      
        
    )
  }
  
// function HomeScreen() {
//   return (
//     <View>
//       <Text>HomeScreen Screen</Text>
//     </View>
//   );
// }
const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        flexDirection: 'row', 
        marginTop:10,
    },  
    comp1:{ 
        width: 130,  
        height: 200,  
        backgroundColor: '#e1e1e1', 
        marginLeft:2, 
    },  
    comp2:{  
        width:130,  
        height:200,  
        backgroundColor: '#e1e1e1', 
        marginLeft:2, 
    },  
    comp3:{  
        width:130,  
        height: 200,  
        backgroundColor: '#e1e1e1',  
        marginLeft:2,
    } ,
    Text:{
       justifyContent:'center',
       alignItems:'center', 
       marginTop:25,
       marginLeft:30,
    } ,
    imagePre: {
        width: 100,
        height: 100,
        margin: 5,
        marginTop:10,
        marginRight:2,
        resizeMode: 'contain',
        borderRadius: 50 / 2,
        marginRight: 20,
        marginLeft:15,
      },
      container1:{
        marginTop:0,
      },
      imagePre1:{
        width:400,
        height:300,
        marginTop:-30,
        resizeMode: 'contain',
      },
      imagePre2:{
        width:400,
        height:300,
        marginTop:-60,
        resizeMode: 'contain',
      }
})  
export default HomeScreen;
