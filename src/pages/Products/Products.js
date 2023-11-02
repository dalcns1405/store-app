import React, { useEffect ,useState } from "react";
import { SafeAreaView ,FlatList, Text } from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.style"
import config from "../../../config"
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";



function Products({navigation}){

    const {loading,data,error} = useFetch(config.EXPO_PUBLIC_API_URL)

    const handleProductSelect = (id) =>{
        navigation.navigate("DetailScreen",{id})

    }
  

    const renderProduct=({item})=>{
        return <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
        
    }

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error/>
    }



    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            data={data}
            renderItem={renderProduct}
            />
            

        </SafeAreaView>

    )
}

export default Products;