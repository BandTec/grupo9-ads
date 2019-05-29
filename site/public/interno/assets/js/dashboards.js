window.onload = function(){
    atualizarGeladeira1();
};

var t1 = document.getElementById('temp_g1');
var u1 = document.getElementById('umid_g1');
var imuno = document.getElementById('div_imuno');
var s_imuno = document.getElementById('status_imuno');
  
function atualizarGeladeira1(){
    fetch('../leituras/tempo-real1', {cache: 'no-store'}).then(function (response){
        if(response.ok){
            console.log('Geladeira 1 Recebendo Dados');
            response.json().then(function (resposta){
                console.log(resposta);
                t1.innerHTML = `${(resposta.temperatura).toFixed(1)}°C`;
                u1.innerHTML = `${resposta.umidade}%`;
                if(resposta.temperatura < 3.5 || resposta.temperatura > 6.5){
                    imuno.classList.toggle('card-header card-header-warning card-header-icon');                     s_imuno.innerHTML = `Cuidado! Chegando ao Limite!`;
                    s_imuno.style.color = 'purple';
                    s_imuno.innerHTML = 'Chegando ao Limite!!';
                }

            });
        }
        else{
            console.log('Geladeira 1 Não está recebendo dados.');
        }
    }).catch(function (error){
        console.error(`O erro é: ${error.message}` );
    });
 
    setTimeout('atualizarGeladeira1()', 8000);
}




