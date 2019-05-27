
let graf_vac = document.getElementById('graf_vac').getContext('2d');
let umid = new Chart(graf_vac, {
    type: 'line',
    data: {
        labels:[date],

        // eixo y
        datasets: [
            {
                label: 'Umidade',
                // eixo x
                data: [40, 42, 41, 40,43, 42],
                backgroundColor: "",
                borderColor: "#0055ff",
                backgroundColor: "#0055ff",
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: false,
            }
        ]
    }


});