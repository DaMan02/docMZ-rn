import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from '../assets/fonts';

// props: title, icon

const ProfileMenu = (props) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.textContainer} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
        <Icon style={styles.icon} name={props.icon} size={20} color='black' />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6
    },
    icon: {
        position: 'absolute',
        right: 24
    },
    text: {
        ...fonts.h3,
        padding: 12,
        marginStart: 8,
    },
});

export default ProfileMenu;