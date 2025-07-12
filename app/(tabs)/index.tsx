import { FlatList, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Card from '@/components/Card';
import { products } from '@/components/products';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { ThemeContext } from '@react-navigation/native';
import TheContext from '@/constants/TheContext';

const Index = () => {
  const navigation = useNavigation();
  const data = useLocalSearchParams();
  const [searchedName, setSearchedName] = useState('');
  console.log("data", data.jsonData);
  const test = useContext(TheContext)
  console.log("❌", test);



  const filterByCategory = () => {
    return products.filter(item => item.category === data.name);
  };

  const renderCategoryItems = () => {
    const filteredData = filterByCategory();

    return filteredData.map(item => (
      <View key={item.id}>
        <Card {...item} />
      </View>
    ));
  };

  const searchData = () => {
    if (searchedName.trim() === '') {
      return renderCategoryItems(); // fallback if nothing searched
    }

    const filteredData = products.filter(item =>
      item.name.toLowerCase().includes(searchedName.toLowerCase())
    );

    if (filteredData.length === 0) {
      return <Text style={styles.noResult}>No results found</Text>;
    }

    return filteredData.map(item => (
      <View key={item.id}>
        <Card {...item} data={data} />
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            keyboardType="default"
            placeholder="Search"
            onChangeText={value => setSearchedName(value)}
            value={searchedName}
          />
          <Ionicons name="search-outline" color="blue" size={25} />
        </View>

        <View style={{ width: '100%' }}>
          {searchData()}
        </View>
      </ScrollView>
    </View>

  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    alignItems: 'center',
  },
  search: {
    borderWidth: 2,
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    width: '90%',
  },
  noResult: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});
