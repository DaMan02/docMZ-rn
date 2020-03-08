import React from 'react';
import { View, Text, TextInput } from 'react-native';
import HomeHeader from '../../components/HomeHeader'
import styles from './styles';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

class SearchScreen extends React.Component {

    state = {
      // searchTag: '',
    }

  onChangeText(text){
      this.props.searchUpdate(text)
  }

   renderSearch(){
     return(
        <View style={styles.searchContainer}> 
        <View style={styles.search}>
        <Icon name='ios-search' size={20} color={colors.primary2} />
        <TextInput
            style={styles.searchbar}
            onChangeText={text => this.onChangeText(text)}
            value={this.props.search}
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

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  searchUpdate: val => dispatch({type: 'UPDATE', search: val}),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);