import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  map: {
    flex: 1,
  },
  navigateButton: {
    height: 30,
    width: 150,
    // Add other styles as needed
  },
});

export default styles;
