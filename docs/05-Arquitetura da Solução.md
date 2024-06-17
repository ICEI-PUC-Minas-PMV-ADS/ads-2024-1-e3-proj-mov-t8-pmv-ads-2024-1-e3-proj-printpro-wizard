# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

### Especificação Técnica Completa

#### Introdução
A especificação técnica do projeto "print-pro" descreve os requisitos técnicos, a arquitetura do sistema, as tecnologias utilizadas e as integrações necessárias para o desenvolvimento da aplicação. Este documento serve como guia para os desenvolvedores e a equipe de infraestrutura, garantindo que todos os aspectos técnicos sejam considerados durante o desenvolvimento e a implantação do sistema.

### Requisitos Técnicos

#### Hardware
- **Dispositivos de Desenvolvimento**: Computadores com no mínimo 8GB de RAM, processador quad-core, e 100GB de espaço em disco.
- **Dispositivos de Teste**: Smartphones e tablets com Android (versão 6.0 ou superior) e iOS (versão 11.0 ou superior).

#### Software
- **Sistema Operacional**: Windows 10, macOS 10.15 ou superior, Linux (distribuições Ubuntu, Fedora, etc.).
- **IDE/Editor de Código**: Visual Studio Code, Android Studio ou Xcode.
- **Versionamento de Código**: Git e repositório GitHub.
- **Ambiente de Desenvolvimento**: Node.js (versão 14.x ou superior), npm (versão 6.x ou superior), Expo CLI (versão 4.x ou superior).

### Arquitetura do Sistema

A aplicação "print-pro" utiliza uma arquitetura baseada em componentes para promover a modularidade e a reutilização do código. A arquitetura é dividida nas seguintes camadas:

- **Camada de Apresentação**: Implementada utilizando React Native para criação da interface do usuário, permitindo a execução em dispositivos móveis Android e iOS.
- **Camada de Negócio**: Contém a lógica de negócio da aplicação, implementada em JavaScript/TypeScript. Inclui serviços e controladores que gerenciam as operações principais da aplicação.
- **Camada de Dados**: Responsável pela interação com a base de dados e APIs externas, garantindo o armazenamento e a recuperação dos dados necessários para a aplicação.

### Tecnologias Utilizadas

- **Frontend**: React Native, Expo Go.
- **Backend**: Node.js, Express.js.
- **Banco de Dados**: Firebase Firestore para armazenamento de dados em tempo real.
- **Autenticação**: Firebase Authentication.
- **Armazenamento de Arquivos**: Firebase Storage.
- **Gerenciamento de Estado**: Redux ou Context API para gerenciamento de estado global.
- **Testes**: Jest e React Native Testing Library para testes unitários e de integração.
- **CI/CD**: GitHub Actions para integração contínua e deploy automático.

### Integrações

1. **Firebase**:
   - **Firestore**: Utilizado para armazenar dados de usuários, configurações de impressão e históricos de pedidos.
   - **Authentication**: Gerenciamento de usuários e autenticação segura utilizando e-mail/senha, Google, Facebook, etc.
   - **Storage**: Armazenamento de arquivos como imagens e documentos de impressão.

2. **Expo Go**:
   - Facilita o desenvolvimento e teste da aplicação em dispositivos móveis sem a necessidade de configuração complexa de ambientes nativos.

### Diagrama de Classes
O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

**Referências:**
- [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/en/rational-soft-arch/9.6.1?topic=diagrams-class)
- [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-um-diagrama-de-classe-uml)

**Diagrama de Classes**:

```plaintext
+------------------------+
|        Usuario         |
+------------------------+
| - id: string           |
| - nome: string         |
| - email: string        |
| - senha: string        |
+------------------------+
| + autenticar()         |
| + registrar()          |
| + recuperarSenha()     |
+------------------------+

+------------------------+
|     Configuracao       |
+------------------------+
| - id: string           |
| - tipoPapel: string    |
| - quantidade: number   |
| - cores: number        |
| - preco: number        |
+------------------------+
| + calcularCusto()      |
+------------------------+

+------------------------+
|        Pedido          |
+------------------------+
| - id: string           |
| - usuarioId: string    |
| - configuracaoId: string|
| - status: string       |
| - data: Date           |
+------------------------+
| + criarPedido()        |
| + atualizarStatus()    |
| + cancelarPedido()     |
+------------------------+

+------------------------+
|         ROI            |
+------------------------+
| - investimento: number |
| - retorno: number      |
+------------------------+
| + calcularROI()        |
+------------------------+
```

