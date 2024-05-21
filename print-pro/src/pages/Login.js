import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, onChangeEmail] = useState("");
    const [Password, onChangePassword] = useState("");
    const navigation = useNavigation();

    const handleCadastroNavigation = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <View style={styles.all}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>LOGIN</Text>
            </View>

            <View style={styles.containerInput}>
                <View style={styles.containerForm}>
                    <Text style={styles.textInput}>EMAIL</Text>
                    <TextInput style={styles.labelInput} keyboardType="default" onChangeText={onChangeEmail} value={email} styles={styles.input} />

                    <Text style={styles.textInput}>SENHA</Text>
                    <TextInput style={styles.labelInput} keyboardType="default" onChangeText={onChangePassword} value={Password} styles={styles.input} secureTextEntry={true} />

                    <Text style={styles.textEsqueci}>ESQUECI MINHA SENHA</Text>

                    <TouchableOpacity style={styles.button} onPress={() => console.log("Login pressed")}>
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
        width: "60%",
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
        paddingLeft: 20,
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
});
