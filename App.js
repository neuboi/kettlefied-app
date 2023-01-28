import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ImageViewer from './components/ImageViewer';
//import Button from './components/Button';
import AccelerometerViewer from './components/AccelerometerViewer';
import LeaderboardDisplay from './components/LeaderboardDisplay';


function Home({navigation}) {

  {/*https://www.flaticon.com/free-icon/kettlebell_8205418?term=kettlebell&page=1&position=9&origin=tag&related_id=8205418*/}
  const PlaceholderImage = require('./assets/user_icon.png');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Kettlefied, User!</Text>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/> 
      </View>
      <View style={styles.footer}>
        <Button title="Go to Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
        <Button title="Go to Stats" onPress={() => navigation.navigate('Stats')} />
        <Button title="Go to Workout Option" onPress={() => navigation.navigate('WorkoutOptions')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function Leaderboard({navigation}) {

  {/*https://www.flaticon.com/free-icon/user_1077114?term=user&page=1&position=3&origin=search&related_id=1077114*/}
  const PlaceholderImage = require('./assets/kettleballicon-flaticon.png');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You're in the Premier League!</Text>
      <LeaderboardDisplay/>

      <View style={styles.footer}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function Stats({navigation}) {
  const PlaceholderImage = require('./assets/kettleballicon-flaticon.png');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kettlefied Prototype App</Text>
      <View style={styles.imageContainer}>

        {/*https://www.flaticon.com/free-icon/kettlebell_8205418?term=kettlebell&page=1&position=9&origin=tag&related_id=8205418*/}
        <ImageViewer placeholderImageSource={PlaceholderImage}/> 

      </View>
      <Text style={styles.text}>You're in the Premier League!</Text>
      <Text style={styles.text}>You're in the Premier League!</Text>

      <View style={styles.footer}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function WorkoutOptions({navigation}) {
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
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
 
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Leaderboard" component={Leaderboard}/>
        <Stack.Screen name="Stats" component={Stats}/>
        <Stack.Screen name="WorkoutOptions" component={WorkoutOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9d18e7',
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
  }
});
