import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import fonts from '../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// props: backgroundColor, text, textColor, border, radius, onPress

const LongButton = (props) => (
    <View  
    style={{...props.buttonStyle, alignItems:'center', justifyContent:'center'  }}>
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
    style={{...styles.buttonContainer, backgroundColor:props.backgroundColor }} >
        <View >
            <Text style={{...fonts.para, color: props.textColor}}>{props.text}</Text>
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
        width: wp('74%'),
        height: 44,   
        borderRadius: 28 ,
        elevation: 2,
        margin: 10
    },
});

export default LongButton;