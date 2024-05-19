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
        navigation.navigate('Orçamento');  
    };

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={goToResultsPage}>
                <Image source={require("./icons8-dinheiro-50.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCalcDetailPage}>
                <Image source={require("./icons8-dinheiro-50.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProductionCostPage}>
                <Image source={require("./icons8-dinheiro-50.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToInvestmentReturnPage}>
                <Image source={require("./icons8-dinheiro-50.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProfilePage}>
                <Image source={require("./icons8-dinheiro-50.png")}/>
            </TouchableOpacity>
        </View>
    );
}
