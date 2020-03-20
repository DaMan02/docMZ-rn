import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../assets/fonts';

// props: rate

const Rating = (props) => (
    <View style={styles.rate}>
        <Text style={{ ...fonts.para, color: 'white' }}>{props.rate}</Text>
        <Icon name="star" size={14} color='white' />
    </View>
);

const styles = StyleSheet.create({
    rate: {
        position: 'absolute',
        top: 16,
        flexDirection: 'row',
        right: 16,
        paddingStart: 6,
        paddingEnd: 6,
        paddingTop: 2,
        paddingBottom: 2,
        alignItems: 'center',
        backgroundColor: '#D4AC0D',
        borderRadius: 6
    }
});

export default Rating;