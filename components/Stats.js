import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, FlatList, TouchableOpacity, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import ImageViewer from '../components/ImageViewer';
import StreakCounter from '../components/StreakCounter';
import Calendar from '../components/Calendar'

const data = [
  { key: 'Kettlebell Swing', desc: 'Youve done this workout the most!' },
  { key: 'Mon Feb 13', desc: 'You worked out for the longest time on this day!' },
  { key: '1 Hour and 30 Minutes', desc: 'This is the longest youve worked out so far!' },
  { key: '17 Friends', desc: 'Youve shared this app with 30 Friends!' }

];

export default function StatsPage({navigation}) {

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={styles.button}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonHeader}>{item.key}</Text>
            <Text style={styles.buttonText}>{item.desc}</Text>

          </View>
        </TouchableOpacity>

      );
    };

    return (
        <View style={styles.container}>

          <View style={styles.container}>
            <View style={styles.statsHeader}>
              <Text style={styles.headerText}>You're doing great, Stephen!</Text>
              <StreakCounter></StreakCounter>
              <Calendar></Calendar>
            </View>
            
            <FlatList
              data={data}
              renderItem={renderItem}
              contentContainerStyle={styles.list}
            />
            <View style={styles.space}>
              <Text></Text>
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({

  statsHeader: {
    paddingVertical: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
    paddingTop: 30
  },
  button: {
    width: 350,
    height: 210,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    borderColor: 'lightgrey', //'#FFC107',
    borderRadius: 40,
    borderWidth: 4,
    flexDirection: 'row',
    
  },
  textContainer: {
    width: 220,
    backgroundColor: '#fff',
  },
  buttonHeader: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
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
    text: {
      color: "#000",
      fontSize: 20,
      fontStyle: 'bold'
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
  