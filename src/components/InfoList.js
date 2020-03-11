import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from '../assets/fonts';

// props: title

const InfoList = (props) => (
            <TouchableOpacity activeOpacity={0.7} style={styles.textContainer} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>     
            <Icon style={styles.icon} name='ios-arrow-forward' size={20} color={colors.text4} />         
            </TouchableOpacity>
);

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        right: 18
    },
    text: {
        ...fonts.h2,
        padding: 12,
        marginStart: 8,
    },
});

export default InfoList;