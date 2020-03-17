import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import colors from "../../../assets/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import TipsRow from '../../../components/TipsRow';
import { ScrollView } from 'react-native-gesture-handler';


class Tips extends React.Component{
   render(){
       return(
           <View style={styles.master}>
               <ScrollView>
                <TipsRow 
                title='Split A Higher Dosage Pill'
                subtitle='Cut a higher dosage pill in half to save 50% or more'  />    
                </ScrollView>     
           </View>
       );
   }
}

const styles = StyleSheet.create({
    master: {
       flex: 1,
    //    backgroundColor: colors.neutral
    }
});
export default Tips;