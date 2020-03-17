import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from '../assets/colors';
import fonts from "../assets/fonts";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { heightPercentageToDP } from 'react-native-responsive-screen';

// props

const ConsultFormat = (props) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.main} onPress={props.onPress}>
        <View style={{...styles.iconMain, backgroundColor: props.bg }}>
            <Icon style={styles.icon} name={props.icon} size={20} color='white' />
        </View>
        <View>
            <Text style={fonts.large}>{props.title}</Text>
            <Text style={{...fonts.para_thin, maxWidth: 140, color: colors.darkgray}}>{props.sub}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        marginStart: 30,
        marginEnd: 30,
        elevation: 0.8,
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 20,
        marginBottom: heightPercentageToDP('2%')
    },
    iconMain: {
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        height: 50,
        width: 50,
        marginEnd: 30
    },
    icon: {
        alignSelf: 'center',
    }

});

export default ConsultFormat;