import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import colors from "../assets/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from "../assets/fonts";

class HeaderSearch extends React.Component{
   render(){
       return(
           <View style={styles.title}>
                <StatusBar backgroundColor={colors.text3} barStyle="dark-content" />
                   <TouchableOpacity style={styles.arrow}>
                    <Icon name='md-arrow-back' size={19} color='black' />
                   </TouchableOpacity>
                <View style={styles.textMain}>
                <Text style={fonts.h2}>atorvastanin</Text>
                <Text style={fonts.h3}>40 mg, 90 tablets</Text>
                </View>
                <TouchableOpacity style={styles.edit}>
                    <Icon name='md-create' size={19} color='black' />
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.search}>
                    <Icon name='md-search' size={19} color='black' />
                   </TouchableOpacity>
           </View>
       );
   }
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        backgroundColor: colors.text3,
        height: 60
    },
    textMain: {
        padding: 10
    },
    arrow: {
      alignSelf: 'center',
      paddingStart: 20,
      paddingEnd: 20  
    },
    edit: {
        alignSelf: 'center',
        paddingStart: 20,
        paddingEnd: 20,
        marginStart: 60
    },
    search: {
        alignSelf: 'center',
        paddingStart: 10,
        paddingEnd: 20   
    }
});
export default HeaderSearch;