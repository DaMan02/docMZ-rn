import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator, BackHandler, StatusBar, Keyboard } from 'react-native';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import medsDemo from '../../database/medDemo.json'
import meds from '../../database/medicines.json'
import { Colors } from 'react-native-paper';
import fonts from '../../assets/fonts';
import styles from './styles'
import IllnessCard from '../../components/IllnessCard';
import Searchbar from '../../components/Searchbar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HealthConcern from '../../components/HealthConcern';

class DrugsSearch extends React.Component {

  state = {
    dataSource: [],
    displayData: [],
    typing: false,
  }

  isEmpty() {
    return !this.state.displayData.length > 0
  }

  // backAction = () => {
  //   console.log('back?')
  //   if (this.isEmpty) {
  //     this.onChangeText('')
  //     return true;
  //   } else
  //     return false;
  // };

  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  // }

  // UNSAFE_componentWillMount(){
  //   BackHandler.addEventListener("hardwareBackPress", this.backAction);
  // }

  async componentDidMount() {
    const data = await meds.Medicine_Details;
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
    Keyboard.dismiss()
    this.props.loadUpdate(true)
    let that = this;
    setTimeout(function () { that.handleSearch(that.props.search); }, 1000);
  }

  async handleSearch(text) {
    console.log('Searching: ' + text)
    let data = await this.state.dataSource;
    data = data.filter(function (d) {
      return d.salt_name.toLowerCase().match(text.toLowerCase());
    });
    this.setState({ displayData: data });
  }

  renderProgress() {
    if (this.props.load)
      return (
        <View style={styles.indicator}>
          <ActivityIndicator size='small' color={Colors.black} />
        </View>
      )
  }

  onListPress(item) {
    this.props.navigation.navigate('SearchResult',
      { 'med': item })
  }

  renderMain() {
    if (this.isEmpty())
      return (
        <View>
          <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
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
      <View>
        {this.renderProgress()}
        <Searchbar hint='Search for drugs'
          value={this.props.search}
          onChangeText={text => this.onChangeText(text)}
          onSearch={() => this.goClick()} />
      </View>
    )
  }

  renderItemRow(item) {
    if (this.props.load) this.props.loadUpdate(false)
    return (
      <TouchableOpacity onPress={() => this.onListPress(item)} activeOpacity={0.4}>
        <Text style={styles.listItems}>{item.salt_name}</Text>
        <View style={styles.dummy}></View>
      </TouchableOpacity>
    )
  }

  onScrollHandler() {
    console.log('end')
  }

  renderList() {
    if (!this.isEmpty())
      return (
        <FlatList overScrollMode='always' showsVerticalScrollIndicator={false}
          data={this.state.displayData}
          renderItem={({ item }) => this.renderItemRow(item)}
          keyExtractor={item => item.salt_name}
          refreshing
          onEndReached={() => this.onScrollHandler()}
          onEndThreshold={1}
          // ListEmptyComponent={() => this.renderProgress()}
          // Performance settings
          removeClippedSubviews={true} // Unmount components when outside of window 
          initialNumToRender={6} // Reduce initial render amount
          maxToRenderPerBatch={1} // Reduce number in each render batch
          updateCellsBatchingPeriod={100} // Increase time between renders
          windowSize={7} // Reduce the window size
        />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Online Consultation</Text>
        {this.renderSearch()}
        {this.renderList()}
        {this.renderMain()}
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

export default connect(mapStateToProps, mapDispatchToProps)(DrugsSearch);