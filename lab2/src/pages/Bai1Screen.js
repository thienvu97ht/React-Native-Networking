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

export default function Bai1() {
  const [ten, setTen] = useState("");
  const [diem, setDiem] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({
    ten: "",
    diem: "",
  });

  // Axios
  const formData = new FormData();
  formData.append("ten", ten);
  formData.append("diem", diem);

  const fetchData = async (data) => {
    try {
      const resp = await axios({
        method: "POST",
        url: "http://10.0.2.2:80/ReactNativeNetworking/Lab2/student.php",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      var obj = resp.data;
      setData(obj);
    } catch (err) {
      console.log("error");
    }

    setIsSubmit(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <Text style={styles.textTitle}>Nhập tên và điểm</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.inputCanh}
          placeholder="Nhập tên"
          value={ten}
          onChangeText={(text) => setTen(text)}
        />
        <TextInput
          style={styles.inputCanh}
          keyboardType="numeric"
          placeholder="Nhập điểm"
          value={diem}
          onChangeText={(text) => setDiem(text)}
        />

        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => fetchData(formData)}>
          <Text style={styles.buttonSubmitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {isSubmit && (
        <View style={styles.result}>
          <Text style={styles.textResult}>Tên: {data.ten}</Text>
          <Text style={styles.textResult}>Điểm: {data.diem}</Text>
        </View>
      )}
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
    // backgroundColor: "#0288d1",
    alignItems: "center",
    marginTop: 20,
  },

  textTitle: {
    ...TEXT,
  },

  form: {
    paddingHorizontal: 20,
  },

  inputCanh: {
    // backgroundColor: "#0288d1",
    paddingHorizontal: 10,
    fontSize: 20,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonSubmit: {
    height: 60,
    marginTop: 20,
    backgroundColor: "#0288d1",
    borderRadius: 10,
    justifyContent: "center",
  },

  buttonSubmitText: {
    ...TEXT,
    color: "#fff",
  },

  result: {
    marginTop: 20,
  },

  textResult: {
    ...TEXT,
  },
});
