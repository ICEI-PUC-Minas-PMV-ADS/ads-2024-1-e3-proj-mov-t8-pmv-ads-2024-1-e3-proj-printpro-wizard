import React from "react";
import { View, Image, Text } from 'react-native';

import Footer from './Footer'

const Orcamento = () => {
  return (

    <View style= {{flex:1, alignItems:'center'}}> 
    
      <Text>Orçamento</Text>
      
      <Footer/> 
    
    
    </View>

  );

}

export default Orcamento;