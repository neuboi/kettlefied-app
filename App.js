import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import AccelerometerViewer from './components/AccelerometerViewer';


function Home() {
  const PlaceholderImage = require('./assets/kettleballicon-flaticon.png');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kettlefied Prototype App</Text>
      <View style={styles.imageContainer}>

        {/*https://www.flaticon.com/free-icon/kettlebell_8205418?term=kettlebell&page=1&position=9&origin=tag&related_id=8205418*/}
        <ImageViewer placeholderImageSource={PlaceholderImage}/> 

      </View>
      <AccelerometerViewer/>
      <View style={styles.footer}>
        <Button label="Test Button"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
 
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff"
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
  }
});
