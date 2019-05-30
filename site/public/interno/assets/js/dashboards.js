window.onload = function(){
    atualizarGeladeira1();
    atualizarGeladeira2();
    atualizarGeladeira3();
};


// TIPO 1
var t1 = document.getElementById('temp_g1');
var u1 = document.getElementById('umid_g1');
var imuno = document.getElementById('div_imuno');
var s_imuno = document.getElementById('status_imuno');
var icone1 = document.getElementById('icone_g1');
  
function atualizarGeladeira1(){
    console.log('Entrou aqui');
    fetch('../leituras/tempo-real1', {cache: 'no-store'}).then(function (response){
        if(response.ok){
            console.log('Geladeira 1 Recebendo Dados');
            response.json().then(function (resposta){
                console.log(resposta);
                t1.innerHTML = `${(resposta.temperatura).toFixed(1)}°C`;
                u1.innerHTML = `${resposta.umidade}%`;
                if(resposta.temperatura <= 2 || resposta.temperatura >= 8){
                    s_imuno.style.color = 'red';
                    t1.style.color = 'red';
                    s_imuno.innerHTML = 'Limites de temperatura ultrapassados!';
                    imuno.className = "card-header card-header-danger card-header-icon";
                    icone1.innerHTML = "error";
                }
                 if(resposta.temperatura <= 3.5 || resposta.temperatura >= 6.5){
                    s_imuno.style.color = 'purple';
                    t1.style.color = 'purple';
                    s_imuno.innerHTML = 'Chegando ao Limite!!';
                    imuno.className = "card-header card-header-warning card-header-icon";
                    icone1.innerHTML = "warning";
                }
                if(resposta.temperatura >3.5 && resposta.temperatura<6.5){
                    s_imuno.style.color = 'gray';
                    t1.style.color = 'black';
                    s_imuno.innerHTML = 'dentro do limite';
                    imuno.className = "card-header card-header-success card-header-icon";
                    icone1.innerHTML = "ac_unit";
                }
                

            });
        }
        else{
            console.log('Geladeira 1 Não está recebendo dados.');
        }
    }).catch(function (error){
        console.error(`O erro é: ${error.message}` );
    });
 
    setTimeout('atualizarGeladeira1()', 10000);
}


// Tipo 2
var t2 = document.getElementById('temp_g2');
var u2 = document.getElementById('umid_g2');
var comum = document.getElementById('div_com');
var s_comum = document.getElementById('status_com');
var icone2 = document.getElementById('icone_g2');


function atualizarGeladeira2(){
    fetch('../leituras/tempo-real2', {cache: 'no-store'}).then(function (response){
        if(response.ok){
            console.log('Geladeira 2 Recebendo Dados');
            response.json().then(function (resposta){
                console.log(resposta);
                t2.innerHTML = `${(resposta.temperatura).toFixed(1)}°C`;
                u2.innerHTML = `${resposta.umidade}%`;
                if(resposta.temperatura < 20 || resposta.temperatura > 25){
                    s_comum.style.color = 'red';
                    t2.style.color = 'red';
                    s_comum.innerHTML = 'Limites de temperatura ultrapassados!';
                    comum.className = "card-header card-header-danger card-header-icon";
                    icone2.innerHTML = "error";
                }
                 if(resposta.temperatura <= 21.25 || resposta.temperatura >= 23.75){
                    s_comum.style.color = 'purple';
                    t2.style.color = 'purple';
                    s_comum.innerHTML = 'Chegando ao Limite!!';
                    comum.className = "card-header card-header-warning card-header-icon";
                    icone2.innerHTML = "warning";
                }
                if(resposta.temperatura >21.25 && resposta.temperatura<23.75){
                    s_comum.style.color = 'gray';
                    t2.style.color = 'black';
                    s_comum.innerHTML = 'dentro do limite';
                    comum.className = "card-header card-header-success card-header-icon";
                    icone2.innerHTML = "ac_unit";
                }

            });
        }
        else{
            console.log('Geladeira 2 Não está recebendo dados.');
        }
    });

    setTimeout('atualizarGeladeira2()', 10000);
}

//TIPO 3
var t3 = document.getElementById('temp_g3');
var u3 = document.getElementById('umid_g3');
var insulina = document.getElementById('div_insul');
var s_insul = document.getElementById('status_ins');
var icone3 = document.getElementById('icone_g3');

function atualizarGeladeira3(){
    console.log('Entrou aqui');
    fetch('../leituras/tempo-real3', {cache: 'no-store'}).then(function (response){
        if(response.ok){
            console.log('Geladeira 3 Recebendo Dados');
            response.json().then(function (resposta){
                console.log(resposta);
                t3.innerHTML = `${(resposta.temperatura).toFixed(1)}°C`;
                u3.innerHTML = `${resposta.umidade}%`;
                if(resposta.temperatura <= -20 || resposta.temperatura >= 0){
                    s_comum.style.color = 'red';
                    t2.style.color = 'red';
                    s_comum.innerHTML = 'Limites de temperatura ultrapassados!';
                    comum.className = "card-header card-header-danger card-header-icon";
                    icone2.innerHTML = "error";
                }
                 if(resposta.temperatura <= -15 || resposta.temperatura >= -5){
                    s_comum.style.color = 'purple';
                    t2.style.color = 'purple';
                    s_comum.innerHTML = 'Chegando ao Limite!!';
                    comum.className = "card-header card-header-warning card-header-icon";
                    icone2.innerHTML = "warning";
                }
                if(resposta.temperatura >-15 && resposta.temperatura< -5){
                    s_comum.style.color = 'gray';
                    t2.style.color = 'black';
                    s_comum.innerHTML = 'dentro do limite';
                    imuno.className = "card-header card-header-success card-header-icon";
                    icone2.innerHTML = "ac_unit";
                }

            });
        }
        else{
            console.log('Geladeira 3 Não está recebendo dados.');
        }
    });
    setTimeout('atualizarGeladeira3()', 10000);
}


