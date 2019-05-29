
window.onload = function(){
    atualizarGeladeira3();
};


var t3 = document.getElementById('temp_g3');
var u3 = document.getElementById('umid_g3');

function atualizarGeladeira3(){
    console.log('Entrou aqui');
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
