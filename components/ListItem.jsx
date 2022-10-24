import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
// onProductRemove
const ListItem = ({ productData}) => {


    return (
        <View style={styles.listItems}>
            <Pressable style={{flexDirection: "row"}} onPress={() => console.log("hola como estas me quiero eliminar Xd")/*onProductRemove(productName)*/} >
                {/* <Image style={styles.productImage} source={require('../assets/bolsacompra.jpg')} /> */}
                <Text style={styles.productName}>{productData}</Text>
            </Pressable>
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
    // productImage: {
    //     width: 50,
    //     height: 50
    // },
    productName: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center'
    }
});

export default ListItem