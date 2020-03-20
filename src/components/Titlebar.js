import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from "../assets/colors";
import fonts from '../assets/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'


// props: title

const Titlebar = (props) => (
    <View style={styles.head}>
        <Icon name="ios-menu" size={30} color='black' />
        <Text style={{ ...fonts.h3, fontSize: 22, marginStart: widthPercentageToDP('6%'), textAlign: 'center' }}>{props.title}</Text>
        <Image source={require('../assets/images/filter.png')} />
    </View>
);

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: heightPercentageToDP('2%'),
        marginStart: 12,
        marginEnd: 12
      },
});
 
export default Titlebar