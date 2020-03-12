import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import fonts from '../assets/fonts';

// props: backgroundColor, text, textColor

const RoundButton = (props) => (
    <View  
    style={styles.main}>
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
    style={{...styles.buttonContainer, backgroundColor:props.backgroundColor }} >
        <View >
            <Text style={{...fonts.h1, color: props.textColor}}>{props.text}</Text>
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
        width: 140,
        height: 46,  
        borderRadius: 40
    },
});

export default RoundButton;