import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import Footer from './Footer/index';

const Orçamento = () => {
  const [showModal, setShowModal] = useState(false);
  const [horas, setHoras] = useState('00');
  const [minutos, setMinutos] = useState('00');
  const [pesoEstimado, setPesoEstimado] = useState('');

  const horasArray = Array.from({ length: 24 }, (_, i) => ('0' + i).slice(-2));
  const minutosArray = Array.from({ length: 60 }, (_, i) => ('0' + i).slice(-2));

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleHoraSelect = (hora) => {
    setHoras(hora);
    toggleModal();
  };

  const handleMinutoSelect = (minuto) => {
    setMinutos(minuto);
    toggleModal();
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Orçamento</Text>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tempo estimado:</Text>
          <TouchableOpacity style={styles.timeButton} onPress={toggleModal}>
            <Text>{horas}:{minutos}</Text>
          </TouchableOpacity>
          <Modal
            visible={showModal}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <FlatList
                  data={horasArray}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleHoraSelect(item)}>
                      <Text style={styles.modalItem}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                  ListHeaderComponent={<Text style={styles.modalHeader}>Horas</Text>}
                />
                <FlatList
                  data={minutosArray}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleMinutoSelect(item)}>
                      <Text style={styles.modalItem}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                  ListHeaderComponent={<Text style={styles.modalHeader}>Minutos</Text>}
                />
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Peso estimado (g):</Text>
          <TextInput
            style={styles.input}
            value={pesoEstimado}
            onChangeText={setPesoEstimado}
            placeholder="Peso estimado"
            keyboardType="numeric"
          />
        </View>
      </View>
      <Footer/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#487082',
    marginTop: 20,
    padding: 20,
    width: '100%',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: -1, height: 1},
    textShadowRadius: 5
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    marginRight: 10,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#88ABBB',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    width: 150,
  },
});

export default Orçamento;
