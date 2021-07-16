import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function StudentItem(props) {
  const { user } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: user.thumbnail }} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
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

  img: {
    height: 150,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    resizeMode: "contain",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 8,
  },

  email: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontSize: 18,
  },

  email: {
    marginBottom: 8,
    fontSize: 18,
    color: "#1976D2",
  },
});
