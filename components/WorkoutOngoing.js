import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { ProgressBar, Colors } from 'react-native-paper';
import { Accelerometer } from 'expo-sensors';
import AccelerometerViewer from '../components/AccelerometerViewer';

const timeLimit = 10;
const progressBarSize = 100;
const progressBarInnerIncrease = progressBarSize / timeLimit;

export default function WorkoutOngoingPage () {

  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("In progress...");

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < progressBarSize) {
        setProgress(prevProgress => prevProgress + progressBarInnerIncrease);
      } else {
        console.log("too large")
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    if (progress == (progressBarSize)) {
      playSound();
      setText("Well done!");
      clearInterval(interval)
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
      <View style={[styles.progressBarOuter, {width: progressBarSize}]} color="#ffffff">
        <View style={[styles.progressBarInner, {width: progress}]} color="#ffffff" />
      </View>
      <Text style={styles.text}>{progress} seconds</Text>
      <View style={styles.container}>
        <AccelerometerViewer></AccelerometerViewer>
      </View>
    </View>
  );
};

const round = number => {
  return Math.floor(number * 100) / 100;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    marginBottom: 20
  },
  progressBarInner: {
    height: 50,
    flexDirection: "row",
    backgroundColor: '#58CC02',
    borderColor: '#000',
    borderRadius: 5
  },
  progressBarOuter: {
    height: 50,
    flexDirection: "row",
    backgroundColor: 'grey',
    borderColor: '#000',
    borderRadius: 5
  }
});
