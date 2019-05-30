const express = require('express');
const router = express.Router();
const Database = require('../Database');
const isNull = require('../script').isNull;
//const Cryptr = require('cryptr'); // Para encripitar as senhas dos users
const config = require('../config');
//const cryptr = new Cryptr(config.security.key);

router.post('/', (req, res, next) => {

    //Pegando os valores dos inputs do formulário de cadastro
    var email = req.body.email;
    var senha = req.body.senha;

    console.log(email, senha);

    verificarLogin(email, senha, res);
});

function verificarLogin(email, senha, res) {

    var stringSql = `SELECT * FROM usuario where email = '${email}'`;
    Database.query(stringSql).then(results => {

        results=results.recordsets[0];
        // var senhaDecriptada = cryptr.decrypt(results[0].senha);
        // if(senha === senhaDecriptada){
            res.status(200).send("ok");
        // }else{
        //     res.status(200).send("Não ok");
        // }

    });
}



module.exports = router;