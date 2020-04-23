# backendFama

## Stack

Projeto Backend utilizando NodeJS, Express, Typescript e MySQL. 
Segue uma arquitetura em camadas:
1. Presentation: responsável pela comunicação com agentes externos.
2. Data: responsável pela comunicação direta com o banco de dados.
3. Business: responsável pela lógica.

## Sobre

Esse foi um projeto de Beckend que criei para treinar cacos básicos de banco relacional.
Cadastra uma banda; Podemos buscar essa banda por id ou nome.
Cadastra um show, em um dia da semana e horarios especificos; Esse show recebe uma banda. Podemos buscar os shows por dia da semana.

## Instruções para rodar

As instruções são:
1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto
1. `npm run build` para gerar uma versão possível de ser deployada com os arquivos transpilados para Javascript
Utiliza o env com os dados:
HOST=<seu HOST>
USER=<seu USER>
PASSWORD=<sua SENHA>
DATABASE=<seu DATABASE>

## Contato

João Marcelo Santini

jmsantini@live.com

(14) 99682-1388
