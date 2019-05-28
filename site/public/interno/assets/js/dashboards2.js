window.onload = function(){
    atualizarGeladeira2();
};

var t2 = document.getElementById('temp_g2');
var u2 = document.getElementById('umid_g2');


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