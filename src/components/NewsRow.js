import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from "../assets/colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from '../assets/fonts';

// props: title, subtitle, onPress

const NewsRow = (props) => (
           <TouchableOpacity style={styles.main} activeOpacity={0.7} onPress={props.onPress}>
               <View style={styles.container} >     
               <Text style={styles.text}>{props.title}</Text>
               <Text style={styles.sub}>{props.subtitle}</Text>
              </View>
              <Icon style={styles.icon} name='ios-arrow-forward' size={20} color={colors.text4} />   
           </TouchableOpacity>
       );

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        paddingStart: 10,
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: 'row',
        borderBottomColor: colors.shadow,
        borderBottomWidth: 0.4,
        alignItems: 'center'
    },
    text: {
        ...fonts.h2,
        padding: 2,
    },
    icon: {
        right: 14,
    },
    sub: {
        fontSize: 14, 
        color: 'gray',
        marginEnd: 20
    },
    container: {
        flex: 1
    }
});

export default NewsRow;