### Modelo ER
O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

**Referências:**
- [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-um-diagrama-entidade-relacionamento)

**Diagrama ER**:

```plaintext
[Usuario] ---< [Pedido]
  |                |
[Configuração]     |
  |                |
  +------<--------+
```

### Esquema Relacional
O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.


**Esquema Relacional**:

```plaintext
Tabela Usuario {
  id: string (PK)
  nome: string
  email: string
  senha: string
}

Tabela Configuracao {
  id: string (PK)
  tipoPapel: string
  quantidade: number
  cores: number
  preco: number
}

Tabela Pedido {
  id: string (PK)
  usuarioId: string (FK)
  configuracaoId: string (FK)
  status: string
  data: Date
}

Tabela ROI {
  id: string (PK)
  investimento: number
  retorno: number
}
```

### Modelo Físico
Entregar um arquivo `banco.sql` contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta `src\bd`.

**Exemplo do conteúdo do `banco.sql`**:

```sql
// Configuração do Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

// Estrutura das tabelas em Firestore
firestore.collection('usuarios').doc('usuarioId').set({
  nome: 'Nome do Usuário',
  email: 'email@example.com',
  senha: 'senhaSegura'
});

firestore.collection('configuracoes').doc('configuracaoId').set({
  tipoPapel: 'Tipo de Papel',
  quantidade: 100,
  cores: 4,
  preco: 50.00
});

firestore.collection('pedidos').doc('pedidoId').set({
  usuarioId: 'usuarioId',
  configuracaoId: 'configuracaoId',
  status: 'pendente',
  data: new Date()
});

firestore.collection('roi').doc('roiId').set({
  investimento: 1000.00,
  retorno: 1200.00
});
```

### Tecnologias Utilizadas
- **Frontend**: React Native, Expo Go
- **Backend**: Node.js, Express.js
- **Banco de Dados**: Firebase Firestore
- **Autenticação**: Firebase Authentication
- **Armazenamento de Arquivos**: Firebase Storage
- **Gerenciamento de Estado**: Redux ou Context API
- **Testes**: Jest, React Native Testing Library
- **CI/CD**: GitHub Actions

**Figura de Relação das Tecnologias**:
```plaintext
+---------------------+
|     Usuário         |
+---------+-----------+
          |
          v
+---------+-----------+
|  Aplicação Mobile   |
|   (React Native)    |
+---------+-----------+
          |
          v
+---------+-----------+
|    Servidor         |
|  (Node.js, Express) |
+---------+-----------+
          |
          v
+---------+-----------+
|    Firebase         |
|  (Firestore, Auth)  |
+---------------------+
```

### Hospedagem
A hospedagem e o lançamento da plataforma são feitos utilizando Firebase Hosting para os serviços web e Firestore para a base de dados. O Expo Go facilita a distribuição e teste da aplicação em dispositivos móveis.

### Qualidade de Software
A qualidade de software é garantida seguindo a norma internacional ISO/IEC 25010, focando nas seguintes sub-características:

- **Funcionalidade**: Precisão e completude

 das funcionalidades implementadas.
  - **Métricas**: Cobertura de testes unitários, número de bugs reportados.
- **Confiabilidade**: Capacidade do software de manter seu nível de desempenho sob condições estabelecidas por um período.
  - **Métricas**: Tempo médio entre falhas (MTBF), taxa de sucesso de transações.
- **Usabilidade**: Capacidade do software de ser compreendido, aprendido, operado e atraente para o usuário.
  - **Métricas**: Feedback dos usuários, taxa de adoção, análises de usabilidade.
- **Eficiência**: Capacidade do software de fornecer desempenho adequado relativo à quantidade de recursos utilizados.
  - **Métricas**: Tempo de resposta, utilização de CPU/memória.
