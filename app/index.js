// index.js or your navigation file
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation-stack";
import Login from "./Auth/Login";
import Home from "./app/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
