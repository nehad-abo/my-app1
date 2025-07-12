import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { cars } from '@/components/products';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const carPage = () => {
    const data = useRoute().params;
    const carType = data?.name || "BMW";
    console.log("❌❌❌❌❌❌car name", carType);

    const Cars = cars[carType];
    const nav = useNavigation()
    // console.log("❌", carType, Cars);


    const renderCars = () => {



        return (
            Cars.map((car) =>
                <TouchableOpacity onPress={() => {
                    const jsonData = JSON.stringify(car)
                    nav.navigate('car', { jsonData: jsonData })
                }} style={styles.card}>
                    {/* {console.log("❌", car)} */}
                    <Image source={car.images[0].image} style={styles.image} />
                    <Text>{car.name}</Text>
                    <Text>{car.price}</Text>
                </TouchableOpacity>
            )
        )
    }

    return (
        <ScrollView style={styles.view}>
            <Text>carPage</Text>
            {renderCars()}
            {/* <Image source={data.params.cars[0].image} /> */}
        </ScrollView>
    )
}

export default carPage

const styles = StyleSheet.create({
    view: {
        padding: 20
    },
    image: {
        height: 200,
        width: 200
    },
    card: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10
    }
})