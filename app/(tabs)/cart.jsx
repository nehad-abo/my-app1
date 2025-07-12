import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import TheContext from '@/constants/TheContext';

const cart = () => {
    const { cart, setCart } = useContext(TheContext);

    const renderCart = () => {
        return (
            cart.map((item, index) =>
                <View key={index} style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <Text>{item.name}</Text>
                    <Text>{item.price}₪</Text>
                    <TouchableOpacity style={styles.remove} onPress={() => {
                        cart.splice(index, 1);
                        setCart([...cart]);
                    }}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
            )
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>cart</Text>
            <View style={styles.screen}>
                {renderCart()}
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => {
                setCart([])
                alert("buy success")
            }}>
                <Text style={styles.text}>buying</Text>
            </TouchableOpacity>
        </View>
    )
}

export default cart

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 5,
        paddingTop: 25,
        // alignltems:"%20",

    },
    text: {
        textAlign: 'center',
        fontSize:25,
        margin:5

    },
    card: {
        width: '100%',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
        padding: 5,
        borderRadius: 10
    },
    remove: {
        height: 25,
        width: 25,
        backgroundColor: 'red',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn:{
        backgroundColor:'green',
        width:100,
        margin:20,
        // height:25,
        borderRadius:25,
        alignSelf:'center'
    }
})