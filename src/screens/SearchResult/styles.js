import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import dimen from '../../assets/dimen';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  tabbar: {
    // backgroundColor: '#ff0000',
  },
  tab: {
    backgroundColor: 'white',
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
  },
  textMain: {
    elevation: 1,
    backgroundColor: '#FFFBF8',
    borderRadius: 20,
    padding: 4,
    paddingStart: dimen.ms,
    marginTop: heightPercentageToDP('2%'),
    marginBottom: 4,
    marginStart: 2,
    marginEnd: 2
  },
  name: {
    ...fonts.large,
    color: '#004D44',
    textAlign: 'center',
    marginBottom: heightPercentageToDP('4%'),
    marginTop: heightPercentageToDP('8%')
  },
  arrow: {
    alignSelf: 'center',
    paddingStart: 20,
    paddingEnd: 20,
  },
  font2: {
    ...fonts.h3_thin,
    fontSize: 18
  },
});