import React from "react";
import { useState } from "react";
import { View, Text, TextInput } from 'react-native';

export default function productionCost() {
    const [material, setMaterial] = useState(null)
    const [energia, setEnergia] = useState(null)
    const [Manutencao, setManutencao] = useState(null)
    const [falhas, setFalhas] = useState(null)
    const [Acabamento, setAcabamanento] = useState(null)
    const [fixação, setFixação] = useState(null)

    


    return(
        <View>
            
            <View>
                <Text>CUSTO DE PRODUÇÃO</Text>
            </View>

            <View>
                <Text>Custo Material</Text>
                <TextInput placeholder="EX. 30.99" keyboardType="numeric" maxLength={6}/>

                <Text>Custo Energia</Text>
                <TextInput placeholder="EX. 30.99" keyboardType="numeric" maxLength={6}/>

                <Text>Custo de Manutenção</Text>
                <TextInput placeholder="EX. 30.99" keyboardType="numeric" maxLength={6}/>

                <Text>Custo de Falhas</Text>
                <TextInput placeholder="EX. 30.99" keyboardType="numeric" maxLength={6}/>

                <Text>Custo de Acabamento</Text>
                <TextInput placeholder="EX. 30.99" keyboardType="numeric" maxLength={6}/>

                <Text>Custo de Fixação</Text>
                <TextInput placeholder="EX. 30.99" keyboardType="numeric" maxLength={6}/>
            </View>

        </View>
    )
}