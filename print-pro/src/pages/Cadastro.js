import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {app, auth, db, collection, addDoc, doc, setDoc, getDoc, query, where} from "../services/fireBaseConfig";


export default function Cadastro() {

  const navigation = useNavigation();

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };
  
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [text, setText] = useState("")
  const [name ,setName] = useState();


  async function handleCadastro() {
    const emailValue = email.slice(email.indexOf("@") + 1)

    const emailRef = doc(db, "emails", email);
    const emailSnap = await getDoc(emailRef);
    
    if (emailSnap.exists()) {
      setText("Este email já esta cadastrado")
      return
    }

    const emailDomainRef = doc(db, "emailDomain",emailValue)
    const emailDomianSnap = await getDoc(emailDomainRef)

    if (emailDomianSnap.exists()) {
      {}
    } else {
      setText("Digite um email válido!")
      return
    }

    async function addEmail() {
      await setDoc(doc(db, "emails", email), {
        name: name,
        email: email,
      });
    }

    if (password !== password2) {
      setText("As senhas devem ser iguais!")
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        addEmail();
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        Cadastro
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha novamente"
        secureTextEntry={true}
        value={password2}
        onChangeText={text => setPassword2(text)}
        />

      <Text style={styles.red}>{text}</Text>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToLogin}>
        <Text style={styles.backButtonText}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#009688',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    marginTop: 7,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#333', // Dark grey color
    textAlign: 'center',
    fontSize: 14,
  },
  Text:{
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 4,
    padding: 30,
  },
  red: {
    color: "red",
  },
})
