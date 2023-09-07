import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TopBar from "./components/TopBar";
import ProductCard from "./components/ProductCard";
import Data from './data.json'


const App = () => {

  return(

    <SafeAreaView style = {Style.container}>
      <TopBar />
      <FlatList data={Data}
        renderItem={({item}) => <ProductCard product={item} />}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        />
    </SafeAreaView>

  );

};

const Style = StyleSheet.create(
  {
    container:{
      flex: 1,
      backgroundColor:'#2e3440'
    },
  }
);

export default App;

