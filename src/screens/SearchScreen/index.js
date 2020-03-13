import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import HomeHeader from '../../components/HomeHeader'
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import meds from '../../assets/medicines.json'
import { Colors, Searchbar } from 'react-native-paper';
import fonts from '../../assets/fonts';
import styles from './styles'
import IllnessCard from '../../components/IllnessCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HealthConcern from '../../components/HealthConcern';

function onListPress(item) {
  ToastAndroid.show(item.salt_name, ToastAndroid.SHORT);
}

class SearchScreen extends React.Component {

  state = {
    dataSource: [],
    displayData: [],
  }

  async componentDidMount() {
    const data = await meds.Medicine_Details;
    this.setState({ dataSource: data })
  }

  onChangeText(text) {
    this.props.searchUpdate(text)
    console.log('Searching: ' + text)
    if (text == '') {
      this.props.loadUpdate(false)
      this.setState({ displayData: [] })
    } else {
      this.handleSearch(text)
    }
  }

  renderProgress() {
    if (this.props.load) {
      return (
        <View style={styles.indicator}>
          <ActivityIndicator size='small' color={Colors.black} />
        </View>
      )
    }
  }

  renderSearch() {
    return (
      <View style={styles.searchContainer}>
         <ScrollView>
        <Text style={styles.head}>Online Consultation</Text>
        <View style={styles.search}>
          <Icon name='ios-search' size={18} color='black' />
          <TextInput
            style={styles.searchbar}
            onChangeText={text => this.onChangeText(text)}
            value={this.props.search}
            placeholder='Search for drugs'
          />
        </View>
          <Text style={{ ...fonts.h2, width: wp('50%'), marginStart: 20, padding: 10, marginBottom: 8, marginTop: 10 }}>Choose a category</Text>
          <ScrollView style={styles.horizon} horizontal showsHorizontalScrollIndicator={false}>
            <IllnessCard title='Cough & Cold' uri={require('../../assets/images/cough.png')} bg='#FAB0C5' />
            <IllnessCard title='Diabets Care ' uri={require('../../assets/images/diabets.png')} bg='#FFB299' />
            <IllnessCard title='Heart Health' uri={require('../../assets/images/heart.png')} bg='#FF7575' />
            <IllnessCard title='Cough & Cold' uri={require('../../assets/images/cough.png')} bg='#FAB0C5' />
            <IllnessCard title='Diabets Care ' uri={require('../../assets/images/diabets.png')} bg='#FFB299' />
            <IllnessCard title='Heart Health' uri={require('../../assets/images/heart.png')} bg='#FF7575' />
          </ScrollView>
          <Text style={{ ...fonts.h2, marginStart: 20, padding: 10, marginBottom: 6, marginTop: 10 }}>Search by health concern</Text>
          <ScrollView style={styles.horizon} horizontal showsHorizontalScrollIndicator={false}>
            <HealthConcern title='General Doctor' icon='stethoscope' bg='#8CF1FF'/>
            <HealthConcern title='Dental Care' icon='tooth' bg='#FAB0C5'/>
            <HealthConcern title='General Doctor' icon='stethoscope' bg='#8CF1FF'/>
            <HealthConcern title='Dental Care' icon='tooth' bg='#FAB0C5'/>
          </ScrollView>
          <View style={{height: hp('5%')}}></View>
        </ScrollView>
      </View>
    );
  }

  async handleSearch(text) {
    let data = this.state.dataSource;
    data = await data.filter(function (d) {
      return d.salt_name.toLowerCase().match(text.toLowerCase());
    });
    this.setState({ displayData: data });
  }

  renderItemRow(item) {
    if (this.props.load) this.props.loadUpdate(false)
    return (
      <View>
        <Text style={styles.listItems}>{item.salt_name}</Text>
        <View style={styles.dummy}></View>
      </View>
    )
  }

  renderList() {
    return this.state.displayData.map(item =>
      <TouchableOpacity activeOpacity={0.6}
        key={item.salt_name} style={styles.list}
        onPress={() => onListPress(item)}>
        {this.renderItemRow(item)}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSearch()}
        {this.renderProgress()}
        <ScrollView overScrollMode='always'>
          {this.renderList()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  load: state.load
});

const mapDispatchToProps = dispatch => ({
  searchUpdate: val => dispatch({ type: 'UPDATE', search: val }),
  loadUpdate: val => dispatch({ type: 'LOAD', load: val })
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);