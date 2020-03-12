import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'
  },
  title: {
      ...fonts.large,
      paddingStart: 18,
      paddingTop: 18,
      paddingBottom: 8
  },
  underline: {
    height: 2,
    backgroundColor: 'black',
    width: 100,
    marginStart: 18,
  },
  buttons: {
    padding: 10,
    alignSelf: 'center',
    marginTop: hp('18%')
  },
  or: {
    alignSelf: 'center',
    padding: 10
  },
  login: {
    ...fonts.h3,
     padding: 10,
     alignSelf: 'center',
     marginBottom: 20
  }
});