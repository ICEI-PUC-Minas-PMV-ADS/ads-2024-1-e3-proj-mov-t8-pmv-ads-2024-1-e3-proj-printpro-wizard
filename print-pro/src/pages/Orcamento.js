import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer/index';


const Orcamento = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Orcamento</Text>
      <Text style={styles.time}>Tempo estimado: 9h 28m</Text>
      <Text style={styles.weight}>Peso estimado: 120g</Text>
      <View style={{marginTop:70}}>
        <Text style={styles.sale}>Valor de Venda</Text>
        <View style={styles.saleView}>
          <Text style={styles.sale}>R$ 85,53</Text>
        </View>
      </View>
      <Footer/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',

  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#ADD8E6',
    padding: 20,
    width: '100%',
    color: 'white',
    outline: 'black',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0, 0.75)',
    textShadowOffset: { width: -1, height: 1},
    textShadowRadius: 5
  },
  time: {
    paddingTop:200,
    fontSize:25
  },
  weight:{
    fontSize:25
  },
  sale:{
    fontSize:25,
    textAlign:"center"
  },
  saleView:{
    backgroundColor:'lightgreen',
    padding:10,
    paddingLeft:40,
    paddingRight:40,
    marginTop:5
  }
});

export default Orcamento;
