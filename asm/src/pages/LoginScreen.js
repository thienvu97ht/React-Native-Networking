import axios from "axios";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    ten: "",
    diem: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <Text style={styles.textTitle}>Login to your Account</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.inputValue}
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputValue}
          keyboardType="default"
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={styles.buttonSubmitText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.singUpText}>
        <Text style={styles.singUpTextLeft}>Don't have an account?</Text>
        <Text style={styles.singUpTextRight}>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
}

const TEXT = {
  textAlign: "center",
  fontSize: 20,
  lineHeight: 30,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.StatusBarHeight,
  },

  content: {
    backgroundColor: "#0288d1",
    alignItems: "center",
    marginTop: 20,
  },

  textTitle: {
    ...TEXT,
    fontWeight: "700",
  },

  form: {
    paddingHorizontal: 20,
    backgroundColor: "#DCEDC8",
  },

  inputValue: {
    // backgroundColor: "#0288d1",
    paddingHorizontal: 10,
    fontSize: 16,
    height: 60,
    marginTop: 10,
  },

  buttonSubmit: {
    height: 60,
    marginTop: 20,
    backgroundColor: "#0288d1",
    borderRadius: 10,
    justifyContent: "center",

    elevation: 10,
  },

  buttonSubmitText: {
    ...TEXT,
    color: "#fff",
  },

  singUpText: {
    flexDirection: "row",
    justifyContent: "center",
  },

  singUpTextLeft: {
    ...TEXT,
  },

  singUpTextRight: {
    ...TEXT,
    marginLeft: 5,
    color: "#0288d1",
  },
});
