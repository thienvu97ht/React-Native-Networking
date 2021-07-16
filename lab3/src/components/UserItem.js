import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserItem(props) {
  const { user } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phone}>{user.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10,

    marginBottom: 16,
  },

  name: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
  },

  email: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontSize: 18,
  },

  email: {
    marginBottom: 8,
    fontSize: 18,
  },

  phone: {
    marginBottom: 8,
    fontSize: 18,
    color: "#1976D2",
  },
});
