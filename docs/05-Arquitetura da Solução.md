# Arquitetura da Solução

Especificação Técnica Completa
Introdução
A especificação técnica do projeto "print-pro" descreve os requisitos técnicos, a arquitetura do sistema, as tecnologias utilizadas e as integrações necessárias para o desenvolvimento da aplicação. Este documento serve como guia para os desenvolvedores e a equipe de infraestrutura, garantindo que todos os aspectos técnicos sejam considerados durante o desenvolvimento e a implantação do sistema.

*Requisitos Técnicos:*
#### Hardware 

* Dispositivos de Desenvolvimento: Computadores com no mínimo 8GB de RAM, processador quad-core, e 100GB de espaço em disco.
* Dispositivos de Teste: Smartphones e tablets com Android (versão 6.0 ou superior) e iOS (versão 11.0 ou superior).

#### Software:
* Sistema Operacional: Windows 10, macOS 10.15 ou superior, Linux (distribuições Ubuntu, Fedora, etc.).
* IDE/Editor de Código: Visual Studio Code, Android Studio.
* Versionamento de Código: Git e repositório GitHub.
* Ambiente de Desenvolvimento: Node.js (versão 14.x ou superior), npm (versão 6.x ou superior), Expo CLI (versão 4.x ou superior).

*Arquitetura do Sistema:*
* A aplicação "print-pro" utiliza uma arquitetura baseada em componentes para promover a modularidade e a reutilização do código. A arquitetura é dividida nas seguintes camadas:

*Camada de Apresentação:*  
* Implementada utilizando React Native para criação da interface do usuário, permitindo a execução em dispositivos móveis Android e iOS.

Camada de Negócio: 
*Contém a lógica de negócio da aplicação, implementada em JavaScript/TypeScript. Inclui serviços e controladores que gerenciam as operações principais da aplicação.

Camada de Dados: 
* Responsável pela interação com a base de dados e APIs externas, garantindo o armazenamento e a recuperação dos dados necessários para a aplicação.

### Tecnologias Utilizadas:
```
Frontend: React Native, Expo Go.
Backend: Node.js, Express.js.
Banco de Dados: Firebase Firestore para armazenamento de dados em tempo real.
Autenticação: Firebase Authentication.
Armazenamento de Arquivos: Firebase Storage.
CI/CD: GitHub Actions para integração contínua e deploy automático.
```

*Firestore:*
* Utilizado para armazenar dados de usuários, configurações de impressão e históricos de pedidos.

*Authenticação:*
* Gerenciamento de usuários e autenticação segura utilizando e-mail/senha, Google, Facebook, etc. Com a Firebase.

*Storage*
* Armazenamento de arquivos como imagens e documentos de impressão.

*Expo Go:*
* Facilita o desenvolvimento e teste da aplicação em dispositivos móveis sem a necessidade de configuração complexa de ambientes nativos.

*Componentes Específicos:*
* Os componentes específicos incluem páginas como Login, Cadastro, EsqueciSenha, Custo, Resultados, CalcDetalhado, PagRetorno, Orçamento e o componente Footer. Estes são integrados através de navegação utilizando o React Navigation.

*Exemplo do App:*
        
```javascript
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
         <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{headerShown: false}}/>
         <Stack.Screen name="Custo" component={Custo} options={{headerShown: false}}/>
         <Stack.Screen name="Resultados" component={Resultados} options={{headerShown: false}}/>
         <Stack.Screen name="CalcDetalhado" component={CalcDetalhado} options={{headerShown: false}}/>
         <Stack.Screen name="PagRetorno" component={PagRetorno} options={{headerShown: false}}/>
         <Stack.Screen name="Orçamento" component={Orçamento} options={{headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
}
```
*Hospedagem:*
* A hospedagem e o lançamento da plataforma são feitos utilizando Firebase Hosting para os serviços web e Firestore para a base de dados. O Expo Go facilita a distribuição e teste da aplicação em dispositivos móveis.

*Conclusão:*
* A arquitetura proposta permite uma implementação modular, escalável e fácil de manter da aplicação "print-pro", aproveitando tecnologias modernas e serviços em nuvem para oferecer uma experiência confiável aos usuários finais.
