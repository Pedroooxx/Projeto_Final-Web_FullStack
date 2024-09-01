# API Fullstack de Game Of Thrones

**Projeto final da disciplina de Fullstack** onde personagens da série podem ser armazenados em uma BD MySQL através da tecnologia de containers Docker em uma API Back-End node.js integrada em uma aplicação Front-End React com Tailwind CSS.

# Como Usar?

## Instale as dependencias tanto do Back-End quanto do front end

**Projeto_Final-Web_FullStack\backend> npm i**

**Projeto_Final-Web_FullStack\Frontend> npm i**

## Ajuste o .env

### Renomeie o arquivo ".env example" para somente ".env" coloque as informações faltantes:

PORT=3333

MYSQL_HOST=localhost

MYSQL_USER=

MYSQL_PASSWORD=

MYSQL_DB=gotcharactersdb

JWT_SECRET=

> Crie um nome de usuario, senha e um segredo para a autenticação JTW.

> MYSQL_DB pode ser trocado, no entanto, use o mesmo nome ao criar a DB mais a frente no passo a passo

## Outras Dependencias:

Para utilizar o projeto é necessário instalar algumas coisas.

## Docker Desktop: **https://www.docker.com/products/docker-desktop/**
ele será utilizado para criar imagens de um banco mysql e do redis para estratégias de cache.

## Extensão Docker: **ID:ms-azuretools.vscode-docker**
recomendado para acompanhar a criação das imagens e subir os containers.

## Abra o terminal no diretório: Projeto_Final-Web_FullStack\backend>

Rode os comandos abaixo para criar as imagens do mysql e do redis.

> Para Utilizar este comando voce deve criar uma senha, de preferencia a mesma que criou no .env colocando no lugar de **"{SENHA}"**

**docker run --name mysql -e MYSQL_ROOT_PASSWORD={SENHA} -p 3306:3306 -d mysql**

Use este comando para criar a imagem do redis

**docker run --name redis-cache -p 6379:6379 -d redis**

---------------

### Extensão Database Client: **ID:cweijan.vscode-database-client2**
Para criar o banco de dados MYSQL

Para criar a conexão acesse a engrenagem:

 **"Database Client Setings"** na seção **"Connection Configuration"** clique em importar.

importe o arquivo: **Projeto_Final-Web_FullStack\backend\src\config\db\database-client-config.json**

Crie um banco de dados, acesse o + "New Database"
e digite o comando SQL:

    CREATE DATABASE IF NOT EXISTS gotcharactersdb;

Vá na Aba "Tables" dentro da BD e clique em +
digite os comandos SQL para adicionar ambas as tabelas do projeto:

    CREATE TABLE gotcharacters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    fullname VARCHAR(48) NOT NULL,
    house VARCHAR(20) NOT NULL,
    status VARCHAR(12) NOT NULL
    );

    CREATE TABLE users (
      id INT NOT NULL AUTO_INCREMENT,
      username VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    );

------------------

## Inicie tanto o Back-End quanto o Front-End

**Projeto_Final-Web_FullStack\backend> npm start**

**Projeto_Final-Web_FullStack\Frontend> npm run dev**

## Acesse a Porta do FrontEnd e faça bom uso

Obg: Por padrão na porta: **http://localhost:5173/**
