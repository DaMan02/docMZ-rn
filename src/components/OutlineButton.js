import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../assets/colors";

// props: text

const OutlineButton = (props) => (
    <View  
    style={styles.main}>
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
     style={styles.buttonContainer}>
        <View >
            <Text style={styles.buttonTextStyle}>{props.text}</Text>
        </View>
    </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    main: {
        alignItems:'center',
        justifyContent:'center' 
    },
    buttonContainer: {
        justifyContent:'center',
        alignItems:'center',
        width: 230,
        height: 46,
        borderRadius: 6, 
        borderColor: colors.typography,
        borderWidth: 1      
    },
    buttonTextStyle: {
        fontSize: 20,
        fontFamily:'Roboto',
        fontWeight: 'bold',
        color: colors.typography,        
    }
});

export default OutlineButton;