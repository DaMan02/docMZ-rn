import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import HomeHeader from '../../components/HomeHeader'
import styles from './styles';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import meds from '../../assets/medicines.json'
import { Colors } from 'react-native-paper';

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
        <View style={styles.search}>
          <Icon name='ios-search' size={20} color={colors.primary2} />
          <TextInput
            style={styles.searchbar}
            onChangeText={text => this.onChangeText(text)}
            value={this.props.search}
            placeholder='Search for drugs'
          />
        </View>
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
        <HomeHeader />
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