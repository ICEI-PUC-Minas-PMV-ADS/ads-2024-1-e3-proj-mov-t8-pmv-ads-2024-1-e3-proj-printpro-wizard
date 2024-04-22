import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './src/pages/Footer/index';
import Resultados from './src/pages/Resultados';
import PagRetorno from './src/pages/PagRetorno';
import CalcDetalhado from './src/pages/CalcDetalhado';
import Orcamento from './src/pages/Orcamento';
import Custo from './src/pages/custo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Resultados" component={Resultados} />
        <Stack.Screen name="CalcDetalhado" component={CalcDetalhado} />
        <Stack.Screen name="PagRetorno" component={PagRetorno} />
        <Stack.Screen name="Custo" component={Custo} />
     <Stack.Screen name="Orçamento" component={Orçamento} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
