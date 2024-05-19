import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function Login() {

    const [email, onChangeEmail] = useState("")
    const [Password, onChangePassword] = useState("")

    return(
        <ScrollView styles={styles.container}>
            <Text>LOGIN</Text>

            <Text>Email</Text>
            <TextInput keyboardType="default" onChangeText={onChangeEmail} value={email} styles={styles.input}/>

            <Text style={styles.text}>Senha</Text>
            <TextInput keyboardType="default" onChangeText={onChangePassword} value={Password} styles={styles.input} />

            <Text>Esqueci a senha</Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

    input: {
        width: '90%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

      text: {
        fontSize: 20,
      },
})