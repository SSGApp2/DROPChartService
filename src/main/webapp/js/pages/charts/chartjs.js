$(function () {
    // new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
    // new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
    // new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
    new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie'));
});

function getChartJs(type) {
    var config = null;

    if (type === 'line') {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(0, 188, 212, 0.75)',
                    backgroundColor: 'rgba(0, 188, 212, 0.3)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "My Second dataset",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: 'rgba(233, 30, 99, 0.75)',
                        backgroundColor: 'rgba(233, 30, 99, 0.3)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'bar') {
        config = {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(0, 188, 212, 0.8)'
                }, {
                        label: "My Second dataset",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        backgroundColor: 'rgba(233, 30, 99, 0.8)'
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'radar') {
        config = {
            type: 'radar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 25, 90, 81, 56, 55, 40],
                    borderColor: 'rgba(0, 188, 212, 0.8)',
                    backgroundColor: 'rgba(0, 188, 212, 0.5)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.8)',
                    pointBorderWidth: 1
                }, {
                        label: "My Second dataset",
                        data: [72, 48, 40, 19, 96, 27, 100],
                        borderColor: 'rgba(233, 30, 99, 0.8)',
                        backgroundColor: 'rgba(233, 30, 99, 0.5)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.8)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'pie') {
        config = {
            type: 'pie',
            data: {
                datasets: [{
                    // data: [120, 50, 100, 40,30,70,20],

                    data: [120, 50, 100, 40,30,70,20],
                    backgroundColor: [
                        "rgb(58,206,58)",
                        "rgb(78,211,78)",
                        "rgb(99,216,99)",
                        "rgb(119,221,119)",
                        "rgb(139,226,139)",
                        "rgb(160,231,160)",
                        "rgb(180,236,180)"
                    ],
                }],
                labels: [
                    // [
                     "กรุงเทพและปริมณฑล",
                    "ภาคกลาง",
                    "ภาคเหนือ",
                    "ภาคใต้",
                    "ภาคตะวันออก",
                    "ภาคตะออกเฉียงเหนือ",
                    "ภาคตะวันตก",
                    // ],
                    // {
                    // render:'labels'
                    // }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display:true,
                    labels: {
                        fontColor: 'rgb(0,0,0)'
                        // ,render: 'label'
                    },
                    position:'bottom',

                },

                plugins: {
                    labels: {
                        render: 'percentage',
                        fontColor: ['green', 'white', 'red'],
                        precision: 2
                    }
                },
                // title: {
                //     display: true,
                //     text: 'Chart แสดงรายได้แยกตามภาค',
                //     fontSize:30,
                //     fontColor:'rgb(0,0,0)',
                // },

            },
        }
    }
    return config;
}