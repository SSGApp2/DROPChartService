
function getChartJsLine( titles, labelX,labelY) {
    var config = null;
    config = {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            fontFamily: 'Kanit',
            datasets: [{
                label: "My First dataset",
                data: [90, 80, 70, 60, 50, 40, 30],
                borderColor: 'rgba(0, 188, 212, 0.75)',
                backgroundColor: 'rgba(0, 188, 212, 0.3)',
                pointBorderColor: 'rgba(0, 188, 212, 0)',
                pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                pointBorderWidth: 1,
                fill : false
            }, {
                label: "My Second dataset",
                data: [30, 40, 50, 60, 70, 80, 90],
                borderColor: 'rgba(233, 30, 99, 0.75)',
                backgroundColor: 'rgba(233, 30, 99, 0.3)',
                pointBorderColor: 'rgba(233, 30, 99, 0)',
                pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                pointBorderWidth: 1,
                fill : false
            }]
        },
        options: {
            responsive: true,
            // legend: false
            legend: {
                display:true,
                labels: {
                    fontFamily: 'Kanit',
                    fontSize:16
                    // fontColor: 'rgb(0,0,0)'
                },
                position:'bottom',
                align:'start'

            },
            title: {
                display: true,
                text: titles,
                // text: '1',
                fontSize:16,
                // fontColor:'rgb(0,0,0)',
                fontFamily: 'Kanit',


            },
            scales: {
                xAxes: [{
                    // ticks: {
                    //     steps: 10,
                    //     stepValue: 6,
                    //
                    // },
                    // stacked: true,
                    categoryPercentage: 1.0,
                    barPercentage: 0.9,
                    // maxBarThickness:5,
                    scaleLabel: {
                        display: true,
                        labelString: labelX,
                        fontFamily: 'Kanit',
                    }
                }],
                yAxes: [{
                    barPercentage: 2,
                    ticks: {
                        // max: 100,
                        beginAtZero : true,
                    },
                    // stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: labelY,
                        fontFamily: 'Kanit',
                    }
                }]

            },
        }
    }
    return config;
}