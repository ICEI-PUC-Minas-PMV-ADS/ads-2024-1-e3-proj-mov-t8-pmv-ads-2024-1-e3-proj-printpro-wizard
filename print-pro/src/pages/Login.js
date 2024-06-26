import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { app, auth, db, doc, getDoc } from "../services/fireBaseConfig";

export default function Login() {  
    const navigation = useNavigation();

    const handleCadastroNavigation = () => {
        navigation.navigate('Cadastro');
    };

    const handleResetPassword = () => {
        navigation.navigate('EsqueciSenha');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');

    async function handleLogin() {
        try {

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User signed in successfully:', user);

            navigation.navigate('Resultados');
        } catch (error) {

            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setText("Email ou senha incorreto!");
            } else {
                setText("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
            }
            console.error('Login error:', error);
        }
    }
    

    return (
        <View style={styles.all}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>LOGIN</Text>
            </View>

            <View style={styles.containerInput}>

                <View style={styles.containerForm}>
                    <Text style={styles.textInput}>EMAIL</Text>
                    <TextInput style={styles.labelInput} keyboardType="default" 
                    onChangeText={text => setEmail(text)} value={email}  />

                    <Text style={styles.textInput}>SENHA</Text>
                    <TextInput style={styles.labelInput} keyboardType="default" 
                    onChangeText={text => setPassword(text)} value={password}
                    secureTextEntry={true} />
                        
                    <Text style={styles.messageError}>{text}</Text>

                    <TouchableOpacity onPress={handleResetPassword}>
                        <Text style={styles.textEsqueci}>ESQUECI MINHA SENHA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cadastreLabel}>
                    <Text style={styles.textCadastro}>Ainda não tem uma conta?</Text>
                    <TouchableOpacity onPress={handleCadastroNavigation}>
                        <Text style={styles.textCadastroClick}>CADASTRE-SE AQUI</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        width: "auto",
        height:'auto',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b4c1d9",
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop: 60,
        backgroundColor: "#b4c1d9",
    },

    titleText: {
        color: "black",
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: 4,
    },

    containerInput: {
        width: "90%",
        height: "70%",
        justifyContent:'center',
        bottom: 0,
        backgroundColor: "white",
        borderRadius: 15,
    },
    containerForm: {
        marginTop: 25,
        paddingLeft: 80,
        paddingRight: 80,
    },
    textInput: {
        fontSize: 15,
        alignItems: 'flex-start',
        fontWeight: "bold",
        paddingLeft: 5,
        paddingBottom: 5,
    },
    labelInput: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#ededed",
        alignItems:'flex-start',
        borderRadius: 5,
        borderWidth: 2,
    },
    textEsqueci: {
        fontWeight: "bold",
        fontSize: 12,
        letterSpacing: 1,
        margin: 20,
        textDecorationLine: "underline",
    },
    button: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#009688',
        paddingTop: 14,
        paddingBottom: 14,
    },
    buttonText: {
        fontSize: 20,
        color: "#ffffff",
    },
    cadastreLabel: {
        alignItems: "center",
        padding: 5,
    },
    textCadastro: {
        fontWeight: "bold",
        fontSize: 12,
        letterSpacing: 1,
    },
    textCadastroClick: {
        fontWeight: "bold",
        fontSize: 12,
        letterSpacing: 1,
        textDecorationLine: "underline",
    },
    messageError: {
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        margin: "auto",
        marginTop: 10
    }
});
