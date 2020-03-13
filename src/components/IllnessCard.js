import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from '../assets/colors';
import fonts from "../assets/fonts";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// props: title, uri

const IllnessCard = (props) => (
    <TouchableOpacity activeOpacity={0.7} style={{ ...styles.main, backgroundColor: props.bg }}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.img}>
            <Image source={props.uri}
                style={styles.image} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        borderRadius: 16,
        width: wp('32%'),
        marginStart: 6,
        marginEnd: 6,
        height: hp('32%'),
        elevation: 4,
        marginBottom: 4
    },
    img: {
        marginEnd: 16,
        borderBottomEndRadius: 16
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    title: {
        ...fonts.h2,
        color: 'white',
        marginTop: 16,
        marginStart: 10
    }
});

export default IllnessCard;