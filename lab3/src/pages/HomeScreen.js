import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function HomeScreen(props) {
  const { navigation } = props;

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="light" />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Bai1")}>
        <View style={styles.container}>
          <Text style={styles.title}>Bài 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Bai2")}>
        <View style={styles.container}>
          <Text style={styles.title}>Bài 2</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
    paddingHorizontal: 100,
  },

  categoryImage: {
    width: 80,
    height: 80,
  },

  title: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default HomeScreen;
