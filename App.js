import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font';

import HomePage from './components/Home';
import LeaderboardPage from './components/Leaderboard';
import StatsPage from './components/Stats';
import WorkoutPage from './components/Workout';
import WorkoutDescriptionPage from './components/WorkoutDescription'
import WorkoutOngoingPage from './components/WorkoutOngoing'
import Taskbar from './components/Taskbar';
import Calendar from './components/Calendar';
import AboutPage from './components/About';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-Black': require('assets/PLANE___.TTF'),
  // });
   
  return(
    <View style={{ flex: 1 }}>
      <NavigationContainer>

        {/* Header */}
        {/* <View style={styles.header}>
          <Header></Header>
        </View> */}

        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="Leaderboard" component={LeaderboardPage}/>
          <Stack.Screen name="Stats" component={StatsPage}/>
          <Stack.Screen name="Calendar" component={Calendar}/>

          <Stack.Screen name="WorkoutOptions" component={WorkoutPage}/>
          <Stack.Screen name="WorkoutDescription" component={WorkoutDescriptionPage}/>
          <Stack.Screen name="WorkoutOngoing" component={WorkoutOngoingPage}/>

          <Stack.Screen name="About" component={AboutPage}/>

        </Stack.Navigator>

        {/* Footer */}
        <View style={styles.footer}>
          {/* <Text style={styles.footerText} onPress={() => navigation.navigate("WorkoutOptions")}>Go back to main menu</Text> */}
            <Taskbar></Taskbar>
        </View>

      </NavigationContainer>
    </View>

    

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
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
  Button: {
    padding: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: 'lightgrey',
    borderTopWidth: 2
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    paddingTop: 15,

  },
  footerText: {
    fontSize: 20,
    color: '#fff'
  },
});
