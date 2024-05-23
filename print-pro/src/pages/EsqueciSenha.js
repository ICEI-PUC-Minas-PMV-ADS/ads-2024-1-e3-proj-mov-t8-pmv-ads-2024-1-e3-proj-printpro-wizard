import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function EsqueciSenha() {
    return(
        <View>
            <Text>Digite o email cadastrado</Text>
            <TextInput style={styles.labelInput} keyboardType="default" onChangeText={text => setEmail(text)} value={email}  />
        </View>
    )
}