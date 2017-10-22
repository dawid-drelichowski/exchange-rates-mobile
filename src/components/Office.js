//@flow
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MapView from 'react-native-maps';
import {phonecall as phoneCall}  from 'react-native-communications'
import styles from '../styles';

export type OfficeProperties = {|
  map: ?{latitude: number, longitude: number, title: ?string, description: ?string},
  name: ?string,
  street: string,
  city: string,
  phoneNumber: string
|};

export default class Office extends Component {
  props: OfficeProperties;
  onPhoneNumberPress = () => phoneCall(this.props.phoneNumber, true);
  render() {
    let map;

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