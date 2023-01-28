import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Button } from 'react-native'
import ImageViewer from '../components/ImageViewer';


export default function StatsPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Here are your Stats!</Text>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Stat 1</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Stat 2</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Stat 3</Text>
                </View>
            <View style={styles.footer}>
            </View>
            <StatusBar style="auto" />
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
  