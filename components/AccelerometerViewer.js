import {StyleSheet, Text, View, Pressable} from 'react-native'
import { Accelerometer } from 'expo-sensors';
import React, { useState, useEffect } from 'react';

export default function AccelerometerViewer() {

    // Expo-Sensor Accelerometer Listener code -------------------
    // https://docs.expo.dev/versions/latest/sdk/accelerometer/
  
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
        });
        const [subscription, setSubscription] = useState(null);
    
        const _slow = () => Accelerometer.setUpdateInterval(1000);
        const _fast = () => Accelerometer.setUpdateInterval(16);
    
        const _subscribe = () => {
        setSubscription(
            Accelerometer.addListener(setData)
        );
        };
    
        const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
        };
    
        useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
        }, []);

        // ----------------------------------------------------------
  
    
    return (
        <View style={style.accelerometerDataContainer}>
            <Text style={style.header}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
            <Text style={style.text}>x: {Math.floor(x* 100) / 100}g</Text>
            <Text style={style.text}>y: {Math.floor(y* 100) / 100}g</Text>
            <Text style={style.text}>z: {Math.floor(z* 100) / 100}g</Text>
            <Text style={style.text}>--------------------------------------</Text>
            <Text style={style.text}>x = (Turning Phone Right and Left)</Text>
            <Text style={style.text}>y = ()</Text>
            <Text style={style.text}>z = (Tilt Phone Forward and Back)</Text>

        </View>
    )
}

const style = StyleSheet.create({
    accelerometerDataContainer: {
        padding: 18,
        borderRadius: 10,
        backgroundColor: "#fff",
        textDecorationColor: "black"
    },
    header: {
       textDecorationColor: "red",
    },
    text: {
        textDecorationColor: "red",
    }
    
})