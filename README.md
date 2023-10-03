# API com Fastify e MongoDB

Este é um projeto de API simples desenvolvido em JavaScript usando o framework Fastify e o serviço de banco de dados MongoDB Atlas. Ele fornece operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar recursos em um banco de dados.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

-   [Node.js](https://nodejs.org/) (v14 ou superior)
-   [npm](https://www.npmjs.com/) (normalmente vem com o Node.js)

## Configuração

1. Clone este repositório:

    ```bash
    git clone https://github.com/herloncosta/first-api-fastify.git
    cd first-api-fastify
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:

    Você precisará definir variáveis de ambiente para configurar a conexão com o MongoDB Atlas e outras configurações do servidor. Crie um arquivo `.env` na raiz do projeto e defina as variáveis apropriadas, por exemplo:

    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri_here
    ```

    Substitua `your_mongodb_uri_here` pela URI de conexão fornecida pelo MongoDB Atlas.

4. Inicie o servidor:

    ```bash
    npm start
    ```

    A API estará disponível em `http://localhost:3000` (ou na porta que você definiu).

## Rotas da API

A API possui as seguintes rotas:

-   `POST /api/product`: Cria um novo recurso.
-   `GET /api/product`: Retorna todos os recursos.
-   `GET /api/product/:id`: Retorna um recurso específico pelo ID.
-   `PUT /api/product/:id`: Atualiza um recurso existente pelo ID.
-   `DELETE /api/product/:id`: Exclui um recurso pelo ID.

## Uso da API

Você pode usar qualquer cliente HTTP para fazer solicitações para as rotas mencionadas acima (por exemplo, [curl](https://curl.se/), [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), ou até mesmo um navegador da web).

## Exemplo de Requisições

Aqui estão exemplos de como usar a API com o comando `curl`:

-   Criar um novo produto:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{ "name": "product name", "category": "product category", "price": value }' http://localhost:3000/api/product
    ```

-   Obter todos os produtos:

    ```bash
    curl http://localhost:3000/api/product
    ```

-   Obter um produto por ID:

    ```bash
    curl http://localhost:3000/api/product/1
    ```

-   Atualizar um produto existente por ID:

    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"name": "Recurso Atualizado"}' http://localhost:3000/api/product/1
    ```

-   Excluir um produto por ID:

    ```bash
    curl -X DELETE http://localhost:3000/api/product/1
    ```

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma [issue](https://github.com/herloncosta/first-api-fastify/issues) ou enviar uma [pull request](https://github.com/herloncosta/first-api-fastify/pulls).

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---
