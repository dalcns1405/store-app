import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';

export default function Router() {

  const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={Products} options={{
          title:"Dükkan",
          headerStyle:{backgroundColor:'#cc7356'},
          headerTitleStyle:{color:'white' } ,
          headerTitleAlign:'center',
         


        }} />
        <Stack.Screen name="DetailScreen" component={Detail} options={{
          title:"Dükkan",
          headerStyle:{backgroundColor:'#cc7356'},
          headerTitleStyle:{color:'white' } ,
          headerTitleAlign:'center',
          headerTintColor:'white'

        }}/>
           
      </Stack.Navigator>

    </NavigationContainer>
  );
}

