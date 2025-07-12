import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { category } from '@/components/products';
import { useNavigation } from 'expo-router';

const home = () => {
    const nav = useNavigation()
    const renderData = () => {
        const newData = category.map(item => {
            return (
                <TouchableOpacity style={styles.card} onPress={() => nav.navigate("index", { ...item, jsonData: JSON.stringify(item) })}>
                    <Text style={styles.txt}>{item.name}</Text>

                </TouchableOpacity>

            )
        })
        return newData
    };

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Ead shnea</Text>
            <TouchableOpacity style={styles.search}>
                <Text>search</Text>


            </TouchableOpacity>

            {renderData()}

        </View>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50
    },
    search: {
        width: "90%",
        height: 40,
        borderWidth: 1,
        justifyContent: "space-between",
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
    },
    card: {
        margin: 10,
        borderRadius: 20,
        width: "70%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: "black",
        elevation: 5
    },
    txt: {
        color: "green",
        fontSize: 20
    },
    appName: {
        color: "red",
        fontSize: 25,
        alignSelf: 'center',
        justifyContent: "center",
        margin: 1

    }
})