import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Keyboard,
  BackHandler,
  StatusBar,
  FlatList
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Api } from '../../constants';
import { Axios } from '../../config';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import DoctorPreview from '../../components/DoctorPreview';
import docs from '../../database/doctorsDemo.json'
import specs from '../../database/specialityDemo.json'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ViewAll from '../../components/ViewAll';
import Searchbar from '../../components/Searchbar';
import Titlebar from '../../components/Titlebar';

class AllDoctors extends Component {
  state = {
    selectedOption: 1,
    doctorsList: [],
    specialityList: [],
    isLoading: true,
    search: ''
  };

  backAction = () => {
    this.props.navigation.goBack()
    return true;
  };

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
    try {
      // let doctorList = await Axios.post(Api.doctors + Api.getDoctors);
      // let doctorsList = docs.doctor_details;
      this.setState({
        doctorsList: docs.doctor_details,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
      // alert(error.message);
    }
  }

  // search 

  onChangeText(text) {
    this.setState({ search: text })
    if (text == '') {
      this.setState({ doctorsList: docs.doctor_details })
    }
  }

  goClick() {
    Keyboard.dismiss()
    this.handleSearch(this.state.search)
  }

  async handleSearch(text) {
    console.log('Searching: ' + text)
    let data = this.state.doctorsList;
    data = data.filter(function (d) {
      return (
        d.name.toLowerCase().match(text.toLowerCase()) ||
        d.speciality.toLowerCase().match(text.toLowerCase()) ||
        d.location.city.toLowerCase().match(text.toLowerCase())
      );
    });
    this.setState({ doctorsList: data });
  }

  renderLoad() {
    if (!this.state.doctorsList > 0)
      return (
        <View>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color={colors.primary2} />
          ) : (
              <Text>No doctors found</Text>
            )}
        </View>
      )
  }

  renderList(doctor) {
    return (
      <DoctorPreview
        onPress={() => this.props.navigation.navigate('DocPublicProf',
          { doc: doctor })}
        name={doctor.name} spec={doctor.speciality} loc={doctor.location.city + ', ' + doctor.location.country} avail={doctor.available_in_min} />
    )
  }

  render() {
    const { docType } = this.props.route.params;
    return (
      <View
        onStartShouldSetResponderCapture={() => { this.setState({ enableScrollViewScroll: true }); }}
        style={styles.container}>
        <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
        <Titlebar title={docType} />
        <Searchbar onChangeText={(text) => this.onChangeText(text)} onSearch={() => this.goClick()}
          hint='Search by name, speciality, city' />
        <FlatList style={styles.list}
          data={this.state.doctorsList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => this.renderList(item)}
          keyExtractor={item => item.id}
          // Performance settings
          removeClippedSubviews={true} // Unmount components when outside of window 
          initialNumToRender={20} // Reduce initial render amount
          maxToRenderPerBatch={1} // Reduce number in each render batch
          updateCellsBatchingPeriod={100} // Increase time between renders
          windowSize={7} // Reduce the window size
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg
  },
  catMain: {
    minHeight: hp('25%'),
    backgroundColor: colors.bg
  },
  title: {
    ...fonts.para,
    marginStart: 18,
    marginBottom: hp('1%'),
    marginTop: hp('4%')
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20
  },
});

export default AllDoctors;
