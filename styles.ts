import {StyleSheet} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const colors = {
  black: '#000000',
  dark_grey: '#333333',
  white: '#FFFFFF',
  light_grey: '#CCCCCC',
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: colors.white,
    color: colors.dark_grey,
    borderColor: colors.dark_grey,
  },
  dark: {
    backgroundColor: colors.dark_grey,
    color: colors.white,
    borderColor: colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  card: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderColor: colors.light_grey,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.dark_grey,
  },
  cardButton: {
    color: colors.white,
    padding: 13,
    borderColor: colors.light_grey,
    borderWidth: 1,
    width: '30%',
    borderRadius: 50,
    marginTop: 10,
  },
  myswitch: {},
  catsDescription: {
    marginTop: 10,
  },
  detailsContainer: {
    padding: 20,
    margin: 5,
    borderColor: colors.black,
    borderRadius: 20,
    borderWeight: 1,
    borderStyle: 'solid',
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: '400',
    padding: 20,
    borderColor: colors.black,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    color: colors.black,
    marginTop: 20,
  },
  detailsDescription: {
    fontSize: 16,
    padding: 20,
    color: colors.black,
  },
  detailsTag: {
    fontSize: 16,
    marginLeft: 20,
  },
});

export default styles;
