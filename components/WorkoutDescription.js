import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Button } from 'react-native'
import ImageViewer from '../components/ImageViewer';


export default function WorkoutDescriptionPage({navigation}) {
    return (
        <View style={styles.container}>

        <View style={styles.buttonContainer}>
            <Text style={styles.header} >Workout</Text>
        </View>
        <Text style={styles.desc}>A description of this workout</Text>

        <View style={styles.footer}>
        </View>
        <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9d18e7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        fontSize: 25,
        color: "#fff",
        fontWeight: 'bold'
    }, 
    desc: {
      fontSize: 25,
      color: "#000",
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
    imageContainer: {
      //flex: 1/2,
      margin: 12
      //paddingTop: 58,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ce11ee', 
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
  