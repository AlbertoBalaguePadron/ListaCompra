import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown';
import uuid from 'react-native-uuid';


const ProductInput = ({onProductAdd}) => {

    const dataDesplegable =["Fruit", "Vegetable", "Bakery", "Fish", "Meat"]
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [type, setType] = useState('');

    const changeTextHandler = (value) => {
        setProductName(value);
    }

    const changeQuantity = (value) => {
        setQuantity(value);
    }

    const changeType = (value) => {
        setType(value);
    }
 
    const addProductHandler = () => {
        const sanitizedName = productName.trim(); 
        const clave = uuid.v4();
        if (sanitizedName != ''){
            onProductAdd(sanitizedName, quantity, type, clave);
        }
            setType(''); 
            setQuantity(1); 
            setProductName(''); 
    }

    return (
        <View style={ styles.containerProcut }>
            <View style={styles.flex1}>
                <TextInput style={ styles.product } 
                    placeholder='Introduzca un producto' 
                    keyboardType="default"
                    onChangeText={ changeTextHandler } 
                    value={ productName }/>
                <SelectDropdown
                    data={dataDesplegable}
                    onSelect={(selectedItem, index) => {
                        changeType(selectedItem); 
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        return item
                    }}
                    onchange={changeType}
                    value={type}
                />
            </View>
            <View style={styles.flex2}>
                <NumericInput 
                    style={ styles.product}
                    icon={{color: 'while'}}
                    textColor='while'
                    borderColor={"#8f1f78"}
                    totalHeight={40}
                    totalWidth={50} 
                    maxValue={30}
                    minValue={1}
                    editable={false}
                    rightButtonBackgroundColor='#8f1f78' 
                    leftButtonBackgroundColor='#8f1f78'
                    onChange={changeQuantity}
                    color='black'
                    value={ quantity }
                    />
                <Button title="Añadir" onPress={addProductHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerProcut: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#44c4be",
        width: '100%',
        height: 100,
        padding: 10,
        marginTop: 30, 
        marginBottom: 30,
    },
    product: {
        flex: 1,
        color: 'white',
        flexDirection: 'column',
    },
    flex1: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },  
    flex2: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
});

export default ProductInput;