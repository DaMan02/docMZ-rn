import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    marginTop: 30,
    marginBottom: 20
  },
  go: {
    backgroundColor: 'white',
    height: 38,
    width: 38,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 14,
    paddingEnd: 14,
    marginStart: 28,
    marginEnd: 16,
    marginTop: 10,
    marginBottom: 8,
    backgroundColor: '#ECEFEF',
    borderRadius: 6
  },
  searchContainer: {
  },
  dummy: {
    height: 0.5,
    backgroundColor: '#F4F4F4',
    marginEnd: 20,
    marginStart: 20
  },
  list: {
    backgroundColor: 'white',
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
  }
});