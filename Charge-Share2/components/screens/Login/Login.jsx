import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login Page</Text>
      <Button title="Click me" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Login;
