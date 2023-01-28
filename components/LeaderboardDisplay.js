import {StyleSheet, Text, View, Pressable} from 'react-native'
import React, { useState, useEffect } from 'react';

export default function LeaderboardDisplay({navigation}) {
    
    return (
        <View >
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutDescription")}>
                <Text style={styles.buttonText} >MVP Alert</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutDescription")}>
                <Text style={styles.buttonText} >YOLO Status</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("WorkoutDescription")}>
                <Text style={styles.buttonText} >Too Cool</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    
    accelerometerDataContainer: {
        padding: 18,
        borderRadius: 10,
        backgroundColor: "#fff",
        textDecorationColor: "black"
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
    
})