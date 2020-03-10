import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from '../assets/colors';

// props: title, loc, price, miles

const CouponCard = (props) => (
    <View  style={styles.main}>
    <View>
      <Text style={{...styles.title,  width: 250}}>{props.title}</Text>
      <Text style={styles.sub}>{props.loc} locations - {props.miles} miles</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.coupon} onPress={props.onPress}>
           <Text style={{...styles.sub, alignSelf: 'center'}}>Coupon</Text>
           <Text style={styles.title}>$ {props.price}</Text>
      </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 16,
        marginTop: 4,
        borderBottomColor: colors.shadow,
        borderBottomWidth: 0.6
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    sub: {
        color: colors.text2
    },
    coupon: {
        position: 'absolute',
        right: 10,
        top: 0,
        bottom: 0,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.shadow,
        paddingTop: 4,
        paddingEnd: 8,
        paddingBottom: 4,
        paddingStart: 8,
        height: 60,
        margin: 10
    }
    
});

export default CouponCard;