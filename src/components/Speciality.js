import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from '../assets/colors';
import fonts from "../assets/fonts";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'

// props: title, uri

function renderCheck(show) {
    if(show)
    return (
        <View style={styles.icon}>
            <Icon name='check' size={12} color='white' />
        </View>
    )
}

const Speciality = (props) => (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={styles.main}>
        {renderCheck(props.pressed)}
        <View>
            <Image source={props.uri}
                style={styles.image} />
        </View>
        <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        borderRadius: 20,
        width: wp('30%'),
        marginStart: 6,
        marginEnd: 6,
        height: hp('22%'),
        elevation: 2,
        marginBottom: 1,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'   // todo: after change in api
    },
    icon: {
        position: 'absolute',
        top: hp('2%'),
        right: 10,
        justifyContent: 'center',
        backgroundColor: colors.primary2,
        height: 22,
        alignItems: 'center',
        width: 22,
        borderRadius: 50
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 64,
        height: 64,
        // marginTop: hp('3%')  // todo: comment, 
    },
    title: {
        ...fonts.para,
        marginStart: 1,
        marginEnd: 1,
        justifyContent: 'flex-end',
        textAlign: 'center',
    }
});

export default Speciality;