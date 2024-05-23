import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const PagRetorno = () => {
  const results = [
    { label: "Investmento A", value: calculateInvestmentA() },
    { label: "Investmento B", value: calculateInvestmentB() },
    { label: "Investmento C", value: calculateInvestmentC() },
    { label: "Investmento D", value: calculateInvestmentD() },
    { label: "Investmento E", value: calculateInvestmentE() },
  ];

  return (
    <View style={styles.container}> 
      <Text style={styles.headerText}>Retorno de Investimento</Text>
      {results.map((result, index) => (
        <View key={index} style={styles.boxContainer}>
          <Text style={styles.labelText}>{result.label}</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{result.value}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const calculateInvestmentA = () => 400 * 0.15;
const calculateInvestmentB = () => 200 * 0.25;
const calculateInvestmentC = () => 300 * 1.1;
const calculateInvestmentD = () => 400 * 1.5;
const calculateInvestmentE = () => 500 / 2.0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#487082',
    padding: 20,
    width: '100%',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0, 0.75)',
    textShadowOffset: { width: -1, height: 1},
    textShadowRadius: 5,
    marginBottom: 20
  },
  boxContainer: {
    width: '90%',
    marginBottom: 20, // Adds space between the label and next box container
    alignItems: 'center'
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5 // Adds space between label and box
  },
  box: {
    width: '100%',
    padding: 10,
    backgroundColor: '#88ABBB',
    borderColor: '#88ABBB',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center'
  },
  boxText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default PagRetorno;
