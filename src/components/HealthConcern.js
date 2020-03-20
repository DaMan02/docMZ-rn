import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import fonts from '../assets/fonts';

// props: title

const HealthConcern = (props) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.textContainer} onPress={props.onPress}>
        <Icon style={{ ...styles.icon, backgroundColor: props.bg }} name={props.icon} size={18} color='white' />
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        padding: 10,
        borderRadius: 8
    },
    text: {
        ...fonts.h4,
        fontWeight: 'bold',
        width: 80,
        padding: 6,
        marginStart: 4
    },
});

export default HealthConcern;