import React from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import colors from "../assets/colors";

class HomeHeader extends React.Component{
   render(){
       return(
           <View style={styles.title}>
                <StatusBar backgroundColor={colors.text3} barStyle="dark-content" />
                <Text style={styles.textMain}>
                <Text style={{...styles.text, color: colors.primary1}}>doc</Text>
                <Text style={{...styles.text, color: colors.primary2}}>Mz</Text>
                </Text>
           </View>
       );
   }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: colors.text3,
        alignItems: "center",
        borderBottomColor: colors.shadow,
        borderBottomWidth: 1.5,
        height: 60
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textMain: {
        padding: 10
    }
});

export default HomeHeader;