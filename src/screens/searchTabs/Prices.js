import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import colors from "../../assets/colors";
import CouponCard from '../../components/CouponCard'

class Prices extends React.Component{
   render(){
       return(
           <View style={styles.title}>
                  <Text style={styles.textnormal}>Lowest Prices near New Delhi, India</Text>
                   <CouponCard title='Walgreens' loc={39} miles={0.6} price={125.59}/>
                   <CouponCard title='Community, a Walgreens Pharmacy' loc={1} miles={2.5} price={125.59}/> 
                   <TouchableOpacity activeOpacity={0.8} style={styles.moreContainer}>
                  <Text style={styles.more}>View more pharmacy prices near you</Text>    
                  </TouchableOpacity>              
           </View>
       );
   }
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        backgroundColor: colors.neutral,
        height: 60
    },
    text: {
        fontSize: 16,
    },
    texttitle: {
        fontSize: 16,
        fontWeight: 'bold'
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
    },
    textnormal: {
        color: 'black',
        paddingTop: 6,
        paddingBottom: 6,
        paddingStart: 12,
        backgroundColor: 'white',
        borderBottomColor: colors.shadow,
        borderBottomWidth: 0.4
    },
    more: {
        fontSize: 15,
        color: colors.primary1
    },
    moreContainer: {
        padding: 8,
        backgroundColor: 'white',
        alignItems: 'center'
    }
});
export default Prices;