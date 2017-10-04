import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MapView
            style={{width: "100%", height: "100%"}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <MapView.Marker 
              coordinate={{latitude: 37.78825, longitude: -122.4324}}
              title={"Sarah Jones"}
              description={"Test description 1"}
              image={require('./app/assets/marker-1.png')}
            ></MapView.Marker>
            <MapView.Marker 
              coordinate={{latitude: 37.75825, longitude: -122.4224}}
              title={"Marker 2"}
              description={"July Brandon"}
              image={require('./app/assets/marker-2.png')}
            ></MapView.Marker>
            <MapView.Marker 
              coordinate={{latitude: 37.78825, longitude: -122.4424}}
              title={"John Doe"}
              description={"Test description 3"}
              image={require('./app/assets/marker-3.png')}
            ></MapView.Marker>
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
