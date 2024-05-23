import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Footer from './Footer/index';

export default function Custo() {

  const [resource, setResource] = React.useState();
  const [energy, setEnergy] = React.useState();
  const [maintenance, setMaintenance] = React.useState();
  const [fails, setFails] = React.useState();
  const [finishing, setFinishing] = React.useState();
  const [fixation, setFixation] = React.useState();
  
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>

        <Text style={styles.text}>Custo Material</Text>
        <TextInput keyboardType="numeric" onChangeText={setResource} value={resource} style={styles.input}/>

        <Text style={styles.text}>Custo Energia</Text>
        <TextInput keyboardType="numeric" onChangeText={setEnergy} value={energy} style={styles.input}/>

        <Text style={styles.text}>Custo Manutenção</Text>
        <TextInput keyboardType="numeric" onChangeText={setMaintenance} value={maintenance} style={styles.input}/>

        <Text style={styles.text}>Custo de Falhas</Text>
        <TextInput keyboardType="numeric" onChangeText={setFails} value={fails} style={styles.input}/>

        <Text style={styles.text}>Custo de Acabamento</Text>
        <TextInput keyboardType="numeric" onChangeText={setFinishing} value={finishing} style={styles.input}/>

        <Text style={styles.text}>Custo de Fixação (spray)</Text>
        <TextInput keyboardType="numeric" onChangeText={setFixation} value={fixation} style={styles.input}/>
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

});