import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {app, auth, db, collection, addDoc, doc, setDoc, getDoc, query, where} from "../services/fireBaseConfig";
import Footer from './Footer/index';

export default function Custo() {

  const [resource, setResource] = useState('')
  const [calResource, setCalResource] = useState('')

  const [energy, setEnergy] = useState('')

  const [maintenance, setMaintenance] = useState('')
  const [calMaintenance, setCalMaintenance] = useState('')

  const [fails, setFails] = useState('')
  const [calFails, setCalFails] = useState('')

  const [finishing, setFinishing] = useState('')
  const [calFinishing, setCalFinishing] = useState('')

  const [fixation, setFixation] = useState('')

  const [text, setText] = useState('')

  async function addResults() {
    let day = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()
    let hours = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let date = `${year}/${month}/${day} - ${hours}:${min}:${sec}`

    try {
      await setDoc(doc(db, "costResults", `${date}`), {
        energy: energy,
        maintenance: calMaintenance,
        fails: calFails,
        finishing: calFinishing,
        fixation: fixation,
      });
      setText("Valor adicionado! Vá para aba Resultados!")
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  function Calcular() {

    const resourceValue = parseFloat(resource) || 0
    const energyValue = parseFloat(energy) || 0
    const maintenanceValue = parseFloat(maintenance) || 0
    const failsValue = parseFloat(fails) || 0
    const finishingValue = parseFloat(finishing) || 0 
    const fixationValue = parseFloat(fixation) || 0

    setCalResource((resourceValue / 1000) * 120);
    console.log(calResource)

    setCalMaintenance(maintenanceValue * 0.15);
    console.log(calMaintenance)

    setCalFails(failsValue * 0.1);
    console.log(calFails)

    setCalFinishing(finishingValue * 0.15);
    console.log(calFinishing)

    addResults()
  }
  
  return (
    <View style={styles.container}>

    <Text style={styles.headerText}>Resultados</Text>

      <View style={styles.textContainer}>

        <Text style={styles.text}>Custo Material</Text> 
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setResource(text)} 
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo Energia</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setEnergy(text)} value={energy} 
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo Manutenção</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setMaintenance(text)} value={maintenance} 
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo de Falhas</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setFails(text)} value={fails} 
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo de Acabamento</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setFinishing(text)} value={finishing} 
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo de Fixação (spray)</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setFixation(text)} value={fixation} 
        inputMode="numeric" maxLength={20}/>
        
        <Text style={styles.red}>{text}</Text>

        <TouchableOpacity onPress={Calcular}>
          <Text style={styles.textButton}>CALCULAR CUSTOS</Text>
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
  textContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 25
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5 
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    backgroundColor: '#88ABBB',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    backgroundColor: '#88ABBB',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  red: {
    color: "red",
  },
});