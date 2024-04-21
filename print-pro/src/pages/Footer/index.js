import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function Footer(props) {
    const { active } = props;
    const navigation = useNavigation();

    const goToResultsPage = () => {
        navigation.navigate('Resultados');
    };

    const goToCalcDetailPage = () => {
        navigation.navigate('CalcDetalhado')
    };

    const goToProductionCostPage = () => {
        navigation.navigate('Custo')
    };

    const goToInvestmentReturnPage = () => {
        navigation.navigate('PagRetorno')
    };

    const goToProfilePage = () => {
         
    };

    const resultIcon = active ? require('./icons8-dolar-64(1).png') : require('./icons8-dolar-64.png');
    const calcDetailIcon = active ? require('./icons8-documento-50(1).png') : require('./icons8-documento-50.png');
    const productionCostIcon = active ? require('./icons8-retorno-populacional-50(1).png') : require('./icons8-retorno-populacional-50.png');
    const investmentReturnIcon = active ? require('./icons8-dinheiro-50(1).png') : require('./icons8-dinheiro-50.png');
    const profileIcon = active ? require('./icons8-usuario-de-genero-neutro-50(1).png') : require('./icons8-usuario-de-genero-neutro-50.png');

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={goToResultsPage}>
                <Image source={resultIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCalcDetailPage}>
                <Image source={calcDetailIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProductionCostPage}>
                <Image source={productionCostIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToInvestmentReturnPage}>
                <Image source={investmentReturnIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProfilePage}>
                <Image source={profileIcon}/>
            </TouchableOpacity>
        </View>
    );
}
