import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { app, auth, db, collection, addDoc, doc, setDoc, getDoc, query, where } from "../services/fireBaseConfig";
import Footer from './Footer/index';

export default function Custo() {
  const navigation = useNavigation();

  const [resource, setResource] = useState('');
  const [energy, setEnergy] = useState('');
  const [maintenance, setMaintenance] = useState('');
  const [fails, setFails] = useState('');
  const [finishing, setFinishing] = useState('');
  const [fixation, setFixation] = useState('');
  const [text, setText] = useState('');

  async function addResults() {
    const resourceValue = parseFloat(resource) || 0;
    const maintenanceValue = parseFloat(maintenance) || 0;
    const failsValue = parseFloat(fails) || 0;
    const finishingValue = parseFloat(finishing) || 0;
    const fixationValue = parseFloat(fixation) || 0;
    const energyValue = parseFloat(energy) || 0;

    // Realiza os cálculos necessários
    const calResource = (resourceValue / 1000) * 120;
    const calMaintenance = maintenanceValue * 0.15;
    const calFails = failsValue * 0.1;
    const calFinishing = finishingValue * 0.15;

    try {
      await setDoc(doc(db, "costResults", `${new Date().toISOString()}`), {
        energy: energyValue,
        maintenance: calMaintenance,
        fails: calFails,
        finishing: calFinishing,
        fixation: fixationValue,
      });

      setText("Valor adicionado! Vá para aba Resultados!");

      // Navega para Resultados.js com os parâmetros calculados
      navigation.navigate('Resultados', {
        totalCost: calResource + energyValue + calMaintenance + calFails + calFinishing + fixationValue,
      });

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  // Função para formatar números com vírgula
  const formatNumber = (value) => {
    return value.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Custo Material</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setResource(text)}
          value={resource}
          inputMode="numeric"
          maxLength={20}
          textAlign="center" // Centraliza o texto
        />

        <Text style={styles.text}>Custo Energia</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setEnergy(text)}
          value={energy}
          inputMode="numeric"
          maxLength={20}
          textAlign="center" // Centraliza o texto
        />

        <Text style={styles.text}>Custo Manutenção</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setMaintenance(text)}
          value={maintenance}
          inputMode="numeric"
          maxLength={20}
          textAlign="center" // Centraliza o texto
        />

        <Text style={styles.text}>Custo de Falhas</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setFails(text)}
          value={fails}
          inputMode="numeric"
          maxLength={20}
          textAlign="center" // Centraliza o texto
        />

        <Text style={styles.text}>Custo de Acabamento</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setFinishing(text)}
          value={finishing}
          inputMode="numeric"
          maxLength={20}
          textAlign="center" // Centraliza o texto
        />

        <Text style={styles.text}>Custo de Fixação (spray)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setFixation(text)}
          value={fixation}
          inputMode="numeric"
          maxLength={20}
          textAlign="center" // Centraliza o texto
        />

        <Text style={styles.red}>{text}</Text>

        <TouchableOpacity onPress={addResults}>
          <Text style={styles.textCadastroClick}>CALCULAR CUSTOS</Text>
        </TouchableOpacity>
      </View>

      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 25,
  },
  text: {
    fontSize: 20,
  },
  input: {
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
  red: {
    color: "red",
  },
  textCadastroClick: {
    fontSize: 18,
    color: 'blue',
  },
  // Estilos adicionados para igualar ao Resultados.js
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
