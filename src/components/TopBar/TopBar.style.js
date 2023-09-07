import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create(
    {
        container:{
            height:Dimensions.get('window').height / 6,
            backgroundColor: '#2e3440',
            padding:10,
            justifyContent:'space-around'
        },
        
        text:{
            color:'#ebcb8b',
            fontWeight: 'bold',
            fontSize:Dimensions.get('window').height / 25,
            marginLeft:5,
        },

        text_input:{
            backgroundColor:'#eceff1',
            borderRadius:10,
            color:'#b7b9bc',
            paddingLeft:10,
        },
    }
);