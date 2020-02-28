import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import colors from "../assets/colors";

class Ad extends React.Component{
   render(){
       return(
           <View style={styles.main}>
                <Image source={require('../assets/images/capsules.png')}
                    style={styles.image} />
               <Text style={styles.container}>     
               <Text style={styles.text}> 
                   Save even more! Up to 90% off your prescriptions with docMz Gold. </Text>
                <Text style={{...styles.text, color: colors.typography}}>Try 1 month free.</Text>
              </Text>
           </View>
       );
   }
}

const styles = StyleSheet.create({
    main: {
        marginTop: 12,
        marginBottom: 10,
        backgroundColor: 'white',
        paddingStart: 10,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        borderBottomColor: colors.shadow,
        borderBottomWidth: 1,
    },
    image: {
        marginTop: 6,
        resizeMode: 'contain', 
        width: 16,
        height: 16,
        marginEnd: 10
    },
    text: {
        fontSize: 18,
        padding: 10,
        color: colors.text4,
    },
    container: {
        flex: 1
    }
});

export default Ad;