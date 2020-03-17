import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import colors from "../../../assets/colors";
import CouponCard from '../../../components/CouponCard'
import fonts from '../../../assets/fonts';

class Prices extends React.Component{
   render(){
       return(
           <View style={styles.title}>
                  <Text style={styles.textnormal}>Lowest Prices near New Delhi, India</Text>
                   <CouponCard title='Walgreens' loc={39} miles={0.6} price={this.props.price}/>
                   <CouponCard title='Community, a Walgreens Pharmacy' loc={1} miles={2.5} price={this.props.price}/> 
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
        height: 60
    },
    textnormal: {
        ...fonts.h3,
        paddingTop: 6,
        paddingBottom: 6,
        paddingStart: 12,
        backgroundColor: 'white',
        borderBottomColor: colors.shadow,
        borderBottomWidth: 0.4
    },
    more: {
        ...fonts.h4,
        color: colors.primary1
    },
    moreContainer: {
        padding: 8,
        backgroundColor: colors.neutral,
        alignItems: 'center'
    }
});
export default Prices;