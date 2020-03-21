import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fonts from '../assets/fonts';
import colors from '../assets/colors';

// props: text, onPress, width, height

const ResizableButton = (props) => (
    <View
        style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
            style={{...styles.buttonContainer, width:props.width, height: props.height }}>
            <View >
                <Text style={{ ...fonts.para, color: 'white', textAlign: 'center' }}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        elevation: 2,
        backgroundColor: colors.button
    },
});

export default ResizableButton;