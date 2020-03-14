import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import fonts from '../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// props: backgroundColor, text, radius, onPress

const NormalButton = (props) => (
    <View  
    style={{...props.buttonStyle, alignItems:'center', justifyContent:'center'  }}>
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
    style={{...styles.buttonContainer, backgroundColor:props.backgroundColor, borderColor: props.backgroundColor, borderRadius: props.radius, borderWidth: 1 }} >
        <View >
            <Text style={{...fonts.h2, color: 'white'}}>{props.text}</Text>
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
        height: 44,   
        borderRadius: 2 ,
        elevation: 3,
        padding: 2
    },
});

export default NormalButton;