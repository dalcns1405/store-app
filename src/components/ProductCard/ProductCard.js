import React from "react";
import styles from "./ProductCard.style"
import { Image, Text, View } from "react-native";
import { Pressable } from "react-native";


const ProductCard =({product,onSelect})=>{
    return(
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:product.image}} />
                <View style={styles.body}>
                    <Text style={styles.title}>{product.title} </Text>
                    <Text style={styles.price}>{product.price} TL </Text>
                </View>


            </View>
        </Pressable>

    )

}
export default ProductCard;