import React from "react";
import MapView, { Callout, CalloutSubview } from "react-native-maps";
import { Marker } from "react-native-maps";
import { Linking, View, Text, TouchableWithoutFeedback } from "react-native";

import styles from "./map.styles";
import HomeChargerPoints from "./map.data";

export default function Map({ location, errorMsg }) {
  let text = "Waiting..";
  let userLatitude = null;
  let userLongitude = null;

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const locationData = JSON.parse(JSON.stringify(location));

    userLatitude = locationData.coords.latitude;
    userLongitude = locationData.coords.longitude;
  }

  const openMaps = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const handleNavigatePress = (point) => {
    // You can customize the URL based on your requirements
    const destinationLatitude = point.latitude;
    const destinationLongitude = point.longitude;
    const url = `https://www.google.com/maps?daddr=${destinationLatitude},${destinationLongitude}&saddr=${userLatitude},${userLongitude}`;
    openMaps(url);
  };

  const listHomeChargerPoints = () => {
    return HomeChargerPoints.map((point, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: point.latitude,
          longitude: point.longitude,
        }}
        pinColor="yellow"
      >
        <Callout onPress={() => handleNavigatePress(point)}>
          <Text>{point.name}</Text>
          <Text>Navigate here</Text>
        </Callout>
      </Marker>
    ));
  };

  return (
    <View style={styles.container}>
      {userLatitude && userLongitude ? (
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
          {/* Location of User */}
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

          {/* Location of Home Charger Points */}
          {listHomeChargerPoints()}
        </MapView>
      ) : (
        <Text>{text}</Text>
      )}
    </View>
  );
}
