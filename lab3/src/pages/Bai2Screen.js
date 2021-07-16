import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import StudentItem from "../components/StudentItem";

export default function Bai2() {
  const [data, setData] = useState([]);

  // Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: "GET",
          url: "http://10.0.2.2:80/ReactNativeNetworking/Lab3/bai2.php",
        });
        var obj = resp.data;
        console.log("success");
        setData(obj);
      } catch (err) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="light" />

      <FlatList
        data={data}
        renderItem={({ item }) => <StudentItem user={item} />}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.container}
      />
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
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },

  content: {
    // backgroundColor: "#0288d1",
    alignItems: "center",
    marginTop: 20,
  },

  textTitle: {
    ...TEXT,
    fontSize: 24,
    fontWeight: "bold",
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
