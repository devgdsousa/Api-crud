
# API RESTful com Node.js, Express e Prisma

Este projeto consiste em uma API RESTful que realiza operações CRUD em usuários. Cada usuário possui um id (autoincremental), nome e email (único). Os dados são persistidos em um banco de dados sqlite. Utiliza Node.js como plataforma de execução, Express como framework web e Prisma como ORM para interagir com o banco de dados.

## Requisitos

- Node.js (v14.0.0 ou superior)
- npm ou yarn
- Banco de dados para Armazenar os dados a serem inseridos
- 
## Configuração

1. Clone o repositório:
    https://github.com/ayatogd/Api-crud.git
    

2. Instale as dependências:
     

    cd Api-crud
    npm install express
    npm install typescript ts-node @types/node --save-dev
    npm install prisma --save-dev

    ou
    
    
    yarn add express@^4.18.2 prisma@^5.5.2
    
    yarn add @types/node@^20.9.0 @types/express@^4.17.21 ts-node-dev@^2.0.0 typescript@^5.2.2 --dev
  
    para melhor entendimento basta acessar:https://www.prisma.io/docs/getting-started/quickstart
    

3. Configure o banco de dados:

    Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

    ```
    DATABASE_URL="file:./dev.db"
    ```

    Em seguida, execute o comando a seguir para criar o banco de dados e as tabelas:

    ```
    npx prisma migrate dev
    ```

## Uso

1. Inicie o servidor:

    
    npm run dev # ou yarn dev
    

2. Acesse a API em [http://localhost:3333](http://localhost:3333)

## Rotas

- **POST /users**: Cadastra um novo usuário. Envia JSON com "nome" e "email".
- **PUT /user/:id**: Atualiza os dados de um user específico. Envia JSON com os campos a serem atualizados.
- **GET /users**: Retorna a lista de todos os users.
- **GET /user/:id**: Retorna os detalhes de um user em específico.
- **DELETE /user/:id**: Exclui um user específico.

## Estrutura do Banco de Dados

O banco de dados contém uma tabela `User` com os seguintes campos:

- `id` (chave primária)
- `nome` (nome do usuário)
- `email` (e-mail único do usuário)
- `createdAt` (Data de quando o uusário foi criado)
- `updatedAt` (Data de quando o usuário foi atualizado)

## Contribuição
Sinta-se à vontade para enviar pull requests ou relatar problemas, sugestões são bem recebidas.

---

Por este README se têm visão geral básica do projeto. Consulte o código-fonte ou a documentação das Frameworks e bibliotecas aqui usadas para obter detalhes específicos da implementação.
