import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import colors from "../assets/colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from '../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

// props: title, subtitle, onPress

const LoginHeader = (props) => (
    <View style={styles.curve}>
         <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
        <Text style={styles.title}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    curve: {
        height: hp('16%'),
        backgroundColor: colors.primary1,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        elevation: 8
    },
    title: {
        ...fonts.header,
        color: 'white',
        alignSelf: 'center',
        padding: 40
    }
});

export default LoginHeader;