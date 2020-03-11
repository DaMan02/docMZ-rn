import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';

class Appointments extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            minHeight: hp('12%'),
            width: wp('100%'),
            justifyContent: 'center',
            backgroundColor: colors.primary1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: wp('20%'),
                height: 46,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Indore</Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: wp('8%'),
                height: 46,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="angle-down"
                size={20}
                color={'black'}
                style={{backgroundColor: 'white'}}
              />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: wp('10%'),
                height: 46,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp('3%'),
              }}>
              <Icon
                name="search"
                size={20}
                color={'gray'}
                style={{backgroundColor: 'white'}}
              />
            </View>
            <TextInput
              placeholder="Search doctors, specialities, clinic..."
              style={{
                width: wp('40%'),
                height: 46,
                backgroundColor: 'white',
              }}
            />
            <TouchableNativeFeedback>
              <View
                style={{
                  backgroundColor: 'white',
                  width: wp('10%'),
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: wp('3%'),
                }}>
                <Icon
                  name="filter"
                  size={20}
                  color={'gray'}
                  style={{backgroundColor: 'white'}}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              //   minHeight: hp('25%'),
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                  marginTop: hp('3%'),
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  minHeight: hp('15%'),
                  width: hp('15%'),
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'center',
                  marginTop: hp('3%'),
                }}>
                <Text style={{textAlign: 'center'}}>Lorem Ipsum</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View
            style={{
              minHeight: hp('10%'),
              marginTop: hp('3%'),
              backgroundColor: 'white',
            }}>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
                backgroundColor: colors.shadow,
              }}>
              <Text>RECENT SEARCHES</Text>
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: colors.red}}>
                Delete all recent searches
              </Text>
            </View>
          </View>
          <View
            style={{
              minHeight: hp('25%'),
              marginTop: hp('3%'),
              backgroundColor: 'white',
            }}>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
                backgroundColor: colors.shadow,
              }}>
              <Text>POPULAR SEARCHES</Text>
              <Text
                style={{fontWeight: 'bold', color: 'blue', fontSize: 16}}>
                View all
              </Text>
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
            <View
              style={{
                minHeight: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp('5%'),
                alignItems: 'center',
              }}>
              <Text>Lorem ipsum</Text>
              <Icon name="angle-right" size={25} color={'black'} />
            </View>
          </View>
          <View
            style={{
              minHeight: hp('25%'),
              marginTop: hp('3%'),
              backgroundColor: 'white',
            }}>
            <Text
              style={{marginLeft: wp('3%'), marginTop: hp('1%'), fontSize: 18}}>
              Find doctors in top specialities
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: wp('3%'),
              }}>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Womens Health</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Skin Specialist</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Ortho Specialist</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Dental Care</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Mens Health</Text>
                </View>
              </TouchableNativeFeedback>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Appointments;
