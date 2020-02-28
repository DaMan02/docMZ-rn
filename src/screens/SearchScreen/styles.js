import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral,
  },
   searchbar: {
     height: 40,
     marginStart: 10
   },
   search: {
     flexDirection: 'row',
     alignItems: 'center',
     paddingStart: 14,
     paddingEnd: 14,
     marginStart: 16,
     marginEnd: 16,
     marginTop: 10,
     marginBottom: 8,
     backgroundColor: 'white',
     borderRadius: 4
   },
   searchContainer: {
     backgroundColor: colors.text3,
     marginTop: -4
   }
});