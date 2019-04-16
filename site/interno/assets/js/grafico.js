let primeiroGrafico = document.getElementById('primeiroGrafico').getContext('2d');
                        
let chart = new Chart(primeiroGrafico, {
    type: 'line',
    data: {
        labels:['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'],

        // eixo y
        datasets: [
            {
                label: 'Temperatura',
                // eixo x
                data: [12, 13, 12, 14,13, 11],
                backgroundColor: "",
                borderColor: "#af2828",
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 7,
            }
        ]
    }


});