import React from "react";
import { View, Image } from 'react-native';
import styles from "./style";

export default function Footer() {

    const resultIcon = this.props.active ? require ("./icons8-dolar-64 (1).png") :  require("./icons8-dolar-64.png")
    const calcDetailIcon = this.props.active ? require("./icons8-documento-50 (1).png") : require("./icons8-documento-50.png")
    const productionCostIcon = this.props.active ? require("./icons8-retorno-populacional-50 (1).png") : require("./icons8-retorno-populacional-50.png")
    const investimentReturnIcon = this.props.active ? require("./icons8-dinheiro-50 (1).png") : require("./icons8-dinheiro-50.png")
    const profile = this.props.active ? require("./icons8-usuário-de-gênero-neutro-50 (1).png") : require("./icons8-usuário-de-gênero-neutro-50.png")
    return(
        <View style={styles.footerContainer}>
            <Image source={resultIcon}/>
            <Image source={calcDetailIcon}/>
            <Image source={productionCostIcon}/>
            <Image source={investimentReturnIcon}/>
            <Image source={profile}/>
        </View>
    )
}