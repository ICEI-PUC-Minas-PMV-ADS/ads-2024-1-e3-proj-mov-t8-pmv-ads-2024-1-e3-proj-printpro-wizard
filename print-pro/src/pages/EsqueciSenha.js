import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/fireBaseConfig";

export default function EsqueciSenha() {

    const navigation = useNavigation();

    const handleBackToLogin = () => {
        navigation.navigate('Login');
    };

    const [email, setEmail] = useState()
    const [text, setText] = useState()

    const handleResetPassword = () => {

        sendPasswordResetEmail(auth, email)
        .then(() => {
            setText("Email de recuperação enviado!")
            console.log("enviado")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            setText("Este email não esta cadastrado!")
        });
    }

    return(
        <View style={styles.container}>
            <Text>Digite o email cadastrado</Text>
            <TextInput
                style={styles.input}
                placeholder="Email Cadastrado"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <Text style={styles.red}>{text}</Text>

            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Recuperar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={handleBackToLogin}>
                <Text style={styles.backButtonText}>Voltar para Login</Text>
            </TouchableOpacity>
        </View>
    )
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
        marginTop: 8,
        marginBottom: 5,
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
        color: '#333',
        textAlign: 'center',
        fontSize: 14,
    },
    red: {
        color: "red",
    },
})