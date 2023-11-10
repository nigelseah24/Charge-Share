import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import Map from "../../map/Map";
import Profile from "../Profile/Profile";
import * as Location from "expo-location";

const Home = ({ route }) => {
  // const { user } = route.params;
  const [showMap, setShowMap] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.error("Error obtaining current location:", error);
      setErrorMsg("Error obtaining current location");
    }
  };

  const toggleProfile = () => {
    setShowMap(false);
    setShowProfile(true);
  };

  const toggleMap = () => {
    setShowProfile(false);
    setShowMap(true);
  };

  const headerTitle = showMap ? "Map" : "Profile";

  return (
    <SafeAreaView style={styles.container}>
      {/* {showProfile && <Profile user={user} />} */}
      {showProfile && <Profile />}
      {showMap && (
        <View style={styles.mapContainer}>
          <Map location={location} errorMsg={errorMsg} />
        </View>
      )}
      <View style={styles.footer}>
        <Button title="View Map" onPress={toggleMap} />
        <Button title="Your Profile" onPress={toggleProfile} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    width: "100%",
    height: 45,
    backgroundColor: "white",
  },
});

export default Home;
