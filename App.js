import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import AccelerometerViewer from './components/AccelerometerViewer';

export default function App() {
 
  const PlaceholderImage = require('./assets/kettleballicon-flaticon.png');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kettlefied Prototype App</Text>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      <AccelerometerViewer/>
      <View style={styles.footer}>
        <Button label="Choose a photo"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
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
