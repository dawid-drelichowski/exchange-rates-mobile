//@flow
import React, {PureComponent, Element} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles'

type Props = {
  isConnected: boolean
}

export default class ConnectionWarning extends PureComponent<Props, Props, void> {
  static defaultProps: Props = {
    isConnected: false
  }
  render(): Element<Icon> | null {
    return this.props.isConnected ? null : <Icon name="plug" style={styles.disconnectedIcon}/>
  }
}
