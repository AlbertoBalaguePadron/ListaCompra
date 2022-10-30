import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductInput from "./components/ProductInput";
import ListItem from "./components/ListItem";

export default function App() {
  const [products, setProducts] = useState([]);

  const addProductHandler = (sanitizedName, quantity, type, clave) => {
    const MiProduct = {
      id: clave,
      name: sanitizedName,
      quantity: quantity,
      bought: null,
      type: type,
    };

    setProducts(() => [...products, MiProduct]);
  };

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler} />

      {!products.length ? (
        <Text>No hay productos introducidos </Text>
      ) : (
        products.map((product, idx) => (
          <ListItem key={idx + product.id} product={Object.values(product)} />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3f5e5a",
    justifyContent: "flex-start",
    width: "100%",
  },
});
