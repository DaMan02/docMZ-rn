import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../assets/fonts';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

// props: rate

const TimeSlot = (props) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.time} onPress={props.onPress}>
        <Text style={{ ...fonts.para, color: 'white' }}>{props.time}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    time: {
       backgroundColor: colors.primary2,
       margin: 10,
       width: widthPercentageToDP('18%'),
       height: heightPercentageToDP('7%'),
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 4
    }
});

export default TimeSlot;