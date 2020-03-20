import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  BackHandler,
  StatusBar,
  Image
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
      alert(error.message);
    }
  }

  onChangeText() {

  }

  render() {
    const { docType } = this.props.route.params;
    return (
      <View
        onStartShouldSetResponderCapture={() => { this.setState({ enableScrollViewScroll: true }); }}
        style={styles.container}>
        <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
        <Titlebar title={docType}/>
        <Searchbar onChangeText={(text) => this.onChangeText(text)}
          hint='Search doctors' />
        <ScrollView>
         
          {/* start free docs */}
          {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.map(doctor => {
              return (
                <View key={doctor.id}>
                  <DoctorPreview
                    onPress={() => this.props.navigation.navigate('DocPublicProf',
                      { doc: doctor })}
                    name={doctor.name} spec={doctor.speciality} avail={doctor.available_in_min} />
                </View>
              );
            })
          ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp('20%'),
                }}>
                {this.state.isLoading ? (
                  <ActivityIndicator size="large" color={colors.primary2} />
                ) : (
                    <Text>No doctors found</Text>
                  )}
              </View>
            )}
          {/* end free docs */}
        </ScrollView>
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
