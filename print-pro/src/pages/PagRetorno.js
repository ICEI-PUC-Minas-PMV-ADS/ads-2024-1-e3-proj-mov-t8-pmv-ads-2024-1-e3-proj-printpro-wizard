import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import Footer from './Footer/index';
import { useNavigation } from '@react-navigation/native';
import { db, setDoc, doc } from '../services/fireBaseConfig'; 

const PagRetorno = () => {
  const [investmentA, setInvestmentA] = useState("");
  const [investmentB, setInvestmentB] = useState("");
  const [investmentC, setInvestmentC] = useState("");
  const [investmentD, setInvestmentD] = useState("");
  const navigation = useNavigation();

  const calculateResult = async () => {
    const a = parseFloat(investmentA) || 0;
    const b = parseFloat(investmentB) || 0;
    const c = parseFloat(investmentC) || 0;
    const d = parseFloat(investmentD) || 0;
    const calculatedResult = (a / (b * c * d)).toFixed(2);


    try {
      await setDoc(doc(db, "roiResults", "latestResult"), {
        roi: calculatedResult,
      });
      console.log("ROI result saved successfully");
      navigation.navigate('Resultados', { roiResult: calculatedResult });
    } catch (error) {
      console.error("Error saving ROI result: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Retorno de Investimento</Text>
        
        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Valor da maquina</Text>
          <TextInput
            style={styles.input}
            value={investmentA}
            onChangeText={setInvestmentA}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Horas por dia</Text>
          <TextInput
            style={styles.input}
            value={investmentB}
            onChangeText={setInvestmentB}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Dias por mês</Text>
          <TextInput
            style={styles.input}
            value={investmentC}
            onChangeText={setInvestmentC}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.boxContainer}>
          <Text style={styles.labelText}>Tempo desejado (mês)</Text>
          <TextInput
            style={styles.input}
            value={investmentD}
            onChangeText={setInvestmentD}
            keyboardType="numeric"
          />
        </View>
        
        <Button title="Resultado" onPress={calculateResult} color='#88ABBB'/>
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
  input: {
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: '#88ABBB',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
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
});

export default PagRetorno;