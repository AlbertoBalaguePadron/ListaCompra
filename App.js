import { useState } from "react";
import { Button, StyleSheet, ScrollView, Text, View } from "react-native";
import ProductInput from "./components/ProductInput";
import ListItem from "./components/ListItem";

export default function App() {
  const [products, setProducts] = useState([]);

  const addProductHandler = (sanitizedName, quantity, type, clave) => {

    const 

    const MiProduct = {
      id: clave,
      name: sanitizedName,
      quantity: quantity,
      bought: null,
      type: type,
    };

    setProducts(() => [...products, MiProduct]);
  };

  const removeProductHandler = () => {
    setProducts([]);
  };

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler} />

      <ScrollView style={styles.scroll}>
        {!products.length ? (
          <Text>No hay productos introducidos </Text>
        ) : (
          products.map((product, idx) => (
            <ListItem key={idx + product.id} product={Object.values(product)} />
          ))
        )}
      </ScrollView>

      <Button
        style={styles.button}
        title="Clear"
        onPress={() => removeProductHandler()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    backgroundColor: "#3f5e5a",
    justifyContent: "flex-start",
    width: "100%",
    height: "80%",
  },
  scroll: {
    width: "90%",
  },
  button: {
    flex: 1,
  },
});
