import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from '../assets/fonts';

// props: title, icon

const Rating = (props) => (
    <View style={styles.rate}>
        <Text style={{ color: 'white' }}>{props.rate}</Text>
    </View>
);

const styles = StyleSheet.create({
    rate: {
        position: 'absolute',
        top: 16,
        right: 16,
        alignItems: 'center',
        backgroundColor: '#FFC100',
        height: 22,
        width: 36,
        borderRadius: 6
    }
});

export default Rating;