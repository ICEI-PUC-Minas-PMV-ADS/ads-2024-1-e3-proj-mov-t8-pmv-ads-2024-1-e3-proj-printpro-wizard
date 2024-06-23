import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './src/pages/Footer/index';
import Resultados from './src/pages/Resultados';
import PagRetorno from './src/pages/PagRetorno';
import CalcDetalhado from './src/pages/CalcDetalhado';
import Orçamento from './src/pages/Orcamento';
import Custo from './src/pages/Custo';
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import EsqueciSenha from "./src/pages/EsqueciSenha"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Custo">
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
         <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{headerShown: false}}/>
         <Stack.Screen name="Custo" component={Custo} options={{headerShown: false}}/>
         <Stack.Screen name="Resultados" component={Resultados} options={{headerShown: false}}/>
         <Stack.Screen name="CalcDetalhado" component={CalcDetalhado} options={{headerShown: false}}/>
         <Stack.Screen name="PagRetorno" component={PagRetorno} options={{headerShown: false}}/>
         <Stack.Screen name="Orçamento" component={Orçamento} options={{headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
};
