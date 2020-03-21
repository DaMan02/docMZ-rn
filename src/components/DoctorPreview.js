import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from '../assets/colors';
import fonts from "../assets/fonts";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// props: title, uri

function renderAvail(props) {
    if(props.hide) return;
    if (props.avail > 0) {
        return (
            <Text style={styles.avail}>available in {props.avail} min</Text>
        )
    }
    else {
        return (
            <View style={styles.button}>
                <TouchableOpacity activeOpacity={0.6} onPress={props.onClick}
                    style={{ ...styles.buttonContainer, width: 76, height: 34 }}>
                    <View >
                        <Text style={{ ...fonts.para, color: 'white' }}>Visit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const DoctorPreview = (props) => (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={styles.main}>
        <View style={styles.dp}>
            <Image source={require('../assets/images/doc.png')}
                style={styles.image} />
        </View>
        <View style={{ justifyContent: 'center', paddingTop: 8, marginBottom: 8 }}>
            <Text style={styles.title}>Dr. {props.name}</Text>
            <Text style={styles.spec}>{props.spec}</Text>
            <Text style={styles.loc}>{props.loc}</Text>
        </View>
        {renderAvail(props)}
    </TouchableOpacity >
);

const styles = StyleSheet.create({
    main: {
        elevation: 0.2,
        marginBottom: 4,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        elevation: 2,
        backgroundColor: colors.button
    },
    dp: {
        alignSelf: 'center',
        alignItems: 'center',
        marginStart: 10
    },
    button: {
        position: 'absolute',
        top: 44,
        right: 16
    },
    loc: {
        ...fonts.para_thin,
        color: colors.darkgray,
        marginStart: 12,
        padding: 4,
    },
    title: {
        ...fonts.h2,
        marginStart: 12,
        padding: 4,
        maxWidth: wp('52%')
    },
    avail: {
        ...fonts.para,
        position: 'absolute',
        top: 44,
        right: 16,
        color: colors.greenblue,
    },
    spec: {
        ...fonts.para,
        marginStart: 12,
        padding: 4,
        borderRadius: 4,
        paddingStart: 8,
        paddingEnd: 8,
        alignSelf: 'baseline',
        backgroundColor: colors.lightGray
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