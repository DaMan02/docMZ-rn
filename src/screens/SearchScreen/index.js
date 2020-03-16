import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import medsDemo from '../../database/medDemo.json'
import meds from '../../database/medicines.json'
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
    typing: false,
  }

  async componentDidMount() {
    const data = await medsDemo.Medicine_Details;
    this.setState({ dataSource: data })
  }

  onChangeText(text) {
    this.props.searchUpdate(text)
    if (text == '') {
      this.props.loadUpdate(false)
      this.setState({ displayData: [], typing: false })
    } else {
      this.setState({ typing: true });
    }
  }

  goClick() {
    this.props.loadUpdate(true)
    let that = this;
    setTimeout(function () { that.handleSearch(that.props.search); }, 1000);
  }

  async handleSearch(text) {
    console.log('Searching: ' + text)
    let data = this.state.dataSource;
    data = await data.filter(function (d) {
      return d.salt_name.toLowerCase().match(text.toLowerCase());
    });
    this.setState({ displayData: data });
  }

  isEmpty(){
    let arr = this.state.displayData
    return !arr.length > 0
  }

  renderProgress() {
    if (this.props.load)
      return (
        <View style={styles.indicator}>
          <ActivityIndicator size='small' color={Colors.black} />
        </View>
      )
  }

  renderGo() {
    if (this.state.typing && !this.props.load)
      return (
        <TouchableOpacity activeOpacity={0.8} style={styles.go} onPress={() => this.goClick()}>
          <Icon name='ios-arrow-round-forward' size={26} color='black' />
        </TouchableOpacity>
      )
  }

  renderSearchIcon() {
    if (!this.props.load)
      return (
        <Icon name='ios-search' size={22} color='black' />
      )
  }

  renderMain() {
    if(this.isEmpty())
    return (
      <View>
        <Text style={{ ...fonts.h2, width: wp('50%'), marginStart: 20, padding: 10, marginBottom: 8, marginTop: hp('1%') }}>Choose a category</Text>
        <ScrollView style={styles.horizon} horizontal showsHorizontalScrollIndicator={false}>
          <IllnessCard title='Cough & Cold' uri={require('../../assets/images/cough.png')} bg='#FAB0C5' />
          <IllnessCard title='Diabets Care ' uri={require('../../assets/images/diabets.png')} bg='#FFB299' />
          <IllnessCard title='Heart Health' uri={require('../../assets/images/heart.png')} bg='#FF7575' />
          <IllnessCard title='Cough & Cold' uri={require('../../assets/images/cough.png')} bg='#FAB0C5' />
          <IllnessCard title='Diabets Care ' uri={require('../../assets/images/diabets.png')} bg='#FFB299' />
          <IllnessCard title='Heart Health' uri={require('../../assets/images/heart.png')} bg='#FF7575' />
          <View style={{ width: wp('10%') }}></View>
        </ScrollView>
        <Text style={{ ...fonts.h2, marginStart: 20, padding: 10, marginBottom: 6, marginTop: 10 }}>Search by health concern</Text>
        <ScrollView style={styles.horizon} horizontal showsHorizontalScrollIndicator={false}>
          <HealthConcern title='General Doctor' icon='stethoscope' bg='#8CF1FF' />
          <HealthConcern title='Dental Care' icon='tooth' bg='#FAB0C5' />
          <HealthConcern title='General Doctor' icon='stethoscope' bg='#8CF1FF' />
          <HealthConcern title='Dental Care' icon='tooth' bg='#FAB0C5' />
          <View style={{ width: wp('3%') }}></View>
        </ScrollView>
        <View style={{ height: hp('5%') }}></View>
      </View>
    )
  }

  renderSearch() {
    return (
      <View style={styles.searchContainer}>
        <Text style={styles.head}>Online Consultation</Text>
        <View style={styles.search}>
          {this.renderSearchIcon()}
          {this.renderProgress()}
          <TextInput
            style={styles.searchbar}
            onChangeText={text => this.onChangeText(text)}
            value={this.props.search}
            placeholder='Search for drugs'
          />
          {this.renderGo()}
        </View>
      </View>
    );
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
    if(!this.isEmpty())
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
        <ScrollView overScrollMode='always' showsVerticalScrollIndicator={false}>
          {this.renderList()}
          {this.renderMain()}
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