import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Custo = () => {

  const [resource, onChangeResource] = React.useState('');
  const [energy, onChangeEnergy] = React.useState('');
  const [maintenance, onChangeMaintenance] = React.useState('');
  const [fails, onChangeFails] = React.useState('');
  const [finishing, onChangeFinishing] = React.useState('');
  const [fixation, onChangeFixation] = React.useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Custo Material</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeResource} value={resource} style={styles.input}/>

        <Text style={styles.text}>Custo Energia</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeEnergy} value={energy} style={styles.input}/>

        <Text style={styles.text}>Custo Manutenção</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeMaintenance} value={maintenance} style={styles.input}/>

        <Text style={styles.text}>Custo de Falhas</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeFails} value={fails} style={styles.input}/>

        <Text style={styles.text}>Custo de Acabamento</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeFinishing} value={finishing} style={styles.input}/>

        <Text style={styles.text}>Custo de Fixação (spray)</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeFixation} value={fixation} style={styles.input}/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },

  textContainer: {
    width: "100%",
    height: "100%",
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

export default Custo;