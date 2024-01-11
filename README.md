# Desafio Full Cycle: #2 Nginx, Nodejs e Mysql com Docker

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.

# Como executar

1. Faça o clone do projeto
2. Acesse a pasta onde o projeto foi clonado
3. Execute **docker-compose up -d**
4. No navegador acesse http://localhost:8080/
