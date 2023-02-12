import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>KettleFied | YOLO Status</Text>
            <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('About')}>
                <Ionicons name="md-settings" size={32} />
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
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flex: 1,
    paddingTop: 40

    
  }
});

