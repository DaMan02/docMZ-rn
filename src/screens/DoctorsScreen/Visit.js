import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet
} from 'react-native';
// import { connect } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LongButton from '../../components/LongButton';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import NormalButton from '../../components/NormalButton';
import CalendarView from '../../components/CalendarView';

class Visit extends Component {

  state = {
    dateSelected: true,
  }

  showCalendar(){
    this.setState({ dateSelected: false })
  }

  renderCalendar(){
    if(!this.state.dateSelected)
  return (
    <CalendarView />
  )
}

render() {
  return (
    <View style={styles.master}>
       {this.renderCalendar()}
       <NormalButton text='SELECT DATE' onPress={() => this.showCalendar()}/>
       {/* <NormalButton text='SELECT LOCATION'/> */}
       <NormalButton text='DONE' onPress={() => this.setState({ dateSelected: true })}/>

    </View>
  );
}
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
    backgroundColor: 'white'
  },
});

// const mapDispatchToProps = dispatch => ({
//     consultNowUpdate: val => dispatch({ type: 'TOGGLE_CONSULT_TIME', consultNow: val }),
// });

export default Visit;
