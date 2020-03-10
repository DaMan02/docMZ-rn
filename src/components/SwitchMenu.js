import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import colors from "../assets/colors";
import { Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

// props: text, value, icon, onSwitch()

const SwitchMenu = (props) => (
    <View  style={styles.main}>
         <Icon name={props.icon} size={16} color={colors.primary1} />
         <Text style={styles.text}>{props.text}</Text>
         <Switch
            value={props.value}
            color={colors.primary2}
            style={styles.switch}
            onChange={() => props.onSwitch()} />
    </View>
);

const styles = StyleSheet.create({
    main: {
       backgroundColor: 'white',
       flexDirection: 'row',
       padding: 10,
       borderBottomColor: colors.shadow,
       borderBottomWidth: 0.6,
   },
    switch: {
        position: 'absolute',
        right: 10,
        top: 0,
        bottom: 0
    },
    image: {
        marginTop: 6,
        resizeMode: 'contain', 
        width: 16,
        height: 16,
        marginEnd: 10
    },
    text: {
        marginStart: 10,
        color: colors.text4,
        fontFamily: 'Roboto',
        fontSize: 16
    }
});

export default SwitchMenu;