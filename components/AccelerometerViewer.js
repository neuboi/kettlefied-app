import {StyleSheet, Text, View, Pressable} from 'react-native'
import { Accelerometer, DeviceMotionMeasurement } from 'expo-sensors';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function AccelerometerViewer() {

  // ACCELEROMETER --------------------------------
      // const [data, setData] = useState({});

      // useEffect(() => {
      //   _toggle();
      // }, []);

      // useEffect(() => {
      //   return () => {
      //     _unsubscribe();
      //   };
      // }, []);

      // const _toggle = () => {
      //   if (this._subscription) {
      //     _unsubscribe();
      //   } else {
      //     _subscribe();
      //   }
      // };

      // const _subscribe = () => {
      //   this._subscription = Accelerometer.addListener((accelerometerData) => {
      //     setData(accelerometerData);
      //     // if (accelerometerData.x > 0.5) {
      //     //   console.log('Moved to the right');
      //     // } else if (accelerometerData.x < -0.5) {
      //     //   console.log('Moved to the left');
      //     // } else if (accelerometerData.y > 0.5) {
      //     if (accelerometerData.y > 0.5) {
      //       console.log('Moved up');
      //     } else if (accelerometerData.y < -0.5) {
      //       console.log('Moved down');
      //     }
      //   });
      // };

      // const _unsubscribe = () => {
      //   this._subscription && this._subscription.remove();
      //   this._subscription = null;
      // };
    //ACCELEROMETER ----------------------------------

    // LOCATION IN SPACE -----------------------------------------------------------
      // const [location, setLocation] = useState(null);
      // const [previousLocation, setPreviousLocation] = useState(null);
    
      // useEffect(() => {

      //   //Location -----------------------------------
      //   // if (typeof navigator !== 'undefined' && navigator.geolocation) {
      //   //   const watchId = navigator.geolocation.watchPosition(
      //   //     (newLocation) => {
      //   //       setLocation(newLocation);
      //   //       _checkDirection();
      //   //     },
      //   //     (error) => {
      //   //       console.log(error);
      //   //     },
      //   //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      //   //   );
    
      //   //   return () => {
      //   //     navigator.geolocation.clearWatch(watchId);
      //   //   };
      //   // } else {
      //   //   alert('Geolocation API is not supported in your browser');
      //   // }

      //   //Location -----------------------------------
      //     // (async () => {
      //     //   let { status } = await Location.requestForegroundPermissionsAsync();
      //     //   if (status !== 'granted') {
      //     //     setError('Permission to access location was denied');
      //     //     return;
      //     //   }
      
      //     //   let location = await Location.getCurrentPositionAsync({});
      //     //   setInterval(() => {
      //     //     setLocation(location);
      //     //     _checkDirection(location);
      //     //     console.log("Movement")
      //     //   }, 1000);
      //     // })();
      

      // }, []);
    // LOCATION IN SPACE -----------------------------------------------------------

  
    // const _checkDirection = (location) => {
    //   if (location && location.coords) {
    //     if (previousLocation === null) {
    //       setPreviousLocation(location);
    //       return;
    //     }
  
    //     if (location.coords.latitude > previousLocation.coords.latitude) {
    //       console.log('Moved to the right');
    //     } else if (location.coords.latitude < previousLocation.coords.latitude) {
    //       console.log('Moved to the left');
    //     } else if (location.coords.longitude > previousLocation.coords.longitude) {
    //       console.log('Moved up');
    //     } else if (location.coords.longitude < previousLocation.coords.longitude) {
    //       console.log('Moved down');
    //     }
  
    //     setPreviousLocation(location);
    //   }
    // };


    const [counter, setCounter] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
  
    useEffect(() => {
      let intervalId = 0;
      let left = true;
      let right = false;
  
      const startAccelerometer = async () => {
        await Accelerometer.addListener(accelerometerData => {
          const { x, y, z } = accelerometerData;
  
          // Check if phone is tilted to the left
          if (x < -0.5 && left && !right) {
            setCounter(counter + 1);
            left = false;
            right = true;
          }
  
          // Check if phone is tilted to the right
          else if (x > 0.5 && right && !left) {
            setCounter(counter + 1);
            left = true;
            right = false;
          }
        });
      };
  
      const startCountdown = () => {
        intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
  
          if (timeLeft === 0) {
            clearInterval(intervalId);
          }
        }, 1000);
      };
  
      startAccelerometer();
      startCountdown();
  
      return () => {
          Accelerometer.removeAllListeners();
          clearInterval(intervalId);
        };
      }, [counter, timeLeft]);
  
    return (
      <View style={style.accelerometerDataContainer}>
        <Text>Counter: {counter}</Text>
        <Text>Time Left: {timeLeft}</Text>
      </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    accelerometerDataContainer: {
        padding: 18,
        borderRadius: 10,
        backgroundColor: "#5806f9",
        textDecorationColor: "white",
        fontWeight: "bold"
    },
    header: {
        fontWeight: "bold",
        color: '#fff'

    },
    text: {
        color: '#fff'
    }
    
})