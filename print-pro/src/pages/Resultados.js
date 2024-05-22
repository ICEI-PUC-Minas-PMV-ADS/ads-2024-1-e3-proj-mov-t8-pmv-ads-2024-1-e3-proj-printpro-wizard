import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer/index';

const Resultados = () => {
  return (
    <View style={styles.container}> 
      
      <Text style={styles.text}>Resultados</Text>      
      <Footer/>

    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
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
  }
});

export default Resultados;