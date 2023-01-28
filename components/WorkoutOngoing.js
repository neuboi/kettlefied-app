import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Button } from 'react-native'
import ImageViewer from '../components/ImageViewer';

export default function WorkoutOngoingPage({navigation}) {
  const PlaceholderImage = require('../assets/kettleballicon-flaticon.png');

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Workout: 20 Reps</Text>
          <View style={styles.imageContainer}>
            {/*https://www.flaticon.com/free-icon/kettlebell_8205418?term=kettlebell&page=1&position=9&origin=tag&related_id=8205418*/}
            <ImageViewer placeholderImageSource={PlaceholderImage}/> 
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
      backgroundColor: '#f30c47',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 25,
      color: "#fff",
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
    }
  });
  