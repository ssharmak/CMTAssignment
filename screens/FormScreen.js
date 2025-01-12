import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

const FormScreen = () => {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const { firstName, lastName, phone, email, dob, address } = form;

    if (!firstName || !lastName || !phone || !email || !dob || !address) {
      Alert.alert("Error", "Please fill all the required fields.");
      return false;
    }
    if (!/^[a-zA-Z\s]{1,15}$/.test(firstName)) {
      Alert.alert(
        "Error",
        "First Name must be text only and up to 15 characters no numericals."
      );
      return false;
    }
    if (form.middleName && !/^[a-zA-Z\s]{1,15}$/.test(form.middleName)) {
      Alert.alert(
        "Error",
        "Middle Name must be text only and up to 15 characters no numericals."
      );
      return false;
    }
    if (!/^[a-zA-Z\s]{1,15}$/.test(lastName)) {
      Alert.alert(
        "Error",
        "Last Name must be text only and up to 15 characters no numericals."
      );
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert("Error", "Phone number must be exactly 10 digits.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
      Alert.alert("Error", "DOB must be in YYYY-MM-DD format.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!submitted ? (
        <>
          <Text style={styles.title}>Form</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name (Required)"
            onChangeText={(text) => setForm({ ...form, firstName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Middle Name (Optional)"
            onChangeText={(text) => setForm({ ...form, middleName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name (Required)"
            onChangeText={(text) => setForm({ ...form, lastName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone (Required)"
            keyboardType="numeric"
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email (Required)"
            keyboardType="email-address"
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <View style={styles.dobContainer}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="DOB (YYYY-MM-DD) (Required)"
              value={form.dob}
              onChangeText={(text) => setForm({ ...form, dob: text })}
            />
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.calendarIcon}
            >
              <Ionicons name="calendar" size={24} color="#555" />
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  const formattedDate = selectedDate
                    .toISOString()
                    .split("T")[0];
                  setForm({ ...form, dob: formattedDate });
                }
              }}
              maximumDate={new Date()}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Address (Required)"
            onChangeText={(text) => setForm({ ...form, address: text })}
          />
          <View style={styles.buttonsContainer}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </>
      ) : (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Form Data</Text>
          <Text style={styles.cardText}>First Name: {form.firstName}</Text>
          <Text style={styles.cardText}>Middle Name: {form.middleName}</Text>
          <Text style={styles.cardText}>Last Name: {form.lastName}</Text>
          <Text style={styles.cardText}>Phone: {form.phone}</Text>
          <Text style={styles.cardText}>Email: {form.email}</Text>
          <Text style={styles.cardText}>DOB: {form.dob}</Text>
          <Text style={styles.cardText}>Address: {form.address}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: "100%",
  },
  dobContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  calendarIcon: {
    marginLeft: 10,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    width: "100%",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default FormScreen;
