import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.neutral,
  },
  boldtext: {
      ...fonts.large,
      padding: 12,
      alignSelf: 'center',
      backgroundColor: 'white'
 },
 buttonContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'center', 
      paddingBottom: 10,
      borderBottomColor: colors.shadow,
      borderBottomWidth: 1,
    },
    dummy: {
        padding: 8
    },
    heading: {
        color: colors.text4,
        marginStart: 10,
        marginBottom: 6
    }
});