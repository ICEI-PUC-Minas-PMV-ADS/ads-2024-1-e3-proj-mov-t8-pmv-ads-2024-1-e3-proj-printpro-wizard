## Programação de Funcionalidades

## Introdução
O documento de Programação de Funcionalidades detalha as funcionalidades implementadas na aplicação "print-pro", incluindo a descrição de cada funcionalidade, o código-fonte relevante e as explicações dos módulos. Este documento serve como guia para desenvolvedores e facilita a manutenção e futuras expansões do sistema.

## Estrutura do Código
A aplicação "print-pro" é desenvolvida utilizando React Native e Expo Go. A estrutura do código segue uma arquitetura modular, dividida em componentes reutilizáveis e serviços.

## Funcionalidades Principais

1. **Cálculo de Custos**
   - **Descrição**: Esta funcionalidade permite aos usuários calcular os custos de impressão com base em diferentes parâmetros como tipo de papel, quantidade, cores, etc.
   - **Código-Fonte**:
     ```javascript
     import React, { useState } from 'react';
     import { View, Text, TextInput, Button } from 'react-native';

     const CalculoDeCustos = () => {
       const [tipoPapel, setTipoPapel] = useState('');
       const [quantidade, setQuantidade] = useState('');
       const [cores, setCores] = useState('');
       const [custo, setCusto] = useState(null);

       const calcularCusto = () => {
         // Lógica para cálculo de custo
         const custoCalculado = (tipoPapel * quantidade * cores) * 0.1; // Exemplo de cálculo
         setCusto(custoCalculado);
       };

       return (
         <View>
           <Text>Tipo de Papel:</Text>
           <TextInput value={tipoPapel} onChangeText={setTipoPapel} />
           <Text>Quantidade:</Text>
           <TextInput value={quantidade} onChangeText={setQuantidade} />
           <Text>Cores:</Text>
           <TextInput value={cores} onChangeText={setCores} />
           <Button title="Calcular" onPress={calcularCusto} />
           {custo !== null && <Text>Custo: {custo}</Text>}
         </View>
       );
     };

     export default CalculoDeCustos;
     ```
   - **Explicação**: Este componente React Native utiliza hooks para gerenciar o estado dos inputs e calcular o custo de impressão com base nos valores inseridos.

2. **Geração de Orçamento**
   - **Descrição**: Permite aos usuários gerar um orçamento detalhado para um pedido de impressão, incluindo todos os custos e impostos.
   - **Código-Fonte**:
     ```javascript
     import React, { useState } from 'react';
     import { View, Text, Button } from 'react-native';
     import { gerarOrcamento } from '../services/orcamentoService';

     const GeracaoDeOrcamento = () => {
       const [orcamento, setOrcamento] = useState(null);

       const handleGerarOrcamento = async () => {
         const novoOrcamento = await gerarOrcamento();
         setOrcamento(novoOrcamento);
       };

       return (
         <View>
           <Button title="Gerar Orçamento" onPress={handleGerarOrcamento} />
           {orcamento && (
             <View>
               <Text>Orçamento:</Text>
               <Text>{orcamento.total}</Text>
             </View>
           )}
         </View>
       );
     };

     export default GeracaoDeOrcamento;
     ```
   - **Explicação**: Este componente chama um serviço externo para gerar o orçamento e atualiza o estado da aplicação com o valor retornado.

3. **Cálculo de Retorno sobre Investimento (ROI)**
   - **Descrição**: Esta funcionalidade permite aos usuários calcular o retorno sobre o investimento para diferentes cenários de impressão.
   - **Código-Fonte**:
     ```javascript
     import React, { useState } from 'react';
     import { View, Text, TextInput, Button } from 'react-native';

     const CalculoDeROI = () => {
       const [investimento, setInvestimento] = useState('');
       const [retorno, setRetorno] = useState('');
       const [roi, setRoi] = useState(null);

       const calcularRoi = () => {
         const roiCalculado = (retorno - investimento) / investimento;
         setRoi(roiCalculado);
       };

       return (
         <View>
           <Text>Investimento:</Text>
           <TextInput value={investimento} onChangeText={setInvestimento} />
           <Text>Retorno:</Text>
           <TextInput value={retorno} onChangeText={setRetorno} />
           <Button title="Calcular ROI" onPress={calcularRoi} />
           {roi !== null && <Text>ROI: {roi}</Text>}
         </View>
       );
     };

     export default CalculoDeROI;
     ```
   - **Explicação**: Este componente permite ao usuário inserir valores de investimento e retorno, calculando e exibindo o ROI com base nesses valores.

## Conclusão
O documento de Programação de Funcionalidades detalha as principais funcionalidades implementadas na aplicação "print-pro". Cada componente é desenvolvido com foco na modularidade e reutilização, facilitando a manutenção e expansão futura do sistema. A utilização de Expo Go e React Native permite um desenvolvimento ágil e eficiente para plataformas móveis.
