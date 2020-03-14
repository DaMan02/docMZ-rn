import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  extraLarge: {
      fontSize: 24,
      fontFamily:'balooThambi2_ExtraBold',
  },
  header:{
    fontSize: 20,
    fontFamily:'balooThambi2_ExtraBold',
  },  
  large: {
      fontSize: 18,
      color: colors.large,
      fontFamily: 'balooThambi2_Bold',
  },
  h1: {
    fontSize: 17,
    color: colors.h1,
    fontFamily: 'balooThambi2_Bold',
  },
  h2: {
    fontSize: 16,
    color: colors.h2,
    fontFamily: 'balooThambi2_SemiBold',
  },
  h3: {
    fontSize: 16,
    color: colors.h3,
    fontFamily: 'balooThambi2_Medium',
  },
  h4: {
    fontSize: 15,
    color: colors.h3,
    fontFamily: 'balooThambi2_Medium',
  },
  para: {
    fontSize: 14,
    color: colors.para,
    fontFamily: 'balooThambi2_Medium',
  },

  para_thin: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'balooThambi2_Regular',
  },
  h3_thin: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'balooThambi2_Regular',
  }
});