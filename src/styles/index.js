import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: colors.white,
    flex: 1
  },
  containerContent: {
    alignItems: 'center'
  },
  tabBar: {
    backgroundColor: colors.red
  },
  tabBarIcon: {
    color: colors.white,
    fontSize: 25
  },
  indicator: {
    backgroundColor: colors.white
  },
  office: {
    flex: 1
  },
  map: {
    /*...StyleSheet.absoluteFillObject,
    top: 20*/
    width: 300,
    height: 300
  },
  picker: {
    width: 100
  },
  amountInput: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 1
  }
});

export const tabBarStyles = {
  inactiveTintColor: colors.black,
  activeTintColor: colors.white
};