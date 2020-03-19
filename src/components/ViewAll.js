import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from "../assets/colors";
import fonts from '../assets/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// props: onPress, title

const ViewAll = (props) => (
    <View style={styles.main}> 
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress}>
            <Text style={styles.txt}>View All</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    main: {
        marginBottom: heightPercentageToDP('2%'),
        marginTop: heightPercentageToDP('3%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginEnd: 15
    },
    txt: {
        ...fonts.h3,
        color: colors.button,
        paddingStart: 4,
        paddingEnd: 4
    },
    title: {
        ...fonts.h4,
        marginStart: 18,
      },
});

export default ViewAll;