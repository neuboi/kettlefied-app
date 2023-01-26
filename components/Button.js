import { StyleSheet, View, Pressable, Text } from 'react-native'

export default function Button({label}) {
    return (
        <View 
        style={style.buttonContainer}>
            <Pressable 
            style={style.button} 
            onPress={() => alert('You pressed me')}
            >
                <Text style={style.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    ) 
}

const style = StyleSheet.create({
    buttonContainer: {
        // width: 320,
        // height: 68,
        // marginHorizontal: 20,
        
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 12,

        borderWidth: 4, 
        borderColor: "#ffd33d", 
        borderRadius: 18,

        backgroundColor: "#ffd33d"

      },
    button: {
        // borderRadius: 10,
        // width: '100%',
        // height: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
        borderRadius: 16,
        padding: 10,

        //backgroundColor: "#fff"
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: 'black',
        fontSize: 16,
    },
})