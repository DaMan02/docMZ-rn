import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

// props: backgroundColor, text, textColor, border

const NormalButton = (props) => (
    <View  
    style={styles.main}>
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
    style={{...styles.buttonContainer, backgroundColor:props.backgroundColor, borderColor: props.border, borderWidth: 1 }} >
        <View >
            <Text style={{...styles.buttonTextStyle, color: props.textColor}}>{props.text}</Text>
        </View>
    </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    main: {
        alignItems:'center',
        justifyContent:'center' 
    },
    buttonContainer: {
        justifyContent:'center',
        alignItems:'center',
        width: 130,
        height: 44,
        borderRadius: 2,       
    },
    buttonTextStyle: {
        fontSize: 17,
        fontFamily:'Roboto',
        fontWeight: 'bold'
    }
});

export default NormalButton;