//@flow
import withConnectionWarning from './higherOrder/withConnectionWarning'
import RatesScreen from './RatesScreen'
import CalculatorScreen from './CalculatorScreen'
import OfficesScreen from './OfficesScreen'
import {TabNavigator} from 'react-navigation'
import styles, {tabBarStyles} from '../styles'

const screenProps: {
  style: {}
} =  {style: styles.screen}

export default TabNavigator({
  Rates: {
    screen: withConnectionWarning(RatesScreen, screenProps)
  },
  Offices: {
    screen: withConnectionWarning(OfficesScreen, screenProps)
  },
  Calculator: {
    screen: withConnectionWarning(CalculatorScreen, screenProps)
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
