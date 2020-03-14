import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Api } from '../../constants';
import { Axios } from '../../config';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import styles from './styles';
import NormalButton from '../../components/NormalButton';
import Speciality from '../../components/Speciality';
import DoctorPreview from '../../components/DoctorPreview';

class Launch extends Component {
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

  render() {
    return (
      <View
        onStartShouldSetResponderCapture={() => { this.setState({ enableScrollViewScroll: true }); }}
        style={styles.container}>
        <View
          style={styles.catMain}>
          <Text style={styles.title}>Categories</Text>
          <ScrollView
            horizontal={this.state.specialityList.length > 0}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scroll}>
            {this.state.specialityList.length > 0 ? (
              this.state.specialityList.map(speciality => {
                return (
                  <Speciality  onPress={() => console.log(speciality.name)}
                  title={speciality.name} light='#FFEBD5' dark='#FF8300' uri={require('../../assets/images/aid.png')} />
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
        <ScrollView >
          {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.map(doctor => {
              return (
                <View key={doctor._id}>
                  <DoctorPreview onPress={() => this.props.navigation.navigate('DocProfile', {docName: doctor.basic.name})}
                  name={doctor.basic.name} rating='4.6' org={doctor.basic.organization_name} bg='#05DDFF' />
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
        </ScrollView>
        </View>
    );
  }
}

export default Launch;
