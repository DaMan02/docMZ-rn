import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';

export default StyleSheet.create({
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
    marginTop: hp('3%'),

  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20
  }
});