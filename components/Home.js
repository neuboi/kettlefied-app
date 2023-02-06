import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable,TouchableOpacity, Text, Button } from 'react-native'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { A } from '@expo/html-elements';

import ImageViewer from '../components/ImageViewer';
import HomePageButton from './HomePageButton'
import Taskbar from './Taskbar';

import * as WebBrowser from 'expo-web-browser';

export default function HomePage({navigation}) {

    {/*https://www.flaticon.com/free-icon/kettlebell_8205418?term=kettlebell&page=1&position=9&origin=tag&related_id=8205418*/}
    const PlaceholderImage = require('../assets/user_icon.png');

    return (

        <View style={styles.container}>
        {/* Five square buttons */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Leaderboard")}/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Stats")} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Calendar")}/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("WorkoutOptions")}/>
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSd4CbLxCB4XL3V_LyeZP-r7XZXOHQoSRXnEhWKqb5lYyOHo2Q/viewform?usp=sf_link')}
        />
      </View>

        // <View style={styles.container}>
        // <Text style={styles.header}>Welcome to Kettlefied, User!</Text>
        // <View style={styles.imageContainer}>
        //     <ImageViewer placeholderImageSource={PlaceholderImage}/> 
        // </View>
        // <View style={styles.footer}>
        //     <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Leaderboard")}>
        //         <Text style={styles.buttonText} >Leaderboard</Text>
        //     </Pressable>
        //     <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Stats")}>
        //         <Text style={styles.buttonText} >Stats</Text>
        //     </Pressable>
        //     <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutOptions")}>
        //         <Text style={styles.buttonText} >Workout Options</Text>
        //     </Pressable>
        // </View>
        // <StatusBar style="auto" />
        // </View>
    )
}
    

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//       headerShown: false,

//     },
//     header: {
//         fontSize: 25,
//         color: "#000",
//         fontWeight: 'bold'
//     }, 
//     text: {
//       color: "#fff",
//       fontSize: 20
//     },
//     buttonText: {
//         color: "#fff",
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: 'center'
//       },
//     imageContainer: {
//       //flex: 1/2,
//       margin: 12
//       //paddingTop: 58,
//     },
//     buttonContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#9d18e7', 
//         shadowRadius: 10,
//         shadowOffset: 3,
//         shadowColor: "black",
//         shadowOpacity: 0.5,
//         borderRadius: 18,
//         width: 300,
//         padding: 20,
//         margin: 8
//       }
//   });
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 350,
      height: 90,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFC107',
      borderRadius: 75,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 20,
      alignItems: 'center',
      backgroundColor: 'lightblue',
    },
    footerText: {
      fontSize: 20,
      color: '#fff',
    },
  });