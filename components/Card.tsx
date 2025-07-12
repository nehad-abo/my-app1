import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'


const Card = (props: any) => {
  const nav = useNavigation()
  const gotoProduct = () => {
    if (props.category === "car") {

      // const data = JSON.parse(props.jsonData)
      // const cars = data.cars
      nav.navigate("carPage", { ...props })
    } else {
      nav.navigate("descr", { ...props })
    }
  }

  return (

    <TouchableOpacity style={styles.card} onPress={gotoProduct}>
      <Image source={props.Image} style={styles.img} />
      <Text style={styles.txt}>{props.name}</Text>
      <Text style={styles.txt}>{props.price}</Text>

    </TouchableOpacity >

  )
}

export default Card

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "white",


  },
  txt: {
    fontSize: 25,

  },
  search: {
    borderWidth: 2,
    borderColor: "red",

    width: "90%",
    height: 50,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: "row"
  },
  card: {

    alignItems: 'center',
    // borderWidth: 2,
    width: "90%",
    height: 250,
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: "lightgray",
    elevation: 5
  },
  img: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "70%",
    width: "100%",

  }
})