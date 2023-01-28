import { StyleSheet, View, Pressable, Text } from 'react-native'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function HomePageButton({label}, {navigation}) {
    return (
        <View 
        style={style.buttonContainer}>
            <Pressable 
            style={style.button} 
            onPress={() => navigation.navigate("Leaderboard")}
            >
                <Text style={style.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    ) 
}

const style = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff', 
        shadowRadius: 10,
        shadowOffset: 3,
        shadowColor: "black",
        shadowOpacity: 0.5,
        borderRadius: 18,
        width: 300,
        padding: 5,
        margin: 8
      },
    button: {
        borderRadius: 16,
        padding: 10,
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: 'black',
        fontSize: 16,
    },
})