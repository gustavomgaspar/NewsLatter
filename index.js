//express config
const express = require('express');
const Iserver = express();

//configuração do DB
const sequelize = require('sequelize');
const db = new sequelize({dialect: 'sqlite', storage: 'DatabaseError.sqlite'});

//model
const Pessoa = db.define('pessoa',{
    id: {
        type: sequelize.STRING,
        allownull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allownull: false
    }
});


//rota principal
Iserver.get('/', (req,res) => {
    res.send("<h1>Funcionou</h1>");
});


//chamada do server
Iserver.listen(3000, () => {
    console.log('Server iniciando na porta 3000');
});