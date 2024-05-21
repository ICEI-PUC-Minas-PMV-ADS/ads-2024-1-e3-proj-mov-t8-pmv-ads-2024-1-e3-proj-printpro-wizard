import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './src/pages/Footer/index';
import Resultados from './src/pages/Resultados';
import PagRetorno from './src/pages/PagRetorno';
import CalcDetalhado from './src/pages/CalcDetalhado';
import Orcamento from './src/pages/Orcamento';
import Custo from './src/pages/Custo';
import Login from "./src/pages/Login"
import Cadastro from "./src/pages/Cadastro"

const Stack = createNativeStackNavigator();

export default function App() {
  
  
  return (

    <View>
      <Cadastro/>
      

      {/* <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerBackVisible: false, headerShown: false}}/>
        <Stack.Screen name="Custo" component={Custo} options={{headerBackVisible: false, headerShown: false}}/>
        <Stack.Screen name="Resultados" component={Resultados} options={{headerBackVisible: false}}/>
        <Stack.Screen name="CalcDetalhado" component={CalcDetalhado} options={{headerBackVisible: false}}/>
        <Stack.Screen name="PagRetorno" component={PagRetorno} options={{headerBackVisible: false}}/>
        <Stack.Screen name="Orcamento" component={Orcamento} options={{headerBackVisible: false}}/>
      </Stack.Navigator>
      
    </NavigationContainer> */}
    </View>

    
  );
}
