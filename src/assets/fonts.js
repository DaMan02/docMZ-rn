import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  header:{
    fontSize: 20,
    fontFamily:'Roboto',
    fontWeight: 'bold', 
  },  
  large: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.large,
      fontFamily: 'Roboto',
  },
  h1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.h1,
    fontFamily: 'Roboto',
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.h2,
    fontFamily: 'Roboto',
  },
  h3: {
    fontSize: 16,
    color: colors.h3,
    fontFamily: 'Roboto',
  },
  h4: {
    fontSize: 15,
    color: colors.h3,
    fontFamily: 'Roboto',
  },
  para: {
    fontSize: 14,
    color: colors.para,
    fontFamily: 'Roboto',
  },

  para_thin: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'sans-serif-light',
  },
  h3_thin: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'sans-serif-light',
  }
});