import React from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});