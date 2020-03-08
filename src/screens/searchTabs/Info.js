import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ToastAndroid} from 'react-native';
import colors from "../../assets/colors";
import InfoList from '../../components/InfoList';
import { ScrollView } from 'react-native-gesture-handler';

class Info extends React.Component{

    infoClick(text){
        ToastAndroid.show(text, ToastAndroid.SHORT)
    }

   render(){
       return(
           <View style={styles.container}>
                <ScrollView>
                <InfoList title='Images' onPress={() => this.infoClick('Images')}/>
                <Text style={styles.title}>Drug Information</Text>
                <InfoList title='Overview' onPress={() => this.infoClick('Overview')}/>
                <InfoList title='Proper Use' onPress={() => this.infoClick('Proper Use')}/>
                <InfoList title='Dosing' onPress={() => this.infoClick('Proper Use')}/>
                <InfoList title='Missed Dose' onPress={() => this.infoClick('Missed Dose')}/>
                <InfoList title='Use & Storage' onPress={() => this.infoClick('Use & Storage')}/>
                <InfoList title='Before Using' onPress={() => this.infoClick('Before Using')}/>
                <InfoList title='Allergies' onPress={() => this.infoClick('Allergies')}/>
                <InfoList title='Pediatric' onPress={() => this.infoClick('Pediatric')}/>
                </ScrollView>
           </View>
       );
   }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: colors.neutral
   },
   title: {
       color: colors.primary1,
       fontWeight: 'bold',
       fontSize: 16,
       paddingStart: 10,
       paddingTop: 4,
       paddingBottom: 4
   }
});
export default Info;