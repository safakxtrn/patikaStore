import React from "react";
import { Text, TextInput, View } from "react-native";
import Style from './TopBar.style'


const TopBar = (prop)=>{
    return(
        <View style={Style.container}>
            <Text style = {Style.text}>PATİKASTORE</Text>
            <TextInput style = {Style.text_input}
                defaultValue="Ara..."
                autoFocus></TextInput>
            
        </View>
    );
};

export default TopBar;