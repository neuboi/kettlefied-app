import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
// import { ProgressBar, ProgressBarAndroid } from "@react-native-community/progress-bar-android";
import { ProgressBar, Colors } from 'react-native-paper';

export default function WorkoutOngoingPage () {

  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("In progress...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 10) {
      playSound();
      setText("Well done!");
    }
  }, [progress]);

  const playSound = async () => {
    // const soundObject = new Audio.Sound();
    // try {
    //   await soundObject.loadAsync(require("./assets/success.mp3"));
    //   await soundObject.playAsync();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}> {text} </Text>

      <View style={[styles.progressBar, {width: progress}]} color="#ffffff" />

      <Text style={styles.text}>{progress} seconds</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ADD8E6"
  },
  text: {
    fontSize: 20,
    marginBottom: 20
  },
  progressBar: {
    height: 20,
    flexDirection: "row",
    
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }
});
