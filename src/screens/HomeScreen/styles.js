import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.neutral,
  },
  normalbutton: {
      flexDirection: 'row',
      paddingTop: 16,
      paddingBottom: 16,
      justifyContent: 'center'
  }
});