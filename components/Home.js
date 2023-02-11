import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, TouchableOpacity, Text, FlatList, Button } from 'react-native'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { A } from '@expo/html-elements';
import { Ionicons } from '@expo/vector-icons';

import ImageViewer from '../components/ImageViewer';
import HomePageButton from './HomePageButton'
import Taskbar from './Taskbar';

import * as WebBrowser from 'expo-web-browser';

const data = [
  { key: 'Button 1' },
  { key: 'Button 2' },
  { key: 'Button 3' },
];

export default function HomePage({navigation}) {

    {/*https://www.flaticon.com/free-icon/kettlebell_8205418?term=kettlebell&page=1&position=9&origin=tag&related_id=8205418*/}
    const PlaceholderImage = require('../assets/user_icon.png');

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={styles.button}>
          <Ionicons name="md-settings" size={32} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>{item.key}</Text>
          </View>
        </TouchableOpacity>

      );
    };


    return (
        <View style={styles.container}>
          {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Leaderboard")}/>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Stats")} />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Calendar")}/>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("WorkoutOptions")}/>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSd4CbLxCB4XL3V_LyeZP-r7XZXOHQoSRXnEhWKqb5lYyOHo2Q/viewform?usp=sf_link')}
            /> */}
          <View>
            <Ionicons name="md-people" size={128} />
            <Text style={styles.headerText}>Stephen Adjei</Text>
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              contentContainerStyle={styles.list}
            />
            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSd4CbLxCB4XL3V_LyeZP-r7XZXOHQoSRXnEhWKqb5lYyOHo2Q/viewform?usp=sf_link')}>
                <Text style={styles.headerText}>Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
        
    )
}
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "#fff"
    },
    button: {
      width: 350,
      height: 110,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 25,
      backgroundColor: '#ffffff',
      borderColor: 'lightgrey', //'#FFC107',
      borderRadius: 12,
      borderWidth: 4,
      flexDirection: 'row',
      
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 20,
      alignItems: 'center',
      backgroundColor: 'whites',
    },
    footerText: {
      fontSize: 20,
      color: '#fff',
    },
    text: {
      color: '#000',
    },
    buttonText: {
      fontSize: 20,
      color: 'grey'
    },
    list: {
      padding: 20,
      height: 400
    },
    headerText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 23,
    },
    textContainer: {
      width: 220,
      backgroundColor: '#fff',
      
    }
  });