import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import FormScreen from "../screens/FormScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ApiScreen from "../screens/ApiScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="API" component={ApiScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
