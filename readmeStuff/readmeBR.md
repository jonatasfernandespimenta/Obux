# Obux

<p align="center" style="display: flex; align-items: center; justify-content: space-around">
  <img src="./LOGO.png" alt="obuxLogo" width="250">
</p>
<p align="center">Obux é um aplicativo que tem como objetivo auxiliar na troca e empréstimo de livros com outras pessoas.</p>
<br/>

Obux permitirá usuarios trocar livros com outros usuarios, procurar livros de seu interesse, emprestar e colocar seus proprios livros para troca e emprestimo com outras pessoas.
<br/>

## Tecnologias Usadas
<p align="center" style="display: flex; align-items: center; justify-content: space-around">
  <img src="./nodejs_logo.png" width="100">
  <img src="./mongo_logo.png" width="100">
  <img src="./rn_logo.png" width="100">
</p>

Para esse projeto, está sendo utilizado NodeJS para o Backend, MongoDB para o banco de dados e ReactNative para Frontend (sem Expo).
<br/>

## Sumário de Documentação
* ### [Como Rodar](#como-rodar)
* ### [Rotas](#rotas)
* ### [Modelos](#modelos)

## Como Rodar
#### BackEnd
Primeiramente é preciso preparar o Backend, baixe [NodeJS](https://nodejs.org/en/)
<br/>
Após, é preciso baixar as dependencias executando o seguinte comando

```console
hello@world:~$ yarn
```

Agora, basta apenas rodar a aplicação. use este comando (não se esqueça de preparar as variaveis em uma .env file)

```console
hello@world:~$ node app.js
```

#### FrontEnd
Primeiramente é preciso baixar o Expo e depois rodar o seguinte comando na pasta de Frontend

```console
hello@world:~$ react-native run-android
```

# Rotas

### User Routes
|       Route           |    Method    |                   Description                    |                                                                         
|   :---------------:   | :----------: | :----------------------------------------------: |                                                                           
|  `/createuser`        |    POST      |  Rota que cria um usuario                        |                                                         
|  `/getuser/:id`       |    GET       |  Procura usuario por  ID                         |   
|  `/login`             |    POST      |  Rota para Login de usuário                      |                                                        
|  `/deluser/:id`       |    DELETE    |  Deleta usuario pelo ID                          |                 
|  `/updateuser/:id`    |    PUT       |  Atualiza usuario pelo ID                        |                                                     
|  `/rateuser`          |    POST      |  Cria uma avialiação de usuario pelas suas rviews|
|  `/finduser`          |    POST      |  Procura usuarios pela sua localização           | 

### Book Routes
|       Rota        |    Metodo    |                                   Descrição                                  |                                                                                                          
| :--------------:  | :----------: | :--------------------------------------------------------------------------: |                                                                           
|  `/registerbook`  |    POST      |   Rota que cria um livro                                                     |                                                         
|  `/getbook/:id`   |    GET       |   Procura livros pelo ID                                                     |   
|  `/delbook:id`    |    DELETE    |   Deleta livros pelo ID                                                      |                                                        
|  `/updatebook:id` |    PUT       |   Atualiza livros pelo ID                                                    |                 
|  `/findbook`      |    POST      |   Rota que procura por livros baseados em ano, autor, nome, editora, etc     |

### Pass Recovery Routes
|       Rota             |    Metodo   |                                  Descrição                                    |                                                                                                          
| :--------------:       | :----------: | :--------------------------------------------------------------------------: |                                                                           
|  `/request`            |    POST      |   Rota que envia um email de recuperação                                     |                                                         
|  `/recovery/:token`   |    GET       |   Verifica token                                                                |   
|  `/redefinepassword/:token`         |    POST    |   Redefine a senha                                               |                                                        

# Modelos

### User Schema
| FieldName  | Translated    | Type                                   | Required | Unique |
|:------------:|:---------------:|:----------------------------------------:|:---------:|:--------:|
| `nome`       | name          | String                                 | true    | false  |
| `dataNasc`   | birthday      | Date                                   | true    | false  |
| `telefone`  | mobile number | String                                 | false   | true   |
| `email`      | email         | String                                 | true    | true   |
| `cpf`        | cpf           | String                                 | true    | true   |
| `senha`      | password      | String                                 | true    | false  |
| `cidade`     | city          | String                                 | true    | false  |
| `estado`     | state         | String                                 | true    | false  |
| `biblioteca` | library       |  \[mongoose\.Schema\.Types\.ObjectId\] | false   | false  |
| `pfp`        | profile pic   | String                                 | false   | false  |
| `givenrates` | givenrates    | Number                                 | false   | false  |
| `totalrates` | totalrates    | Number                                 | false   | false  |


### Book Schema
| FieldName       | Translated   | Type   | Required |
|:-----------------:|:--------------:|:--------:|:---------:|
| `titulo`          | title        | String | true    |
| `autor`           | author       | String | false   |
| `ano`             | year         | String | false   |
| `genero`          | genre        | String | false   |
| `qualidade`       | quality      | Number | true    |
| `foto`            | Photo        | String | false   |
| `disponibilidade` | availability | Number | true    |
| `sinopse`         | synopsis     | String | false   |

## Design
[Clique aqui para ver o design do aplicativo no figma](https://www.figma.com/file/tAH0UaEkDmD9pgSNjInOwj/Untitled?node-id=157%3A177)

## Membros do projeto
| <img src="https://avatars.githubusercontent.com/jonatasfernandespimenta" width=115> | <img src="https://avatars.githubusercontent.com/LucaKmit" width=115>
|---|---
| <a href="https://github.com/jonatasfernandespimenta">Jônatas</a> | <a href="https://github.com/LucaKmit">Luca</a> 
