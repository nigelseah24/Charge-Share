import React from "react";
import { useState } from "react";
import MapView, { Callout } from "react-native-maps";
import { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import styles from "./map.styles";

export default function Map() {
  const [userLocation, setUserLocation] = useState([]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 3.0712697483996605,
          longitude: 101.68630975352687,
          latitudeDelta: 0.02,
          longitudeDelta: 0.01,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: 3.0712697483996605,
            longitude: 101.68630975352687,
          }}
          pinColor="black"
        >
          <Callout>
            <Text>Home</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}
