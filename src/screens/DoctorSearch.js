import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TextInput
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Api } from '../constants';
import { Axios } from '../config';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import Speciality from '../components/Speciality';
import DoctorPreview from '../components/DoctorPreview';
import Icon from 'react-native-vector-icons/Ionicons';


class DoctorSearch extends Component {
  state = {
    selectedOption: 1,
    doctorsList: [],
    specialityList: [],
    isLoading: true,
  };

  async componentDidMount() {
    try {
      let doctorList = await Axios.post(Api.doctors + Api.getDoctors);
      let specialityList = await Axios.get(Api.doctors + Api.getSpecialities);
      this.setState({
        doctorsList: doctorList.data.data,
        specialityList: specialityList.data.data,
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
    return (
      <View
        onStartShouldSetResponderCapture={() => { this.setState({ enableScrollViewScroll: true }); }}
        style={styles.container}>
        <View style={styles.search}>
          <Icon name='ios-search' size={18} color='black' />
          <TextInput
            style={styles.searchbar}
            onChangeText={text => this.onChangeText(text)}
            value={this.props.search}
            placeholder='Search   '
          />
        </View>
        <ScrollView>
        <View
          style={styles.catMain}>
          <Text style={styles.title}>Specialities</Text>
          <ScrollView
            horizontal={this.state.specialityList.length > 0}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scroll}>
            {this.state.specialityList.length > 0 ? (
              this.state.specialityList.map(speciality => {
                return (
                  <Speciality onPress={() => console.log(speciality.name)}
                    title={speciality.name} light='#FFEBD5' dark='#FF8300' uri={require('../assets/images/aid.png')} />
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
                    <ActivityIndicator size="large" color={colors.primary1} />
                  ) : (
                      <Text>No speciality found</Text>
                    )}
                </View>
              )}
          </ScrollView>
        </View>

        <Text style={styles.title}>Doctors Available</Text>
        {/* <ScrollView > */}
          {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.map(doctor => {
              return (
                <View key={doctor._id}>
                  <DoctorPreview
                    onPress={() => this.props.navigation.navigate('DocPublicProf',
                      { docName: doctor.basic.name })}
                    name={doctor.basic.name} rating='4.6' org={doctor.basic.organization_name} bg='#BFF5F0' />
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
                  <ActivityIndicator size="large" color={colors.primary1} />
                ) : (
                    <Text>No doctors found</Text>
                  )}
              </View>
            )}
        {/* </ScrollView> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  catMain: {
    minHeight: hp('25%'),
    backgroundColor: 'white',
  },
  title: {
    ...fonts.para,
    fontWeight: 'bold',
    marginStart: 18,
    backgroundColor: 'white',
    marginBottom: 14,
    marginTop: hp('1%'),

  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 14,
    paddingEnd: 14,
    marginStart: 28,
    marginEnd: 16,
    marginTop: hp('4%'),
    marginBottom: 8,
    backgroundColor: '#ECEFEF',
    borderRadius: 6
  },
});

export default DoctorSearch;
