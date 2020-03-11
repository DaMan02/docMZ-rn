import React from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import colors from "../assets/colors";
import fonts from '../assets/fonts';

class HomeHeader extends React.Component{
   render(){
       return(
           <View style={styles.title}>
                <StatusBar backgroundColor={colors.text3} barStyle="dark-content" />
                <Text style={styles.textMain}>
                <Text style={{...fonts.header, color: colors.primary1}}>doc</Text>
                <Text style={{...fonts.header, color: colors.primary2}}>Mz</Text>
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
    textMain: {
        padding: 10
    }
});

export default HomeHeader;