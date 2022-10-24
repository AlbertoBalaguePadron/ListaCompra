import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ProductInput from "./components/ProductInput";
import ListItem from "./components/ListItem";

export default function App() {
  const [products, setProducts] = useState([]);

  const addProductHandler = (productName, type, quantity) => {
    setProducts(() => [...products, productName, type, quantity]);
    console.log(productName, type, quantity);
  };
  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler} />
      <ListItem productData={products} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f5e5a",
    alignItems: "center",
    justifyContent: "center",
  },
});
