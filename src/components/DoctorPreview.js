import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from '../assets/colors';
import fonts from "../assets/fonts";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Rating from './Rating';

// props: title, uri

const DoctorPreview = (props) => (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={{ ...styles.main, backgroundColor: props.bg }}>
        <View style={styles.dp}>
            <Image source={require('../assets/images/doc.jpg')}
                style={styles.image} />
        </View>
        <View>
            <Text style={styles.title}>Dr. {props.name}</Text>
            <Text style={styles.org}>{props.org}</Text>
            <Text style={styles.spec}>{props.spec}</Text>
        </View>
        {/* <Rating rate={props.rating} /> */}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        borderRadius: 16,
        marginStart: 20,
        marginEnd: 20,
        height: hp('16%'),
        elevation: 3,
        marginBottom: 16,
        flexDirection: 'row'
    },
    dp: {
        alignSelf: 'center',
        alignItems: 'center',
        marginStart: 10
    },
    title: {
        ...fonts.h2,
        marginTop: 20,
        marginStart: 16,
    },
    org: {
        ...fonts.para,
        marginStart: 16
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 60,
        height: 60,
        borderRadius: 200,
        marginTop: 5
    },
});

export default DoctorPreview;