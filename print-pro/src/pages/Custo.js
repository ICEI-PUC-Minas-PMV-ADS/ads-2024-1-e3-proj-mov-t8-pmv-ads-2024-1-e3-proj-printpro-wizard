import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Footer from './Footer/index';

export default function Custo() {

  const [resource, setResource] = useState()
  const [calResource, setCalResource] = useState()

  const [energy, setEnergy] = useState()

  const [maintenance, setMaintenance] = useState()
  const [calMaintenance, setCalMaintenance] = useState()

  const [fails, setFails] = useState()
  const [calFails, setCalFails] = useState()

  const [finishing, setFinishing] = useState()
  const [calFinishing, setCalFinishing] = useState()

  const [fixation, setFixation] = useState()

  const [text, setText] = useState()

  function Calcular() {

    const resourceValue = parseFloat(resource)
    const maintenanceValue = parseFloat(maintenance)
    const failsValue = parseFloat(fails)
    const finishingValue = parseFloat(finishing)

    if (!isNaN(resourceValue) ) {
      setCalResource((resourceValue / 1000) * 120);
      console.log(calResource)
    } 

    if (!isNaN(maintenanceValue) ) {
      setCalMaintenance(maintenanceValue * 0,15);
      console.log(calMaintenance)
    } 
  
    if (!isNaN(failsValue) ) {
      setCalFails(failsValue * 0,1);
      console.log(calFails)
    } 
  
    if (!isNaN(finishingValue) ) {
      setCalFinishing(finishingValue * 0,15);
      console.log(calFinishing)
    } 

    setText("Valor adicionado! Vá para aba Resultados!")
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>

        <Text style={styles.text}>Custo Material</Text> 
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setResource(text)} 
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo Energia</Text>
        <TextInput keyboardType="numeric" onChangeText={text => setEnergy(text)} value={energy} style={styles.input}
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo Manutenção</Text>
        <TextInput keyboardType="numeric" onChangeText={text => setMaintenance(text)} value={maintenance} style={styles.input}
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo de Falhas</Text>
        <TextInput keyboardType="numeric" onChangeText={text => setFails(text)} value={fails} style={styles.input}
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo de Acabamento</Text>
        <TextInput keyboardType="numeric" onChangeText={text => setFinishing(text)} value={finishing} style={styles.input}
        inputMode="numeric" maxLength={20}/>

        <Text style={styles.text}>Custo de Fixação (spray)</Text>
        <TextInput keyboardType="numeric" onChangeText={text => setFixation(text)} value={fixation} style={styles.input}
        inputMode="numeric" maxLength={20}/>
        
        <Text style={styles.red}>{text}</Text>

        <TouchableOpacity onPress={Calcular}>
          <Text style={styles.textCadastroClick}>CALCULAR CUSTOS</Text>
        </TouchableOpacity>
      </View>

      {/* <Footer /> */}

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
    marginTop: 25
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
  },
  red: {
    color: "red",
  },
});