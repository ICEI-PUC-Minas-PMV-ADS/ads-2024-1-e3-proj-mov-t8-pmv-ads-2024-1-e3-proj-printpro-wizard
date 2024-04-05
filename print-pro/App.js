import React from 'react';
import { View } from 'react-native';
import Footer from './src/pages/Footer/index';
import PagRetorno from './src/pages/PagRetorno';
import CalcDetalhado from './src/pages/CalcDetalhado';
import Orcamento from './src/pages/Orcamento';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CalcDetalhado/>
    </View>
  );
}