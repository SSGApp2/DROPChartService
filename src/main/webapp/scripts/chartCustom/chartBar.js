
function getChartJsBar(labels, datas, titles, labelX,labelY) {
    var config = null;
    config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datas,
        },
        options: {
            responsive: true,
            // legend: false,
            legend: {
                display:true,
                labels: {
                    fontFamily:'Kanit',
                    fontSize: 16,
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
            plugins: {
                labels: false
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
            "hover": {
                "animationDuration": 0
            },
            "animation": {
                "duration": 1,
                "onComplete": function() {
                    var chartInstance = this.chart,
                        ctx = chartInstance.ctx;

                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';

                    this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },
        }
    }
    return config;
}