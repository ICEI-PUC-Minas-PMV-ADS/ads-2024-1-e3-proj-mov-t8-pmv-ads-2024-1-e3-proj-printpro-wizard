import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import Footer from './Footer/index';
import { useRoute } from '@react-navigation/native';

const Resultados = () => {
  const route = useRoute();
  const totalCost = route.params?.totalCost || 0;

  const [percentage, setPercentage] = useState('');
  const [finalValue, setFinalValue] = useState(totalCost);
  const [estimatedTime, setEstimatedTime] = useState('');
  const [estimatedWeight, setEstimatedWeight] = useState('');

  const handleCalculateFinalValue = () => {
    const percentageValue = parseFloat(percentage) || 0;
    const addedValue = (percentageValue / 100) * totalCost;
    let newValue = totalCost + addedValue;

    // Adicionar tempo estimado em horas
    const timeValue = parseFloat(estimatedTime) || 0;
    newValue += timeValue * 10; // Exemplo de cálculo baseado no tempo (aqui multiplicado por 10, pode ser ajustado conforme necessidade)

    // Adicionar peso estimado em gramas
    const weightValue = parseFloat(estimatedWeight) || 0;
    newValue += weightValue * 0.05; // Exemplo de cálculo baseado no peso (aqui multiplicado por 0.05, pode ser ajustado conforme necessidade)

    setFinalValue(newValue);
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

        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Tempo Estimado (horas)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={estimatedTime}
            onChangeText={setEstimatedTime}
          />
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Peso Estimado (gramas)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={estimatedWeight}
            onChangeText={setEstimatedWeight}
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
    color: 'white',
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
