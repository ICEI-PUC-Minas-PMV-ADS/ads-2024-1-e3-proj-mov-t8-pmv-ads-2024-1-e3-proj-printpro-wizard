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

/* Custo do Material: Valor do material / 1000 * peso estimado(g) 
exemplo: (150/1000) * 120 = $ 18,00 */

/* Custo de Energia: Definido pelo usuário */

/* Custo de Manutenção: custo do material * 0,15 
exemplo: 18 * 0,15 = $2,70 */

/* Custo de Falhas: custo de material * media de falhas
exemplo 18 * 0,1 = $1,8 */

/* Custo do Acabamento (15%): custo de material * 15%
exemplo 18 * 0,15 = $2,70 */

/* Custo de Fixação (spray): Definido pelo usuário */
  
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