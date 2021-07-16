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

export default function Bai2() {
  const [chieuRong, setChieuRong] = useState("");
  const [chieuDai, setChieuDai] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({
    chuVi: "",
    dienTich: "",
  });

  // Axios
  const formData = new FormData();
  formData.append("chieudai", chieuDai);
  formData.append("chieurong", chieuRong);

  const fetchData = async (data) => {
    try {
      const resp = await axios({
        method: "POST",
        url: "http://10.0.2.2:80/ReactNativeNetworking/Lab2/rectangle_POST.php",
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
        <Text style={styles.textTitle}>Tính chu vi và diện tích</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.inputCanh}
          keyboardType="numeric"
          placeholder="Chiều rộng"
          value={chieuRong}
          onChangeText={(text) => setChieuRong(text)}
        />
        <TextInput
          style={styles.inputCanh}
          keyboardType="numeric"
          placeholder="Chiều dài"
          value={chieuDai}
          onChangeText={(text) => setChieuDai(text)}
        />

        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => fetchData(formData)}>
          <Text style={styles.buttonSubmitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {isSubmit && (
        <View style={styles.result}>
          <Text style={styles.textResult}>Chu vi: {data.chuVi}</Text>
          <Text style={styles.textResult}>Diện tích: {data.dienTich}</Text>
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
