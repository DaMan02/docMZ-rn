import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  BackHandler,
  StatusBar
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Api } from '../../constants';
import { Axios } from '../../config';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import Speciality from '../../components/Speciality';
import DoctorPreview from '../../components/DoctorPreview';
import Icon from 'react-native-vector-icons/Ionicons';
import dimen from '../../assets/dimen';
import docs from '../../database/doctorsDemo.json'
import specs from '../../database/specialityDemo.json'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ViewAll from '../../components/ViewAll';

class DoctorSearch extends Component {
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
      // let specialityList = await Axios.get(Api.doctors + Api.getSpecialities);
      this.setState({
        doctorsList: docs.doctor_details,
        specialityList: specs.specialities,
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
    let iconPath = '../../assets/images';
    return (
      <View
        onStartShouldSetResponderCapture={() => { this.setState({ enableScrollViewScroll: true }); }}
        style={styles.container}>
        <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
        <View style={styles.head}>
          <Icon name="ios-menu" size={30} color='black' />
          <Text style={{ ...fonts.h3, fontSize: 22, marginStart: wp('6%'), textAlign: 'center' }}>DocMz</Text>
          <Icon name="ios-funnel" size={24} color='black' />
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.searchbar}
            onChangeText={text => this.onChangeText(text)}
            value={this.props.search}
            placeholder='Search doctors'
          />
          <TouchableOpacity activeOpacity={0.4} style={styles.searchIcon}><Icon name='ios-search' size={18} color='white' /></TouchableOpacity>
        </View>
        <ScrollView>
          <View
            style={styles.catMain}>
            <ViewAll title='SELECT SPECIALITY' />
            <ScrollView
              horizontal={this.state.specialityList.length > 0}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scroll}>
              {this.state.specialityList.length > 0 ? (
                this.state.specialityList.slice(0, 6).map(sp => {
                  return (
                    <Speciality onPress={() => console.log(iconPath + '/' + sp.icon + '.png')}
                      title={sp.name} uri={require(iconPath + '/' + 'stetho.png')} />
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
                        <Text>No speciality found</Text>
                      )}
                  </View>
                )}
            </ScrollView>
          </View>
{/* start free docs */}
          <ViewAll title='FREE CHECKUP' />
          {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.slice(0, 3).map(doctor => {
              return (
                <View key={doctor.id}>
                  <DoctorPreview
                    onPress={() => this.props.navigation.navigate('DocPublicProf',
                      { docDetails: doctor })}
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
          <ViewAll title='TOP DOCTORS' />
          {/* <ScrollView > */}
          {/* {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.map(doctor => {
              return (
                <View key={doctor._id}>
                  <DoctorPreview
                    onPress={() => this.props.navigation.navigate('DocPublicProf',
                      { docName: doctor.basic.name })}
                    name={doctor.basic.name}  spec='General Physician' loc='Las Vegas, United States' avail={28}/>
                </View>
              ); 
            }) */}
          {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.slice(0, 10).map(doctor => {
              return (
                <View key={doctor.id}>
                  <DoctorPreview
                    onPress={() => this.props.navigation.navigate('DocPublicProf',
                      { docDetails: doctor })}
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
          {/* </ScrollView> */}
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
  searchIcon: {
    backgroundColor: colors.button,
    borderRadius: 50,
    height: 46,
    width: 46,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...fonts.para,
    marginStart: 18,
    marginBottom: hp('1%'),
    marginTop: hp('4%')
  },
  searchbar: {
    height: 46,
    marginStart: 10,
    marginEnd: 10,
    paddingEnd: 130
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
    marginStart: 12,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 14,
    paddingEnd: 0,
    justifyContent: 'space-between',
    marginStart: 28,
    marginEnd: 16,
    marginTop: hp('2%'),
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8
  },
});

export default DoctorSearch;
