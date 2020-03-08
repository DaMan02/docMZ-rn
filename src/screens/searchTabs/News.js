import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import colors from "../../assets/colors";
import NewsRow from '../../components/NewsRow';
import { ScrollView } from 'react-native-gesture-handler';


class News extends React.Component{

    onNewsClick(){

    }
    
   render(){
       return(
           <View style={styles.master}>
               <ScrollView>
                <NewsRow 
                onPress={() => this.onNewsClick()}
                title='7 Medications That Cause Nightmares'
                subtitle='Antidepressants, blood pressure drugs, and allergy medicines are some of the many
                popular medications that can affect your dreams...'  /> 
                <NewsRow 
                onPress={() => this.onNewsClick()}
                title='7 Medications That Cause Nightmares'
                subtitle='Antidepressants, blood pressure drugs, and allergy medicines are some of the many
                popular medications that can affect your dreams...'  /> 
                <NewsRow 
                onPress={() => this.onNewsClick()}
                title='7 Medications That Cause Nightmares'
                subtitle='Antidepressants, blood pressure drugs, and allergy medicines are some of the many
                popular medications that can affect your dreams...'  /> 
                <NewsRow 
                onPress={() => this.onNewsClick()}
                title='7 Medications That Cause Nightmares'
                subtitle='Antidepressants, blood pressure drugs, and allergy medicines are some of the many
                popular medications that can affect your dreams...'  /> 
                <NewsRow 
                onPress={() => this.onNewsClick()}
                title='7 Medications That Cause Nightmares'
                subtitle='Antidepressants, blood pressure drugs, and allergy medicines are some of the many
                popular medications that can affect your dreams...'  />  
                </ScrollView>       
           </View>
       );
   }
}

const styles = StyleSheet.create({
    master: {
       flex: 1,
       backgroundColor: colors.neutral
    }
});
export default News;