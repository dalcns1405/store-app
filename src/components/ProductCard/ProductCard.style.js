import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#d8d8d5",
        padding:10,
        margin:8,
        flexDirection:"row",
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"
       



    },
    image:{
       
        justifyContent:"center",
        alignItems:"center",
        width: 150,
        minHeight: 150,
        resizeMode: 'contain', // You can adjust the image's resizeMode as needed
        borderRadius: 6, // Apply a border radius to round the image corners
        

    },
    body:{
        flex:1,
        padding:6,
        justifyContent:"center"

    },
    price:{
        fontSize:16,
        textAlign:"right"

    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        flex:1,
      
        
    }


})