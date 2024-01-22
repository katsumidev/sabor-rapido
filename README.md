<p align="center"><img src="https://github.com/mooncoded/sabor-rapido-grao/blob/main/src/assets/simple_logo.png" width="100px" /></p>

# Projeto Sabor Rápido 🍔

## Desenvolvido conforme as instruções e requisitos do MVP Grão Direto

---

### Requisitos para Executar o Projeto

- [ReactJs](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com)
- [NodeJS](https://nodejs.org/en)

---

### 🚀 Instruções

1. **Baixar Ferramentas Necessárias:**
   - Certifique-se de ter as versões mais recentes do NodeJS, npm e yarn instaladas.
   - Baixe o [pacote de ferramentas de terminal do MongoDB](https://www.mongodb.com/try/download/database-tools).
   - Baixe e instale o [MongoDB Community](https://www.mongodb.com/try/download/community).

2. **Baixar e Instalar Dependências do Projeto:**
   - Para o frontend:
     ```
     yarn install
     ```
   - Para o backend:
     ```
     cd server
     yarn install
     ```

---

### 🛠️ Configuração dos Dados

1. **Crie o Arquivo `.env`:**
   - Crie um arquivo `.env` baseado no modelo em `.env-copy` tanto para o backend quanto para o frontend.
   - Inclua as URLs para a API do backend e a conexão do MongoDB.

2. **Crie o Banco de Dados:**
   - Abra o MongoDB Compass e crie um novo banco de dados chamado `sabor-rapido`.

3. **Importe a Base de Dados MongoDB:**
   1. Vá para o diretório dos executáveis do MongoDB.
   2. Mova os arquivos `.csv` da pasta "extra" para a pasta do MongoDB.
   3. Execute os comandos abaixo para importar as coleções:
      - Restaurantes:
        ```
        mongoimport /db:sabor-rapido /collection:restaurants /file:restaurantes.csv
        ```
      - Usuários:
        ```
        mongoimport /db:sabor-rapido /collection:users /file:users.csv
        ```

---
### Executando o Projeto

   - Para o frontend:
     ```
     yarn start
     ```
   - Para o backend:
     ```
     cd server/src
     node index.js
     ```

---

## 📖 Author
<table>
  <tr>
    <td  align=center>
        <img src="https://avatars.githubusercontent.com/u/90803853?v=4" width="100px" alt="Moon">
        <a href="https://github.com/mooncoded">
          <br>
            Moon
          </br>
        </a>
    </td>
  </tr>
</table>
