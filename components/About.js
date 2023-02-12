import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Pressable, Text, Button } from 'react-native'
import ImageViewer from '../components/ImageViewer';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Ionicons } from '@expo/vector-icons';

import * as WebBrowser from 'expo-web-browser';

export default function AboutPage({navigation}) {
    return (
        <View style={styles.container}>
            
            <View>
                <View style={styles.infoContainer}>
                  <Text style={styles.headerText}>Kettlefied App v1.0.0</Text>
                  <Text style={styles.buttonText}>Get ready for exciting, gamified workouts! Kettlefied is an app + kettlebell attachment enabling users to work out at home and have fun! Our app features many gamified workouts for users to try!</Text>
                  <TouchableOpacity style={styles.buttonCenter} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSd4CbLxCB4XL3V_LyeZP-r7XZXOHQoSRXnEhWKqb5lYyOHo2Q/viewform?usp=sf_link')}>
                      <Text style={styles.buttonText}>Give Feedback!</Text>
                  </TouchableOpacity>
                  <Text style={{color: 'grey', padding: 20}}>🏋️ Created by the Kettlefied Team!</Text>
                </View>

            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: "#fff",
      fontSize: 20,
      fontStyle: 'bold'
    },
    headerText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 23,
      marginBottom: 10
    },


    button: {
        width: 350,
        height: 210,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderColor: 'lightgrey', //'#FFC107',
        borderRadius: 12,
        borderWidth: 4,
        flexDirection: 'row',
        
      },
      infoContainer: {
        padding: 20,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 75,
        color: '#000',
        flexDirection: 'column',
        
      },
      buttonCenter: {
        height: 70,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        borderColor: 'lightgrey', //'#FFC107',
        borderRadius: 75,
        borderWidth: 4,
        flexDirection: 'row',
        
      },
      textContainer: {
        width: 220,
        backgroundColor: '#fff',
        
      },
      buttonText: {
        fontSize: 20,
        color: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
      },
      text: {
        color: '#000',
      },


    image: {
      //width: 20,
      //height: 40,
      borderRadius: 18,
    },
    imageContainer: {
      //flex: 1/2,
      margin: 12
      //paddingTop: 58,
    },
    footer: {
      flex: 1/8,
      margin: 12,
      alignItems: 'center',
    },
    Button: {
      padding: 100
    },
    header: {
        fontSize: 25,
        color: "#000",
        fontWeight: 'bold'
    }, 
    text: {
      color: "#fff",
      fontSize: 20
    },
    imageContainer: {
      //flex: 1/2,
      margin: 12
      //paddingTop: 58,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e718ca', 
        shadowRadius: 10,
        shadowOffset: 3,
        shadowColor: "black",
        shadowOpacity: 0.5,
        borderRadius: 18,
        width: 300,
        padding: 20,
        margin: 8
      }
  });
  