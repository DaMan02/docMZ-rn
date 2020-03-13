import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from '../assets/colors';
import fonts from "../assets/fonts";
import Dp from './Dp'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// props: title, uri

const DoctorPreview = (props) => (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={{ ...styles.main, backgroundColor: props.bg }}>
        <View style={styles.dp}>
            <Dp />
        </View>
        <View>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.org}>{props.org}</Text>
            <Text style={styles.spec}>{props.spec}</Text>
        </View>
        <View style={styles.rate}>
            <Text style={{ color: 'white' }}>{props.rating}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        borderRadius: 16,
        marginStart: 20,
        marginEnd: 20,
        height: hp('30%'),
        elevation: 3,
        marginBottom: 16,
        flexDirection: 'row'
    },
    dp: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 14,
        marginStart: 10
    },
    rate: {
        position: 'absolute',
        top: 16,
        right: 16,
        alignItems: 'center',
        backgroundColor: '#FFC100',
        height: 22,
        width: 36,
        borderRadius: 6
    },
    title: {
        ...fonts.h2,
        color: 'white',
        marginTop: 40,
        marginStart: 16,
        maxWidth: wp('40%')
    },
    org: {
        ...fonts.para,
        color: 'white',
        marginStart: 16

    }
});

export default DoctorPreview;