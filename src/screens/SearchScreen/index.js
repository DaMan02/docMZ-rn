import React from 'react';
import { View, Text, TextInput } from 'react-native';
import HomeHeader from '../../components/HomeHeader'
import styles from './styles';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';

class SearchScreen extends React.Component {

    state = {
      searchTag: '',
    }

  onChangeText(){

  }

   renderSearch(){
     return(
        <View style={styles.searchContainer}> 
        <View style={styles.search}>
        <Icon name='ios-search' size={20} color={colors.primary2} />
        <TextInput
            style={styles.searchbar}
            onChangeText={text => this.onChangeText(text)}
            value={this.state.searchTag}
            placeholder='Search for a drug or condition'
        />
        </View>
        </View>
     );
   }

    render() {
        return (
            <View style={styles.container}>
                <HomeHeader />
                {this.renderSearch()}
            </View>
        );
    }
}

export default SearchScreen;