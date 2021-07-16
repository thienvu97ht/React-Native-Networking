import ProductListItem from "../components/ProductListItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, Button, StyleSheet, FlatList, Alert } from "react-native";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const result = await axios(
      "https://60dd9b0c878c890017fa2a57.mockapi.io/products"
    );

    setProducts(result.data);
  };

  return (
    <View>
      <Button title="Tải sản phẩm" onPress={fetchData} />
      <FlatList
        data={products}
        contentContainerStyle={styles.flatListBox}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <ProductListItem product={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListBox: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },

  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
    borderColor: "#000",
  },
});

export default HomeScreen;
