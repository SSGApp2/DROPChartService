
function getChartJsHorizontalBar(labels,datas,titles,bgcolor,bdcolor,labelX,labelY,hbgcolor,hbdcolor) {
    var config = {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [{
                label: "น้ำหนักสินค้า",
                backgroundColor: bgcolor,
                borderColor: bdcolor,
                hoverBackgroundColor: hbgcolor,
                hoverBorderColor: hbdcolor,
                data: datas,
                // position:'bottom',
                // align:'start',
            },
                //     {
                //     label: "test",
                //     backgroundColor: "rgba(54,162,235,0.2)",
                //     borderColor: "rgba(54,162,235,1)",
                //     hoverBackgroundColor: "rgba(54,162,235,0.5)",
                //     hoverBorderColor: "rgba(54,162,235,1)",
                //     data: [28, 5, 20, 19, 96, 27, 100]
                // }
            ]
        },
        options: {
            responsive: true,
            // legend:false,
            legend: {
                display: true,
                labels: {
                    fontFamily:'Kanit',
                    fontSize: 16,
                },
                position: 'bottom',
                align: 'start'

            },
            plugins: {
                labels: [
                    {
                        render: 'label',
                        fontFamily:'Kanit',
                        fontSize: 16,
                    }
                ]
            },
            title: {
                display: true,
                text: titles,
                // text: '1',
                fontSize: 16,
                fontFamily:'Kanit',


            },
            scales: {
                xAxes: [{
                    ticks: {
                        // max: 100,
                        beginAtZero: true,
                    },
                    // stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: labelX,
                        fontFamily:'Kanit',
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: labelY,
                        fontFamily:'Kanit',
                    }
                }]

            },
            "hover": {
                "animationDuration": 0
            },
            "animation": {
                "duration": 1,
                "onComplete": function () {
                    var chartInstance = this.chart,
                        ctx = chartInstance.ctx;

                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x - 15, bar._model.y + 7);
                        });
                    });
                }
            },
        },

    }
    return config;
}