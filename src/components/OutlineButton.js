import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../assets/colors";
import fonts from '../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// props: text, tColor, w, h

const OutlineButton = (props) => (
    <View  
    style={styles.main}>
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
     style={{...styles.buttonContainer, width: props.w, height: props.h, borderColor: props.tColor}}>
        <View >
            <Text style={{ ...fonts.h2, color: props.tColor}}>{props.text}</Text>
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
        width: wp('50%'),
        height: 46,
        borderRadius: 6, 
        borderWidth: 1      
    },
});

export default OutlineButton;