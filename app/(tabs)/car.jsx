import { Image, ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { ThemeContext, useNavigation, useRoute } from '@react-navigation/native'
import TheContext from '@/constants/TheContext';

const size = Dimensions.get('screen')

const car = () => {
    const { jsonData } = useRoute().params
    const { cart, setCart } = useContext(TheContext)
    console.log("❌", cart);

    const [selectedColor, setColor] = useState(data?.images?.[0].color || "white")
    // console.log("jsonData❌", jsonData);
    const data = JSON.parse(jsonData);
    const nav = useNavigation();

    const renderImages = () => {
        return (
            <Image
                style={styles.img}
                source={(data?.images.find((img) => (img.color === selectedColor)))?.image
                    || data?.images?.[0].image
                }
                resizeMode='contain'
            />
        )
    }
    const renderCollor = () => {
        return (
            <View style={styles.colorView}>
                {(data?.images || []).map(({ color }, index) =>
                    <TouchableOpacity
                        onPress={() => { setColor(color) }}
                        style={[styles.color, { backgroundColor: color }]}
                    />
                )}
            </View>
        )
    }

    const addToCart = () => {
        const car = {
            name: data?.name,
            price: data?.price,
            image: data?.images.find((img) => (img.color === selectedColor))?.image
        }
        cart.push(car)
        setCart([...cart])
        nav.navigate('cart')
    }

    return (
        <View style={styles.view}>
            {renderImages()}
            {renderCollor()}
            <Text>{data.name}</Text>
            <Text>price : {data.price}</Text>

            <TouchableOpacity onPress={addToCart} style={styles.amou}>
                <Text>اضف الى سله</Text>
            </TouchableOpacity>
        </View>
    )
}

export default car

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    img: {
        height: 300,
        width: size.width,
        resizeMode: 'contain'
    },
    colorView: {
        width: '100%',
        flexWrap: 'wrap',
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5
    },
    color: {
        height: 40,
        width: 40,
        borderWidth: 1
    },
    amou: {
        width: 150,
        height: 50,
        borderWidth: 1,
        alignSelf: "center",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})