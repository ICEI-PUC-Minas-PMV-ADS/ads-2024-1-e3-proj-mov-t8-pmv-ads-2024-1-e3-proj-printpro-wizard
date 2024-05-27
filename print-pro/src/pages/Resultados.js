import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import Footer from './Footer/index';
import { useRoute } from '@react-navigation/native';

const Resultados = () => {
  const route = useRoute();
  const totalCost = route.params?.totalCost || 0;

  const [percentage, setPercentage] = useState('');
  const [finalValue, setFinalValue] = useState(totalCost);

  const handleCalculateFinalValue = () => {
    const percentageValue = parseFloat(percentage) || 0;
    const addedValue = (percentageValue / 100) * totalCost;
    setFinalValue(totalCost + addedValue);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Resultados</Text>
        
        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Valor de Produção</Text>
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>R$ {totalCost.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Porcentagem a adicionar</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={percentage}
            onChangeText={setPercentage}
          />
        </View>

        <Button title="Calcular Valor Final" onPress={handleCalculateFinalValue} />

        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Valor Final</Text>
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>R$ {finalValue.toFixed(2)}</Text>
          </View>
        </View>
        
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#487082',
    padding: 40,
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
    marginBottom: 20,
    alignItems: 'center',
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5 
  },
  resultBox: {
    width: '50%',
    padding: 15,
    backgroundColor: '#487082',
    borderColor: '#487082',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: '#88ABBB',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Resultados;
