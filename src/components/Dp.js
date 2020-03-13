import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from '../assets/colors';
import fonts from "../assets/fonts";
import Icon from 'react-native-vector-icons/Feather'


// props

const Dp = (props) => (
    <View style={styles.main}>
        <View style={styles.imgborder}></View>
        <Image source={require('../assets/images/doc.jpg')}
            style={styles.image} />
            {props.edit? (
                 <TouchableOpacity onPress={props.onPress} activeOpacity={0.9} style={styles.edit}>
                 <Icon name="edit-2" size={20} color='black' />
             </TouchableOpacity>
            ) : (
                <Text></Text>
            )
        }
       
    </View>
);

const styles = StyleSheet.create({
    main: {
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 140,
        height: 140,
        borderRadius: 200,
        marginTop: 5
    },
    imgborder: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#00FFF3',
        borderRadius: 200,
        width: 150,
        height: 150,
    },
    edit: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 112,
        backgroundColor: 'white',
        height: 38,
        width: 74,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        }
});

export default Dp;