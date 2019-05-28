
window.onload = function(){
    atualizarGeladeira1();
    atualizarGeladeira2();
    atualizarGeladeira3();
};

var t1 = document.getElementById('temp_g1');
var u1 = document.getElementById('umid_g1');
var t2 = document.getElementById('temp_g2');
var u2 = document.getElementById('umid_g2');
var t3 = document.getElementById('temp_g3');
var u3 = document.getElementById('umid_g3');

function atualizarGeladeira1(){
    fetch('../leituras/tempo-real1', {cache: 'no-store'}).then(function (response){
        if(response.ok){
            console.log('Geladeira 1 Recebendo Dados');
            response.json().then(function (resposta){
                console.log(resposta);
                t1.innerHTML = `${(resposta.temperatura).toFixed(1)}°C`;
                u1.innerHTML = `${resposta.umidade}%`;

            });
        }
        else{
            console.log('Geladeira 1 Não está recebendo dados.');
        }
    });
}

function atualizarGeladeira2(){
    fetch('../leituras/tempo-real2', {cache: 'no-store'}).then(function (response){
        if(response.ok){
            console.log('Geladeira 2 Recebendo Dados');
            response.json().then(function (resposta){
                console.log(resposta);
                t2.innerHTML = `${(resposta.temperatura).toFixed(1)}°C`;
                u2.innerHTML = `${resposta.umidade}%`;

            });
        }
        else{
            console.log('Geladeira 2 Não está recebendo dados.');
        }
    });
}

function atualizarGeladeira3(){
    fetch('../leituras/tempo-real3', {cache: 'no-store'}).then(function (response){
        if(response.ok){
            console.log('Geladeira 3 Recebendo Dados');
            response.json().then(function (resposta){
                console.log(resposta);
                t3.innerHTML = `${(resposta.temperatura).toFixed(1)}°C`;
                u3.innerHTML = `${resposta.umidade}%`;

            });
        }
        else{
            console.log('Geladeira 3 Não está recebendo dados.');
        }
    });
}