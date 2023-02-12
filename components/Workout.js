import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, FlatList, TouchableOpacity, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import AccelerometerViewer from '../components/AccelerometerViewer';
import ImageViewer from '../components/ImageViewer';

const data = [
  { key: 'Kettlebell Swing'},
  { key: 'Workout 2'},

];

export default function WorkoutOptionsPage({navigation}) {

    const PlaceholderImage = require('../assets/kettleballicon-flaticon.png');

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("WorkoutOngoing")}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>{item.key}</Text>
          </View>
        </TouchableOpacity>
      );
    };


    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.beginWorkout}>
            <View style={styles.buttonCenter}>
              <Text style={styles.topText}>Let's get ready to work out!</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.headerText}>KettleFied Workouts</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
          <View style={styles.space}>
            <Text></Text>
          </View>
          {/* <View>
              <View>
                  <Text style={styles.buttonText}>Kettlefied App v1</Text>
                  <Text style={styles.buttonText}>by The Kettlefied Team</Text>
              </View>
              <View style={styles.infoContainer}>
                  <Text style={styles.buttonText}>Kettlefied is an app + kettlebell attachment for gamified workouts!</Text>
              </View>

              <TouchableOpacity style={styles.buttonCenter} onPress={() => navigation.navigate("WorkoutOngoing")}>
                <Text style={styles.buttonText} >Workout 2</Text>
              </TouchableOpacity>
          </View> */}
      </View>
      );
}

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#287cd7', 
      shadowRadius: 10,
      shadowOffset: 3,
      shadowColor: "black",
      shadowOpacity: 0.5,
      borderRadius: 18,
      width: 300,
      height: 80,
      padding: 20,
      margin: 8
    },


    headerText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 23,
    },

    topText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 33,
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

    buttonCenter: {
      width: 350,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 25,
      backgroundColor: '#fff',
      flexDirection: 'row',
      
    },

    beginWorkout: {
      height: 180,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      flexDirection: 'row',
      
    },

    textContainer: {
      width: 220,
      backgroundColor: '#fff',
    },
    buttonText: {
      fontSize: 20,
      color: 'grey'
    },

    list: {
      paddingVertical: 5,
      overflow: 'scroll',
    },
    space: {
      paddingVertical: 30,
    },


    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      borderRadius: 18,
    },
    imageContainer: {
      margin: 12
    },
    footer: {
      flex: 1/8,
      margin: 12,
      alignItems: 'center',
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
   
  });
  