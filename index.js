//express config
const express = require('express');
const Iserver = express();

//configuração do DB
const sequelize = require('sequelize');
const db = new sequelize({dialect: 'sqlite', storage: 'Database.sqlite'});

//model
const Pessoa = db.define('pessoa',{
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allownull: false
    },
    email: {
        type: sequelize.STRING,
        allownull: false
    }
});


//criar x-www-form-urlencoded parser  


Iserver.use(express.static('public'));  
Iserver.get('/', (req, res) => {  
   res.sendFile( __dirname + "/" + "index.html" );  
}) ; 
/*
//newslatter
Iserver.post('/newslatter', (req,res) => {
    (async () => {
     
        try {
            const resultado = await db.sync();
     
            const resultadoCreate = await Pessoa.create({
                nome: req.body.nome,
                email: req.body.email
            });
            console.log(resultadoCreate);
            var resposta = {};
            resposta.retorno = "enviado";
            res.json(resposta);
        } catch (error) {
            console.log(error);
        }
    })();
});
*/
//newslatter
Iserver.get('/newslatter/:nome/:email', (req,res) => {
    (async () => {
     
        try {
            const resultado = await db.sync();
     
            const resultadoCreate = await Pessoa.create({
                nome: req.params.nome,
                email: req.params.email
            });
            console.log(resultadoCreate);
            res.send('<h1>Enviado</h1>');
        } catch (error) {
            console.log(error);
        }
    })();
});
//chamada do server
Iserver.listen(3000, () => {
    console.log('Server iniciando na porta 3000');
});