$(function () {


//data horizontal chartBox
//     var labelXbox3 = "น้ำหนักพัสดุ";
//     var labelYbox3 = "จำนวนตู้";
//     var labelPerformanceBox = [ "ตู้ที่1", "ตู้ที่2", "ตู้ที่3", "ตู้ที่4", "ตู้ที่5", "ตู้ที่6", "ตู้ที่7","ตู้ที่8","ตู้ที่9","ตู้ที่10"];
//     var titlePerformanceBox1=["กราฟแสดงค่าเฉลี่ยน้ำหนักต่อพัสดุ 1 ชิ้น"];
//     var dataPerformanceBox = [2.00,1.90,1.80, 1.50, 1.30, 1.20, 1.10,1.00,0.85,0.70];
//     var bgcolorPerformanceBox = "rgba(255,99,132,0.2)";
//     var bordercolorPerformanceBox= "rgba(255,99,132,1)";
//     var hoverbgPerformanceBox =  "rgba(255,99,132,0.5)";
//     var hoverborderPerformanceBox = "rgba(255,99,132,1)";

//data multibar chartBox
//     var labelXbox1 = "จำนวนตู้";
//     var labelYbox1 = "ปริมาตรพัสดุ";
//     var labelPerformanceBox2 = [ "ตู้ที่1", "ตู้ที่2", "ตู้ที่3", "ตู้ที่4", "ตู้ที่5", "ตู้ที่6", "ตู้ที่7","ตู้ที่8","ตู้ที่9","ตู้ที่10"];
//     var titlePerformanceBox2=["กราฟแสดงค่าเฉลี่ยของปริมาตรต่อพัสดุ 1 ชิ้น"];
//     var dataPerformanceBox2 = [
//         {
//         label: "กว้าง",
//         data:  [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: "rgb(58,206,58)"
//         },
//         {
//             label: "สูง",
//             data: [28, 48, 40, 19, 86, 27, 100],
//             backgroundColor: "rgb(99,216,99)"
//         },
//         {
//             label: "ยาว",
//             data: [12, 16, 42, 24, 84, 23, 22],
//             backgroundColor:  "rgb(160,231,160)"
//         }
//     ];
    //data single chartBox
    // var labelXbox2 = "จำนวนตู้";
    // var labelYbox2 = "รายได้รวม";
    // var labelPerformanceBox3 = [ "ตู้ที่1", "ตู้ที่2", "ตู้ที่3", "ตู้ที่4", "ตู้ที่5", "ตู้ที่6", "ตู้ที่7","ตู้ที่8","ตู้ที่9","ตู้ที่10"];
    // var titlePerformanceBox3=["กราฟแสดงรายได้รวมรายตู้"];
    // var dataPerformanceBox3 = [
    //     {
    //         label: "รายได้",
    //         data:  [15000, 10000, 5000, 7000, 2000,3000, 4000,11000,12000,13000],
    //         backgroundColor: "#fa9200"
    //     },
    // ];
// //data horizontal chartBox
//
//     var titlePerformanceTime1=["กราฟแสดงค่าเฉลี่ยน้ำหนักพัสดุรวมรายตู้ ณ เวลาใดเวลาหนึ่ง"];
//
// //data multibar chartTime
//
//     var titlePerformanceTime2=["กราฟแสดงปริมาตรเฉลี่ยรวมรายตู้ ณ เวลาใดเวลาหนึ่ง"];
//
// //data single chartTime
//     var labelYTime2 = "จำนวนสินค้า";
//     var titlePerformanceTime3=["กราฟแสดงปริมาณสินค้าเฉลี่ยรายตู้ ณ เวลาใดเวลาหนึ่ง"];
//     var dataPerformanceTime3 = [
//         {
//             label: "สินค้ารายตู้",
//             data:  [15000, 10000, 5000, 7000, 2000,3000, 4000,11000,12000,13000],
//             backgroundColor: "#fa9200"
//         },
//     ];
//data horizontal chartUse
//     var labelPerformanceUse1 = [ "ตู้ที่1", "ตู้ที่2", "ตู้ที่3", "ตู้ที่4", "ตู้ที่5", "ตู้ที่6", "ตู้ที่7","ตู้ที่8","ตู้ที่9","ตู้ที่10"];
//     var titlePerformanceUse1=["แสดงรายการตู้ที่มีการใช้งานมาก 10 อันดับแรก"];
//     var dataPerformanceUse1 = [200,190,180, 150, 130, 120, 110,100,85,70];

//data horizontal chartUse2
//     var labelPerformanceUse2 = [ "ตู้ที่11", "ตู้ที่12", "ตู้ที่13", "ตู้ที่14", "ตู้ที่15", "ตู้ที่16", "ตู้ที่17","ตู้ที่18","ตู้ที่19","ตู้ที่20"];
//     var titlePerformanceUse2=["แสดงรายการตู้ที่มีการใช้งานน้อย 10 อันดับแรก"];
//     var dataPerformanceUse2 = [2.00,1.90,1.80, 1.50, 1.30, 1.20, 1.10,1.00,0.85,0.70];
 // //get value chart
 //    if(statusChart == 1){
 //    new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie',labelPerformance2,dataPerformance1,titlePerformance1,bgcolorPerformance1));
 //    new Chart(document.getElementById("pie_chart1").getContext("2d"), getChartJs('pie',labelPerformance2,dataPerformance2,titlePerformance2,bgcolorPerformance2));
 //    new Chart(document.getElementById("pie_chart2").getContext("2d"), getChartJs('pie',labelPerformance2,dataPerformance3,titlePerformance3,bgcolorPerformance3));
 //    }
    // else if (statusChart == 2){
    // // ,bgcolorPerformanceBox,bordercolorPerformanceBox,hoverbgPerformanceBox,hoverborderPerformanceBox
    // new Chart(document.getElementById("horizontal_chartBox").getContext("2d"),
    //     getChartJs('horizontalBar',labelPerformanceBox,dataPerformanceBox,titlePerformanceBox1,bgcolorPerformanceBox,bordercolorPerformanceBox,labelXbox3,labelYbox3,hoverbgPerformanceBox,hoverborderPerformanceBox));
    // new Chart(document.getElementById("bar_chartBox1").getContext("2d"), getChartJs('bar',labelPerformanceBox2,dataPerformanceBox2,titlePerformanceBox2,null,null,labelXbox1,labelYbox1,null,null));
    // new Chart(document.getElementById("bar_chartBox2").getContext("2d"), getChartJs('bar',labelPerformanceBox3,dataPerformanceBox3,titlePerformanceBox3,null,null,labelXbox2,labelYbox2,null,null));
    // }
    // else if (statusChart == 3){
    //     // ,bgcolorPerformanceBox,bordercolorPerformanceBox,hoverbgPerformanceBox,hoverborderPerformanceBox
    //     new Chart(document.getElementById("horizontal_chartTime").getContext("2d"),
    //         getChartJs('horizontalBar',labelPerformanceBox,dataPerformanceBox,titlePerformanceTime1,bgcolorPerformanceBox,bordercolorPerformanceBox,labelXbox3,labelYbox3,hoverbgPerformanceBox,hoverborderPerformanceBox));
    //     new Chart(document.getElementById("bar_chartTime1").getContext("2d"), getChartJs('bar',labelPerformanceBox2,dataPerformanceBox2,titlePerformanceTime2,null,null,labelXbox1,labelYbox1,null,null));
    //     new Chart(document.getElementById("bar_chartTime2").getContext("2d"), getChartJs('bar',labelPerformanceBox3,dataPerformanceTime3,titlePerformanceTime3,null,null,labelXbox2,labelYTime2,null,null));
    // }

//     else if (statusChart == 4){
//         // ,bgcolorPerformanceBox,bordercolorPerformanceBox,hoverbgPerformanceBox,hoverborderPerformanceBox
//         new Chart(document.getElementById("horizontal_chartUse").getContext("2d"),
//             getChartJs('horizontalBar',labelPerformanceUse1,dataPerformanceUse1,titlePerformanceUse1,bgcolorPerformanceBox,bordercolorPerformanceBox,labelXbox3,labelYbox3,hoverbgPerformanceBox,hoverborderPerformanceBox));
//         new Chart(document.getElementById("horizontal_chartUse2").getContext("2d"),
//             getChartJs('horizontalBar',labelPerformanceUse2,dataPerformanceUse2,titlePerformanceUse2,bgcolorPerformanceBox,bordercolorPerformanceBox,labelXbox3,labelYbox3,hoverbgPerformanceBox,hoverborderPerformanceBox));
//         new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
//     }
// });
// bordercolor,hoverbg,hoverborder,
// function getChartJs(type,labels,datas,titles,bgcolor,bdcolor,labelX,labelY,hbgcolor,hbdcolor) {
//     var config = null;
//     if (type === 'line') {
//         config = {
//             type: 'line',
//             data: {
//                 labels: ["January", "February", "March", "April", "May", "June", "July"],
//                 datasets: [{
//                     label: "My First dataset",
//                     data: [90, 80, 70, 60, 50, 40, 30],
//                     borderColor: 'rgba(0, 188, 212, 0.75)',
//                     backgroundColor: 'rgba(0, 188, 212, 0.3)',
//                     pointBorderColor: 'rgba(0, 188, 212, 0)',
//                     pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
//                     pointBorderWidth: 1,
//                     fill : false
//                 }, {
//                     label: "My Second dataset",
//                     data: [30, 40, 50, 60, 70, 80, 90],
//                     borderColor: 'rgba(233, 30, 99, 0.75)',
//                     backgroundColor: 'rgba(233, 30, 99, 0.3)',
//                     pointBorderColor: 'rgba(233, 30, 99, 0)',
//                     pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
//                     pointBorderWidth: 1,
//                     fill : false
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 // legend: false
//                 legend: {
//                     display:true,
//                     labels: {
//                         fontColor: 'rgb(0,0,0)'
//                     },
//                     position:'bottom',
//                     align:'start'
//
//                 },
//                 title: {
//                     display: true,
//                     text: titles,
//                     // text: '1',
//                     fontSize:16,
//                     fontColor:'rgb(0,0,0)',
//                     fontFamily:'Arial',
//
//
//                 },
//                 scales: {
//                     xAxes: [{
//                         // ticks: {
//                         //     steps: 10,
//                         //     stepValue: 6,
//                         //
//                         // },
//                         // stacked: true,
//                         categoryPercentage: 1.0,
//                         barPercentage: 0.9,
//                         // maxBarThickness:5,
//                         scaleLabel: {
//                             display: true,
//                             labelString: labelX
//                         }
//                     }],
//                     yAxes: [{
//                         barPercentage: 2,
//                         ticks: {
//                             // max: 100,
//                             beginAtZero : true,
//                         },
//                         // stacked: true,
//                         scaleLabel: {
//                             display: true,
//                             labelString: labelY
//                         }
//                     }]
//
//                 },
//             }
//         }
//     }
    // else if (type === 'bar') {
    //     config = {
    //         type: 'bar',
    //         data: {
    //             labels: labels,
    //             datasets: datas
    //         },
    //         options: {
    //             responsive: true,
    //             // legend: false,
    //             legend: {
    //                 display:true,
    //                 labels: {
    //                     fontColor: 'rgb(0,0,0)'
    //                 },
    //                 position:'bottom',
    //                 align:'start'
    //
    //             },
    //             title: {
    //                 display: true,
    //                 text: titles,
    //                 // text: '1',
    //                 fontSize:16,
    //                 fontColor:'rgb(0,0,0)',
    //                 fontFamily:'Arial',
    //
    //
    //             },
    //             plugins: {
    //                 labels: false
    //             },
    //             scales: {
    //                 xAxes: [{
    //                     // ticks: {
    //                     //     steps: 10,
    //                     //     stepValue: 6,
    //                     //
    //                     // },
    //                     // stacked: true,
    //                     categoryPercentage: 1.0,
    //                     barPercentage: 0.9,
    //                     // maxBarThickness:5,
    //                     scaleLabel: {
    //                         display: true,
    //                         labelString: labelX
    //                     }
    //                 }],
    //                 yAxes: [{
    //                     barPercentage: 2,
    //                     ticks: {
    //                         // max: 100,
    //                            beginAtZero : true,
    //                     },
    //                     // stacked: true,
    //                     scaleLabel: {
    //                         display: true,
    //                         labelString: labelY
    //                     }
    //                 }]
    //
    //             },
    //             "hover": {
    //                 "animationDuration": 0
    //             },
    //             "animation": {
    //                 "duration": 1,
    //                 "onComplete": function() {
    //                     var chartInstance = this.chart,
    //                         ctx = chartInstance.ctx;
    //
    //                     ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
    //                     ctx.textAlign = 'center';
    //                     ctx.textBaseline = 'bottom';
    //
    //                     this.data.datasets.forEach(function(dataset, i) {
    //                         var meta = chartInstance.controller.getDatasetMeta(i);
    //                         meta.data.forEach(function(bar, index) {
    //                             var data = dataset.data[index];
    //                             ctx.fillText(data, bar._model.x, bar._model.y - 5);
    //                         });
    //                     });
    //                 }
    //             },
    //         }
    //     }
    // }
    // else if (type === 'pie') {
    //     config = {
    //         type: 'pie',
    //         data: {
    //             datasets: [{
    //                 data: datas,
    //                 backgroundColor: bgcolor ,
    //             }],
    //             labels: labels
    //         },
    //         options: {
    //             responsive: true,
    //             // legend:false,
    //             legend: {
    //                 display:true,
    //                 labels: {
    //                     fontColor: 'rgb(0,0,0)'
    //                 },
    //                 position:'bottom',
    //                 align:'start'
    //
    //             },
    //
    //             plugins: {
    //                 // labels: {
    //                 //     render: 'label',
    //                 //     // fontColor: ['green', 'white', 'red'],
    //                 //     position: 'outside'
    //                 // }
    //                 labels: [
    //                     {
    //                         render: 'label',
    //                         position: 'outside'
    //                     },
    //                     {
    //                         render: 'value'
    //                     }
    //                 ]
    //             },
    //             title: {
    //                 display: true,
    //                 text: titles,
    //                 // text: '1',
    //                 fontSize:22,
    //                 fontColor:'rgb(0,0,0)',
    //                 fontFamily:'Arial',
    //
    //
    //             },
    //
    //         },
    //     }
    // }
    // else if(type === 'horizontalBar'){
    //     var config = {
    //         type: 'horizontalBar',
    //         data: {
    //             labels: labels,
    //             datasets: [{
    //                 label: "น้ำหนักสินค้า",
    //                 backgroundColor: bgcolor,
    //                 borderColor:bdcolor,
    //                 hoverBackgroundColor:hbgcolor,
    //                 hoverBorderColor: hbdcolor,
    //                 data: datas,
    //                 // position:'bottom',
    //                 // align:'start',
    //             },
    //             //     {
    //             //     label: "test",
    //             //     backgroundColor: "rgba(54,162,235,0.2)",
    //             //     borderColor: "rgba(54,162,235,1)",
    //             //     hoverBackgroundColor: "rgba(54,162,235,0.5)",
    //             //     hoverBorderColor: "rgba(54,162,235,1)",
    //             //     data: [28, 5, 20, 19, 96, 27, 100]
    //             // }
    //             ]
    //         },
    //         options: {
    //             responsive: true,
    //             // legend:false,
    //             legend: {
    //                 display: true,
    //                 labels: {
    //                     fontColor: 'rgb(0,0,0)'
    //                 },
    //                 position: 'bottom',
    //                 align: 'start'
    //
    //             },
    //             plugins: {
    //                 labels: [
    //                     {
    //                         render: 'label'
    //                     }
    //                 ]
    //             },
    //             title: {
    //                 display: true,
    //                 text: titles,
    //                 // text: '1',
    //                 fontSize:16,
    //                 fontColor:'rgb(0,0,0)',
    //                 fontFamily:'Arial',
    //
    //
    //             },
    //             scales: {
    //                 xAxes: [{
    //                     ticks: {
    //                         // max: 100,
    //                         beginAtZero : true,
    //                     },
    //                     // stacked: true,
    //                     scaleLabel: {
    //                         display: true,
    //                         labelString: labelX
    //                     }
    //                 }],
    //                 yAxes: [{
    //                     scaleLabel: {
    //                         display: true,
    //                         labelString: labelY
    //                     }
    //                 }]
    //
    //             },
    //             "hover": {
    //                 "animationDuration": 0
    //             },
    //             "animation": {
    //                 "duration": 1,
    //                 "onComplete": function() {
    //                     var chartInstance = this.chart,
    //                         ctx = chartInstance.ctx;
    //
    //                     ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
    //                     ctx.textAlign = 'center';
    //                     ctx.textBaseline = 'bottom';
    //
    //                     this.data.datasets.forEach(function(dataset, i) {
    //                         var meta = chartInstance.controller.getDatasetMeta(i);
    //                         meta.data.forEach(function(bar, index) {
    //                             var data = dataset.data[index];
    //                             ctx.fillText(data, bar._model.x - 15, bar._model.y + 7);
    //                         });
    //                     });
    //                 }
    //             },
    //         },
    //
    //     };
    // }
    // return config;
}