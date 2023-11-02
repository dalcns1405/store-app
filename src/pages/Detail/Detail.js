import React from "react";
import { Image } from "react-native";
import { Text ,View } from "react-native";
import styles from "../Detail/Detail.style"
import config from "../../../config";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


function Detail({route}){
    const {id}= route.params;
    const {loading,error,data}= useFetch(`${config.EXPO_PUBLIC_API_URL}/${id}`)

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error/>
    }


    return(
        <View style={styles.container}>
            <Image source={{uri:data.image}} style={styles.image} />
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title} </Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL </Text>
            </View>
         
        </View>

    )

}
export default Detail;