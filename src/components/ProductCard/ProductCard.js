import React from "react";
import { Image, Text, View } from "react-native";
import Style from './ProductCard.style'

const ProductCard = ({product}) =>{
    return(

        <View style = {Style.container}>

            <View>
                <Image style = {Style.image}
                    source={{uri:product.imgURL}}
                    resizeMode="contain"/>
                <Text style = {Style.title}>{product.title}</Text>
            </View>
            <Text style = {Style.price}>{product.price}</Text>
            {
                product.inStock ? "" : <Text style = {Style.stock}>STOKTA YOK</Text>
            }
        </View>

    );
};


export default ProductCard;