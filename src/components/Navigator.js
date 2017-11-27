import RatesScreen from './RatesScreen'
import OfficesScreen from '../containers/OfficesScreen'
import CalculatorScreen from './CalculatorScreen'
import {TabNavigator} from 'react-navigation'
import styles, {tabBarStyles} from '../styles'

export default TabNavigator({
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
})
