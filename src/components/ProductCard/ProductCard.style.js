import { Dimensions, StyleSheet } from "react-native";



const {height,width} = Dimensions.get("window");

const Style = StyleSheet.create({

    container:{
        backgroundColor: '#eceff1',
        padding:10,
        flex:1,
        margin:8,
        borderRadius:10,
        justifyContent: 'space-between'
    },

    image:{
        width:'100%',
        height:height * 0.25,
        backgroundColor: 'white',
        borderRadius: 10,
    },

    title:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 20,
    },

    price:{
        color:'black',
        fontWeight: '600',
        fontSize: 18,
    },

    stock:{
        color:'red',
        fontWeight: 'bold',
        fontSize: 20,
    },

});

export default Style;