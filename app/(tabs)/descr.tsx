import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import TheContext from '@/constants/TheContext';


const descr = () => {
  const { cart, setCart } = useContext(TheContext);
  const data: any = useRoute()?.params
  const [number, setnumber] = useState(0)
  const [amount, setamount] = useState(data.price)
  const nav = useNavigation();



  const addOne = () => {
    setnumber(number + 1)
    setamount(data.price * number)
  }

  const remove = () => {
    if (number >= 1)
      setnumber(number - 1)

    if (amount > data.price) {
      setamount(amount - data.price)
    }


  }

  const addToCart = () => {
    const item = {
      ...data,
      image: data.Image,
      amount
    }
    cart.push(item)
    setCart([...cart])
    nav.navigate('cart')
  }

  return (
    <View style={styles.constair}>


      <View style={styles.img}>
        <Image style={styles.imag} source={data.Image} />
      </View>


      <View style={styles.info}>
        <Text style={styles.txt}>{data.name}</Text>
        {/* <Text style={styles.txt}>{data.categotry}</Text> */}
        <Text style={styles.txt}>{data.price}</Text>
        <Text style={styles.txt}>{data.color}</Text>

        <View style={styles.plsView}>

          <TouchableOpacity onPress={remove} style={styles.plus}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{number}</Text>
          <TouchableOpacity onPress={addOne} style={styles.plus}>
            <Text>+</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.amountView}>
          <Text style={styles.amount}>{amount}</Text>
        </View>

        <TouchableOpacity onPress={addToCart} style={styles.amou}>
          <Text>اضف الى سله</Text>
        </TouchableOpacity>

      </View>

    </View>

  )

}

export default descr

const styles = StyleSheet.create({
  constair: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30
  },
  img: {
    width: "100%",
    height: "50%",
    borderWidth: 1,
  },
  info: {
    width: "100%",
    height: "50%",
    borderWidth: 1
  },
  imag: {
    width: "100%",
    height: "100%",
    borderWidth: 1
  },
  txt: {

    fontSize: 25,
    margin: 5,
    alignItems: "center"
  },
  plsView: {
    flexDirection: "row",
    width: "50%",
    height: 50,
    //borderWidth:2,
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center"
  },
  plus: {
    width: "33%",
    height: "100%",
    // borderWidth:2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 80
  },
  amount: {
    fontSize: 20
  },

  amountView: {
    width: "80%",
    height: 50,
    // borderWidth: 1,
    alignSelf: "center",
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5
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
