import { StyleSheet } from 'react-native';
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
  indicator: {
    position: 'absolute',
    top: 75,
    right: 30,
    alignSelf: 'center',
  },
  searchContainer: {
    backgroundColor: colors.text3,
    marginTop: -4
  },
  dummy: {
    height: 0.5,
    backgroundColor: '#E6EDF0',
    marginEnd: 20,
    marginStart: 20
  },
   list: {
    backgroundColor: 'white',
    marginStart: 8,
    marginEnd: 8,
    borderRadius: 2
  },
  listItems: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    fontFamily: 'sans-serif-light',
    color: 'black',
  },
});