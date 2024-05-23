import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Footer from './Footer/index';

const CalcDetalhado = () => {

  const [resource, onChangeResource] = React.useState('');
  const [energy, onChangeEnergy] = React.useState('');
  const [maintenance, onChangeMaintenance] = React.useState('');
  const [fails, onChangeFails] = React.useState('');
  const [finishing, onChangeFinishing] = React.useState('');
  const [fixation, onChangeFixation] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Tipo Do Filamento</Text>
        <TextInput keyboardType="default" onChangeText={onChangeResource} value={resource} style={styles.input}/>

        <Text style={styles.text}>Valor do Kg</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeEnergy} value={energy} style={styles.input}/>

        <Text style={styles.text}>Preço por kWh</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeMaintenance} value={maintenance} style={styles.input}/>

        <Text style={styles.text}>Consumo da Impressora</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeFails} value={fails} style={styles.input}/>

        <Text style={styles.text}>Depreciação por Hora</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeFinishing} value={finishing} style={styles.input}/>

        <Text style={styles.text}>Média de falhas</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeFixation} value={fixation} style={styles.input}/>

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
    backgroundColor: "#88abbb",
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    textAlign: "center"
  },

});

export default CalcDetalhado;