// não mexa nestas 3 linhas!
var express = require('express');
var router = express.Router();
var banco = require('../app-banco');
// não mexa nessas 3 linhas!

router.get('/ultimas', function (req, res, next) {
  console.log(banco.conexao);
  banco.conectar().then(() => {
    var limite_linhas = 8;
    return banco.sql.query(`select top ${limite_linhas} 
                            temp, 
                            umid, 
                            FORMAT(hora,'HH:mm:ss') as hora,
                            fkgeladeira 
                            from dados order by idtempumid desc`);
  }).then(consulta => {

    console.log(`Resultado da consulta: ${JSON.stringify(consulta.recordset)}`);
    res.send(consulta.recordset);

  }).catch(err => {

    var erro = `Erro na leitura dos últimos registros: ${err}`;
    console.error(erro);
    res.status(500).send(erro);

  }).finally(() => {
    banco.sql.close();
  });

});

// TESTES DE TRIPLICAÇÃO DOS ENDPOINTS
router.get('/ultimas1', function (req, res, next) {
  console.log(banco.conexao);
  banco.conectar().then(() => {
    var limite_linhas = 1;
    return banco.sql.query(`select top ${limite_linhas} 
                            temp, 
                            umid, 
                            FORMAT(hora,'HH:mm:ss') as hora,
                            fkgeladeira 
                            from dados where fkgeladeira=1 order by idtempumid desc`);
  }).then(consulta => {

    console.log(`Resultado da consulta: ${JSON.stringify(consulta.recordset)}`);
    res.send(consulta.recordset);

  }).catch(err => {

    var erro = `Erro na leitura dos últimos registros: ${err}`;
    console.error(erro);
    res.status(500).send(erro);

  }).finally(() => {
    banco.sql.close();
  });

});
router.get('/ultimas2', function (req, res, next) {
  console.log(banco.conexao);
  banco.conectar().then(() => {
    var limite_linhas = 1;
    return banco.sql.query(`select top ${limite_linhas} 
                            temp, 
                            umid, 
                            FORMAT(hora,'HH:mm:ss') as hora,
                            fkgeladeira 
                            from dados where fkgeladeira=2 order by idtempumid desc`);
  }).then(consulta => {

    console.log(`Resultado da consulta: ${JSON.stringify(consulta.recordset)}`);
    res.send(consulta.recordset);

  }).catch(err => {

    var erro = `Erro na leitura dos últimos registros: ${err}`;
    console.error(erro);
    res.status(500).send(erro);

  }).finally(() => {
    banco.sql.close();
  });

});
router.get('/ultimas3', function (req, res, next) {
  console.log(banco.conexao);
  banco.conectar().then(() => {
    var limite_linhas = 1;
    return banco.sql.query(`select top ${limite_linhas} 
                            temp, 
                            umid, 
                            FORMAT(hora,'HH:mm:ss') as hora,
                            fkgeladeira 
                            from dados where fkgeladeira=3 order by idtempumid desc`);
  }).then(consulta => {

    console.log(`Resultado da consulta: ${JSON.stringify(consulta.recordset)}`);
    res.send(consulta.recordset);

  }).catch(err => {

    var erro = `Erro na leitura dos últimos registros: ${err}`;
    console.error(erro);
    res.status(500).send(erro);

  }).finally(() => {
    banco.sql.close();
  });

});

//FIM DOS TESTES



router.get('/estatisticas', function (req, res, next) {
  console.log(banco.conexao);

  var estatisticas = {
    temp_maxima: 0,
    temp_minima: 0,
    temp_media: 0
  };

  banco.conectar().then(() => {
    return banco.sql.query(`
        select 
          max(temperatura) as temp_maxima, 
          min(temperatura) as temp_minima, 
          avg(temperatura) as temp_media 
        from leitura
        `);
  }).then(consulta => {
    estatisticas.temp_maxima = consulta.recordset[0].temp_maxima;
    estatisticas.temp_minima = consulta.recordset[0].temp_minima;
    estatisticas.temp_media = consulta.recordset[0].temp_media;
    console.log(`Estatísticas: ${JSON.stringify(estatisticas)}`);
    res.send(estatisticas);
  }).catch(err => {

    var erro = `Erro na leitura dos últimos registros: ${err}`;
    console.error(erro);
    res.status(500).send(erro);

  }).finally(() => {
    banco.sql.close();
  });

});


router.get('/tempo-real', function (req, res, next) {
  console.log(banco.conexao);

  var estatisticas = {
    temperatura: 0,
    umidade: 0
  };

  banco.conectar().then(() => {
    return banco.sql.query(`
        select top 1 temp, umid from dados order by idtempumid desc
        `);
  }).then(consulta => {

    estatisticas.temperatura = consulta.recordset[0].temp;
    estatisticas.umidade = consulta.recordset[0].umid;
    console.log(`Tempo real: ${JSON.stringify(estatisticas)}`);

    res.send(estatisticas);

  }).catch(err => {

    var erro = `Erro na leitura dos registros de tempo real: ${err}`;
    console.error(erro);
    res.status(500).send(erro);

  }).finally(() => {
    banco.sql.close();
  });
});


// não mexa nesta linha!
module.exports = router;
