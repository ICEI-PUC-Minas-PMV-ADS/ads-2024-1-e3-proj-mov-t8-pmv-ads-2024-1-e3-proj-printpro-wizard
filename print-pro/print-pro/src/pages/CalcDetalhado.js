import React from "react";
import { View, Image, Text } from 'react-native';

import Footer from './Footer'

const CalcDetalhado = () => {
  return (

    <View style= {{flex:1, alignItems:'center', justifyContent:'top'}}> 
    
      <Text style= {{fontSize: 'Large', fontWeight: 'Bold'}}>Calculo Detalhado</Text>
      
      <Footer/> 
    
    
    </View>

  );

}

export default CalcDetalhado;