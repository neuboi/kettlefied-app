import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StreakCounter from './StreakCounter';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar() {
  const [openDays, setOpenDays] = useState([]);

  useEffect(() => {
    const today = new Date().getDay();
    setOpenDays([...openDays, today]);
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.container_two}>
            {days.map((day, index) => (
                <TouchableOpacity key={day} style={styles.cell}>
                    <Text>{day}</Text>
                    {openDays.includes(index) && <View style={styles.indicator} />}
                </TouchableOpacity>
            ))}
        </View>
        <StreakCounter></StreakCounter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container_two: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
