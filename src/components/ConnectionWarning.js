//@flow
import React, {PureComponent, Element} from 'react'
import {Text, View} from 'react-native'
import styles from '../styles'

type Props = {
  isConnected: boolean
}

export default class ConnectionWarning extends PureComponent<Props, Props, void> {
  static defaultProps: Props = {
    isConnected: false
  }
  render(): Element<View> | null {
    return this.props.isConnected ? null : <View style={styles.connectionWarning}>
        <Text>No internet connection</Text>
      </View>
  }
}
