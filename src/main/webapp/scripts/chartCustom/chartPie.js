
function getChartJsPie(labels, datas, titles, bgcolor) {
    var config = null;
    config = {
        type: 'pie',
        data: {
            datasets: [{
                data: datas,
                backgroundColor: bgcolor,
            }],
            labels: labels
        },
        options: {
            responsive: true,
            // legend:false,
            legend: {
                display: true,
                labels: {
                    // fontColor: 'rgb(0,0,0)',
                    fontFamily:'Kanit',
                    fontSize: 16,
                },
                position: 'bottom',
                align: 'start'

            },

            plugins: {
                // labels: {
                //     render: 'label',
                //     // fontColor: ['green', 'white', 'red'],
                //     position: 'outside'
                // }
                labels: [
                    {
                        render: 'label',
                        position: 'outside',
                        fontFamily:'Kanit',
                        fontSize: 16,
                        fontStyle:'bold'
                    },
                    {
                        render: 'value',
                        fontFamily:'Kanit',
                        fontSize: 16,
                        // fontStyle:'bold'
                    }
                ],
            },
            title: {
                display: true,
                text: titles,
                // text: '1',
                fontSize: 22,
                // fontColor: '#333',
                fontFamily: 'Kanit',
                // position:'bottom'
                // padding:200



            },
        },
    }
    return config;
}