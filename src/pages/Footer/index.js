import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';

export default function Footer(props) {
    const { active } = props;

    const resultIcon = active ? require('./icons8-dolar-64(1).png') : require('./icons8-dolar-64.png');
    const calcDetailIcon = active ? require('./icons8-documento-50(1).png') : require('./icons8-documento-50.png');
    const productionCostIcon = active ? require('./icons8-retorno-populacional-50(1).png') : require('./icons8-retorno-populacional-50.png');
    const investimentReturnIcon = active ? require('./icons8-dinheiro-50(1).png') : require('./icons8-dinheiro-50.png');
    const profile = active ? require('./icons8-usuario-de-genero-neutro-50(1).png') : require('./icons8-usuario-de-genero-neutro-50.png');

    return (
        <View style={styles.footerContainer}>
            <Image source={resultIcon}/>
            <Image source={calcDetailIcon}/>
            <Image source={productionCostIcon}/>
            <Image source={investimentReturnIcon}/>
            <Image source={profile}/>
        </View>
    );
}
