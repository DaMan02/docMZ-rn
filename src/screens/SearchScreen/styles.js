import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  searchbar: {
    height: 46,
    marginStart: 10,
    paddingEnd: 130
  },
  head: {
    ...fonts.header,
    fontSize: 24,
    marginStart: 20,
    marginTop: hp('6%'),
    marginBottom: hp('1%')
  },
  dummy: {
    height: 0.5,
    backgroundColor: '#F4F4F4',
    marginEnd: 20,
    marginStart: 20
  },
  list: {
    marginStart: 8,
    marginEnd: 8,
    borderRadius: 2,
  },
  listItems: {
    ...fonts.h3_thin,
    flex: 1,
    fontSize: 17,
    padding: 10,
  },
  horizon: {
    paddingStart: 28,
  },
  indicator: {
    position: 'absolute',
    right: wp('16%'),
    top: -30
  }
});