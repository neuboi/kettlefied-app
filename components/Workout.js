import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Button } from 'react-native'

import AccelerometerViewer from '../components/AccelerometerViewer';
import ImageViewer from '../components/ImageViewer';


export default function WorkoutOptionsPage({navigation}) {

    const PlaceholderImage = require('../assets/kettleballicon-flaticon.png');

    return (
        <View style={styles.container}>
          <Text style={styles.header}>Workout Options</Text>
          <View style={styles.imageContainer}>
            {/*https://www.flaticon.com/free-icon/kettlebell_8205418?term=kettlebell&page=1&position=9&origin=tag&related_id=8205418*/}
            <ImageViewer placeholderImageSource={PlaceholderImage}/> 
          </View>
          <AccelerometerViewer/>

            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutOngoing")}>
                <Text style={styles.buttonText} >Workout 1</Text>
            </Pressable>

            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutOngoing")}>
                <Text style={styles.buttonText} >Workout 2</Text>
            </Pressable>

            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutOngoing")}>
                <Text style={styles.buttonText} >Workout 3</Text>
            </Pressable>

          <View style={styles.footer}>
          </View>
          <StatusBar style="auto" />
        </View>
      );
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
    buttonText: {
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#189be7', 
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
  