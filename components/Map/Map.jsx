// Map.jsx

import React from "react";
import MapView, { Callout } from "react-native-maps";
import { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import styles from "./map.styles";

export default function Map({ location, errorMsg }) {
  let text = "Waiting..";
  let userLatitude = null;
  let userLongitude = null;

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const locationData = JSON.parse(JSON.stringify(location));
    locationData ? (text = null) : (text = "Waiting..");

    userLatitude = locationData.coords.latitude;
    userLongitude = locationData.coords.longitude;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      {userLatitude && userLongitude && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLatitude,
            longitude: userLongitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          provider="google"
        >
          <Marker
            coordinate={{
              latitude: userLatitude,
              longitude: userLongitude,
            }}
            pinColor="orange"
          >
            <Callout>
              <Text>You are here!</Text>
            </Callout>
          </Marker>
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
      )}
    </View>
  );
}
