import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
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

            case "Vegetable":
                return <Image style={styles.productImage} source={require('../assets/verduras.png')} /> 

            case "Bakery":
                return <Image style={styles.productImage} source={require('../assets/postre.png')} /> 

            case "Fish":
                return <Image style={styles.productImage} source={require('../assets/pescado.png')} />   

            case "Meat":
                return <Image style={styles.productImage} source={require('../assets/carne.png')} /> 
        }
    };

    const tarjeta = (shoop) => {    
        if (shoop) {
            return styles.productTachado
        }else {
            return styles.product
        }
    }

    return (
        <View style={styles.listItems}>
                <Pressable id="memo" style={{flexDirection: "row", alignItems: "center"}}>
                    {ImAutoSelection(type)}
                    <Text style={styles.product} >{TextoMostrar}</Text>
                </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    listItems: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: "100%",
        marginBottom: 5,
        paddingHorizontal: 5
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    product: {
        fontSize: 18,
        paddingRight: "45%",
        textAlign: 'left',
        alignContent: 'flex-start',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    productTachado: {
        fontSize: 18,
        paddingRight: "45%",
        textAlign: 'left',
        alignContent: 'flex-start',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textDecorationLine: 'line-through',
    }
});

export default ListItem