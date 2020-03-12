import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { Chip } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// props: onPress

const ChipGroup = (props) => (
    <View style={styles.master}>
        <Chip
            selected={props.selected1}
            mode={props.selected1? 'flat' : 'outlined'}
            icon='stethoscope'
            style={styles.chip}
            onPress={props.onPress1}>Doctor</Chip>
        <Chip
            selected={props.selected2}
            mode={props.selected2? 'flat' : 'outlined'}
            icon='hospital'
            style={styles.chip}
            onPress={props.onPress2}>Patient</Chip>
    </View>
);

const styles = StyleSheet.create({
    master: {
        padding: hp('2%'),
        flexDirection: 'row',
        alignSelf: 'center',
    },
    chip: {
        paddingEnd: wp('2%'),
        paddingStart: wp('2%'),
        marginStart: wp('3%'),
        marginEnd: wp('3%'),
    }
});

export default ChipGroup;