import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {

    const [email, onChangeEmail] = useState("")
    const [Password, onChangePassword] = useState("")

    return(
        <View style={styles.all}>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>LOGIN</Text>
            </View>

            <View style={styles.containerInput}>
                <View style={styles.containerForm}>
                    <Text style={styles.textInput}>EMAIL</Text>
                    <TextInput style={styles.labelInput} keyboardType="default" onChangeText={onChangeEmail} value={email} styles={styles.input}/>

                    <Text style={styles.textInput}>SENHA</Text>
                    <TextInput style={styles.labelInput} keyboardType="default" onChangeText={onChangePassword} value={Password} styles={styles.input} />

                    <Text style={styles.textEsqueci}>ESQUECI MINHA SENHA</Text>
                    
                    <TouchableOpacity style={styles.button} onPress={"hi"}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cadastreLabel}>
                    <Text style={styles.textCadastro}>Ainda não tem uma conta?</Text>
                    <TouchableOpacity >
                        <Text style={styles.textCadastroClick}>CADASTRE-SE AQUI</Text>
                    </TouchableOpacity>
                </View>    
                

            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    all: {
        width: "100%",
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
        letterSpacing: 4
    },

    containerInput: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        bottom: 0,
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    containerForm: {
        width: "100%",
        height: "auto",
        marginTop: 25,
        padding: 10,
    },
    textInput: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingBottom: 5,
        letterSpacing: 2,
    },
    labelInput: {
        width: "100%",
        paddingLeft: 20,
        backgroundColor: "#ededed",
        borderRadius: 50,
        borderWidth: 2
    },
    textEsqueci: {
        fontWeight: "bold",
        fontSize: 12,
        letterSpacing: 1,
        margin: 20,
        textDecorationLine: "underline",
    },
    button: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#000000",
        paddingTop: 14,
        paddingBottom: 14,
    },
    buttonText: {
        fontSize: 20,
        color: "#ffffff"
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
})