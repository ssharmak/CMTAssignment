import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  const { form } = route.params; // Receive form data from FormScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Details</Text>
      <Text>First Name: {form.firstName}</Text>
      <Text>Middle Name: {form.middleName}</Text>
      <Text>Last Name: {form.lastName}</Text>
      <Text>Phone: {form.phone}</Text>
      <Text>Email: {form.email}</Text>
      <Text>DOB: {form.dob}</Text>
      <Text>Address: {form.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailsScreen;
