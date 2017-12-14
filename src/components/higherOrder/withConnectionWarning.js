//@flow
import React, {PureComponent, Element} from 'react'
import {View} from 'react-native'
import hoistNonReactStatic from 'hoist-non-react-statics'
import ConnectionWarning from '../../containers/ConnectionWarning'

export default (WrappedComponent: *, props: {} = {}): * => {
  const name: string = WrappedComponent.displayName || WrappedComponent.name || 'Component'
  class WithConnectionWarning extends PureComponent<void, void, void> {
    static displayName: string = `withConnectionWarning(${name})`
    render(): Element<View> {
      return <View {...props}>
        <WrappedComponent/>
        <ConnectionWarning/>
      </View>
    }
  }
  hoistNonReactStatic(WithConnectionWarning, WrappedComponent)
  return WithConnectionWarning
}
