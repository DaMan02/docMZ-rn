import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from '../assets/colors';
import fonts from "../assets/fonts";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// props: title, uri

const Speciality = (props) => (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={{ ...styles.main, backgroundColor: props.light }}>
        <View style={{...styles.img, borderColor: props.dark, backgroundColor: props.dark}}>
            <Image source={props.uri}
                style={styles.image} />
        </View>
        <Text style={{...styles.title, color: props.dark}}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        borderRadius: 16,
        width: wp('40%'),
        marginStart: 6,
        marginEnd: 6,
        height: hp('30%'),
        elevation: 1,
        marginBottom: 1
    },
    img: {
        height: 50,
        width: 60,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 60,
        height: 60,
    },
    title: {
        ...fonts.h4,
        marginTop: 10,
        padding: 6,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 8
    }
});

export default Speciality;