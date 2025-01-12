import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const ApiScreen = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const user = data.results[0];

      setUserData({
        firstName: user.name.first,
        lastName: user.name.last,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
        picture: user.picture.large,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!userData ? (
        <Button title="Fetch User Details" onPress={fetchUserData} />
      ) : (
        <View style={styles.card}>
          <Image source={{ uri: userData.picture }} style={styles.image} />
          <Text style={styles.text}>
            • Name: {userData.firstName} {userData.lastName}
          </Text>
          <Text style={styles.text}>• Gender: {userData.gender}</Text>
          <Text style={styles.text}>• Email: {userData.email}</Text>
          <Text style={styles.text}>• Phone Number: {userData.phone}</Text>
          <Text style={styles.text}>• Address: {userData.address}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    alignItems: "flex-start",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ApiScreen;
