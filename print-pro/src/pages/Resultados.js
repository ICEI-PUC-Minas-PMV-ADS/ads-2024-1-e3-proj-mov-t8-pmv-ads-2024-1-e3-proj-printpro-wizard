import React from "react";
import { View, Text } from 'react-native';

import Footer from './Footer'

const Resultados = () => {
  return (

    <View style= {{flex:1, alignItems:'center', justifyContent:'top', 
        }}>       
      
      <Text style= {{fontSize: 'Large', fontWeight: 'Bold',}}>Resultados</Text>
      
      <Footer/> 
    
    
    </View>

  );

}

export default Resultados;