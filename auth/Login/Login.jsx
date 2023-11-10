// web: 313969563698-orcmgrnv6tdrdtnd94sjd9k8oabiuv12.apps.googleusercontent.com
// IOS: 313969563698-jsge4km03k26k1h9vf71svd07aghthp7.apps.googleusercontent.com
// android:

// Login.js
import React from "react";
import { View, Text, Button } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const Login = ({ navigation }) => {
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.configure({
        scopes: ["email", "profile"],
        webClientId:
          "313969563698-jsge4km03k26k1h9vf71svd07aghthp7.apps.googleusercontent.com", // Replace with your actual web client ID
        offlineAccess: true,
      });

      const userInfo = await GoogleSignin.signIn();
      navigation.navigate("Home", { user: userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Operation (e.g., sign-in) is in progress already");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services are not available or outdated");
      } else {
        console.error("Error during Google authentication:", error);
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Page</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleLogin}
      />
    </View>
  );
};

export default Login;
