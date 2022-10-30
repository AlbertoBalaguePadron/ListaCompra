import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
// onProductRemove
const ListItem = ({product}) => {

    let id = product[0];
    let name = product[1]; 
    let quantity = product[2]; 
    let shoop = product[3];
    let type = product[4];

    let TextoMostrar = quantity + " X " + name 


    const ImAutoSelection = (type) => {

        switch (type) {
            case "Fruit":
                return <Image style={styles.productImage} source={require('../assets/fruta.png')} /> 
            break;

            case "Vegetable":
                return <Image style={styles.productImage} source={require('../assets/verduras.png')} /> 
            break;

            case "Backery":
                return <Image style={styles.productImage} source={require('../assets/reposteria.png')} /> 
            break;

            case "Fish":
                return <Image style={styles.productImage} source={require('../assets/pescado.png')} />   
            break;

            case "Meat":
                return <Image style={styles.productImage} source={require('../assets/carne.png')} /> 
            break;
          }

    };

    return (
        <View style={styles.listItems}>
            <ScrollView>
                <Pressable style={{flexDirection: "row"}} onPress={() => console.log("hola como estas me quiero eliminar Xd soy => " + id)/*onProductRemove(productName)*/} >
                    {ImAutoSelection(type)}
                    <Text style={styles.productName}>{TextoMostrar}</Text>

                </Pressable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    listItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5
    },
    productImage: {
        width: 50,
        height: 50
    },
    productName: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center'
    }
});

export default ListItem