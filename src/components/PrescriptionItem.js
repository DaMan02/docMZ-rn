import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from "react-native";
import colors from "../assets/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import OutlineButton from './OutlineButton'
import fonts from '../assets/fonts';

// props: name, mg, tablets

const PrescriptionItem = (props) => (
    <View style={styles.container}>
   <View style={styles.linear}>
     <Image source={require('../assets/images/capsules.png')}
                    style={styles.image} />
          <View style={styles.textContainer}>
              <Text style={styles.boldText}>{props.name}</Text>
              <Text style={styles.smallText}>{props.mg} mg, {props.tablets} tablets</Text>
          </View>
          <TouchableOpacity activeOpacity={0.4} style={styles.menu}>
          <Icon name="md-more" size={30} color={colors.typography} />
          </TouchableOpacity>
    </View>
            <OutlineButton
            text='Search Prices'
            />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        margin: 6,
        borderRadius: 8,
        borderBottomColor: colors.shadow,
        borderBottomWidth: 1.5,
    },
    image: { 
        alignSelf: 'center',
        resizeMode: 'contain', 
        width: 30,
        height: 30,
        marginBottom: 26
    },
    textContainer: {
        padding: 4,
        marginStart: 16,
        marginBottom: 26
    },
    menu: {
       position: 'absolute', 
       top: 0,
       end: 0,
       justifyContent: 'center',
       padding: 10,
    },
    linear: { 
        flexDirection: 'row',
        marginBottom: 10 
    },
    boldText: {
        ...fonts.header,
        color: colors.typography,
    },
    smallText: {
        color: colors.typography
    }
});

export default PrescriptionItem;