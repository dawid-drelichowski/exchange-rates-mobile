//@flow
import type {Office as OfficeProperties} from '../types/offices'
import React, {Component, Element} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import MapView from 'react-native-maps'
import {phonecall as phoneCall} from 'react-native-communications'
import styles from '../styles'

export default class Office extends Component<void, OfficeProperties, void> {
  onPhoneNumberPress = (): void => phoneCall(this.props.phoneNumber, true);
  render(): Element<View> {
    let map: MapView | null = null

    if (this.props.map) {
      map = <MapView
        initialRegion={{
          latitude: this.props.map.latitude,
          longitude: this.props.map.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE}
        loadingEnabled={true}
      >
        <MapView.Marker
          coordinate={{
            latitude: this.props.map.latitude,
            longitude: this.props.map.longitude
          }}
          title={this.props.map.title}
          description={this.props.map.description}
        />
      </MapView>
    }

    return <View style={styles.office}>
      {map}
      <Text>{this.props.name}</Text>
      <Text>{this.props.street}</Text>
      <Text>{this.props.city}</Text>
      <TouchableOpacity onPress={this.onPhoneNumberPress}>
        <Text>{this.props.phoneNumber}</Text>
      </TouchableOpacity>
    </View>
  }
}
