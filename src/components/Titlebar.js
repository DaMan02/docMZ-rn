import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from "../assets/colors";
import fonts from '../assets/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


// props: title

const Titlebar = (props) => (
    <View style={styles.head}>
        <TouchableOpacity style={{padding: 4}} onPress={props.onPress}><Icon name={props.back ? 'arrow-left' : 'menu'} size={26} color='#464646' /></TouchableOpacity>
        <Text style={{ ...fonts.h3, fontSize: 22, marginStart: widthPercentageToDP('6%'), textAlign: 'center' }}>{props.title}</Text>
        {/* <TouchableOpacity><Icon name="filter-outline" size={30} color='#464646' /></TouchableOpacity> */}
    </View>
);

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginTop: heightPercentageToDP('2%'),
        marginStart: 12,
        marginEnd: 12
      },
});
 
export default Titlebar