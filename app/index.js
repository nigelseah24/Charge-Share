import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import Map from "../components/Map/Map";
import Profile from "../components/Profile/Profile";

const Home = () => {
  const router = useRouter();
  const [showMap, setShowMap] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "Maps",
        }}
      />
      <View style={styles.mapContainer}>
        {showMap && <Map />}
        {showProfile && <Profile />}
      </View>
      <View style={styles.footer}>
        <Button title="Toggle Map" onPress={() => setShowMap(!showMap)} />
        <Button
          title="Toggle Profile"
          onPress={() => setShowProfile(!showProfile)}
        />
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
    bottom: 0,
    width: "100%",
  },
});

export default Home;
