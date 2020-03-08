import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from "../assets/colors";

// props: title, subtitle

const TipsRow = (props) => (
           <View style={styles.main}>
                <Image source={require('../assets/images/capsules.png')}
                    style={styles.image} />
               <View style={styles.container}>     
               <Text style={styles.text}>{props.title}</Text>
               <Text style={styles.sub}>{props.subtitle}</Text>
              </View>
           </View>
       );

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        paddingStart: 10,
        paddingTop: 4,
        paddingBottom: 2,
        flexDirection: 'row',
        borderBottomColor: colors.shadow,
        borderBottomWidth: 1,
    },
    image: {
        marginTop: 16,
        resizeMode: 'contain', 
        width: 28,
        height: 28,
        marginEnd: 10
    },
    text: {
        fontSize: 16,
        padding: 2,
        color: colors.text4,
        fontWeight: 'bold'
    },
    sub: {
        fontSize: 16, 
        color: 'gray'
    },
    container: {
        flex: 1
    }
});

export default TipsRow;