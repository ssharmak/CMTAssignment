import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.leftButton}>
          <Button title="Form" onPress={() => navigation.navigate("Form")} />
        </View>
        <View style={styles.rightButton}>
          <Button title="API" onPress={() => navigation.navigate("API")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row", // Align buttons horizontally (left and right)
    justifyContent: "space-between", // Space buttons out
    width: "80%", // Adjust to control button width and spacing
  },
  leftButton: {
    flex: 1, // Takes up the left side
    marginRight: 10, // Adds space between the left and right buttons
  },
  rightButton: {
    flex: 1, // Takes up the right side
    marginLeft: 10, // Adds space between the left and right buttons
  },
});

export default HomeScreen;
