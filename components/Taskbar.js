import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';

export default function Taskbar() {
    const navigation = useNavigation(); 

    return (
    <View style={styles.taskbarContainer}>

      <TouchableOpacity
        style={styles.taskbarButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="md-home" size={32} />
        {/* <Text style={styles.taskbarButtonText}>Main Menu</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.taskbarButton}
        onPress={() => navigation.navigate('Leaderboard')}
      >
        <Ionicons name="md-people" size={32} />
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.taskbarButton}
        onPress={() => navigation.navigate('Stats')}
      >
        <Ionicons name="md-settings" size={32} />
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.taskbarButton}
        onPress={() => navigation.navigate('WorkoutOptions')}
      >
        <Ionicons name="md-heart" size={32} />
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  taskbarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 40,
  },
  taskbarButton: {
    alignItems: 'space-between',
    justifyContent: 'flex-start',
    marginHorizontal: 30
  },
  taskbarButtonText: {
    color: '#000',
    fontSize: 12,
    marginTop: 0,
  },
});

