
$(function () {
    console.log("TEST");
});

var canvas = document.getElementById('myChart');
new Chart(canvas, {
    type: 'pie',
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            data: [50445, 33655, 15900],
            backgroundColor: ['#FF6384', '#36A2EB','#FFCE56']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            labels: {
                render: 'percentage',
                fontColor: ['green', 'white', 'red'],
                precision: 2
            }
        },
    }
});