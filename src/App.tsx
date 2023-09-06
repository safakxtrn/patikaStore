import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TopBar from "./components/TopBar";


const App = () => {
  return(
    <SafeAreaView style = {Style.container}>
      <TopBar />
    </SafeAreaView>
  );
};

const Style = StyleSheet.create(
  {
    container:{
      flex: 1,
      backgroundColor:'gray'
    },
    
    
  }
);

export default App;

