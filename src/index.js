// @flow
import {AppRegistry} from 'react-native';
import RatesScreen from './components/RatesScreen';
import OfficesScreen from './components/OfficesScreen';
import CalculatorScreen from './components/CalculatorScreen';
import {TabNavigator} from 'react-navigation';
import styles, {tabBarStyles} from './styles';

const ExchangeRatesMobile = TabNavigator({
  Rates: {
    screen: RatesScreen,
  },
  Offices: {
    screen: OfficesScreen,
  },
  Calculator: {
    screen: CalculatorScreen
  }
}, {
  tabBarOptions: {
    inactiveTintColor: tabBarStyles.inactiveTintColor,
    activeTintColor: tabBarStyles.activeTintColor,
    indicatorStyle: styles.indicator,
    showIcon: true,
    style: styles.tabBar
  },
});

AppRegistry.registerComponent('ExchangeRatesMobile', () => ExchangeRatesMobile);
