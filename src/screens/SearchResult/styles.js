import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.text3,
  },
  tabbar: {
    // backgroundColor: '#ff0000',
  },
  tab: {
    backgroundColor: colors.text3,
    marginStart: 30,
    elevation: 0
  },
  indicator: {
      backgroundColor: colors.primary2
  },
  label: {
      fontWeight: 'bold',
      color: 'black'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.red
  }
});