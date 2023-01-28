import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Button } from 'react-native'
import LeaderboardDisplay from '../components/LeaderboardDisplay';

export default function LeaderboardPage({navigation}) {
    {/*https://www.flaticon.com/free-icon/user_1077114?term=user&page=1&position=3&origin=search&related_id=1077114*/}
    //const PlaceholderImage = require('./assets/kettleballicon-flaticon.png');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>You're in the Premier League!</Text>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutDescription")}>
                <Text style={styles.buttonText} >MVP Alert</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutDescription")}>
                <Text style={styles.buttonText} >YOLO Status</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutDescription")}>
                <Text style={styles.buttonText} >Too Cool</Text>
            </Pressable>
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
    header: {
        fontSize: 25,
        color: "#000",
        fontWeight: 'bold'
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

    buttonText: {
        color: "white",
        fontWeight: "bold",
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
      }
  });
  