import {StyleSheet, Text, View, Pressable} from 'react-native'
import React, { useState, useEffect } from 'react';

export default function LeaderboardDisplay() {
    
    return (
        <View >
            <Text style={style.accelerometerDataContainer}>MVP Alert</Text>
            <Text style={style.accelerometerDataContainer}>YOLO Status</Text>
            <Text style={style.accelerometerDataContainer}>Force</Text>
            <Text style={style.accelerometerDataContainer}>Too Cool</Text>
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