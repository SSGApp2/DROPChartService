//bg for horizontal bar
var bgcolorPerformanceBox = "rgba(255,99,132,0.2)";
var bordercolorPerformanceBox= "rgba(255,99,132,1)";
var hoverbgPerformanceBox =  "rgba(255,99,132,0.5)";
var hoverborderPerformanceBox = "rgba(255,99,132,1)";

jQuery(document).ready(function () {
    findAll();

});

function findAll() {
    // onChangePieChart();
    // AjaxUtil.get('/vChartPerformance/findByDatePerfIncome', {
    //     dateFrom: DateUtil.coverStringToDate($("#dateFrom").val(), 'TH'),
    //     dateTo: DateUtil.coverStringToDate($("#dateTo").val(), 'TH')
    // }).always(function (data, status, xhr) {
    //     if (xhr.status == 200) {
    //         var dataJson = JsonUtil.tryParseJSON(xhr.responseText);
    //         renderChart1(dataJson.chart1);
    //         renderChart2(dataJson.chart2);
    //         renderChart3(dataJson.chart3);
    //
    //     }
    // });
    renderChart1();
    renderChart2();
    renderChart3();
}
//
// function onChangePieChart() {
//
//     $("#dateFrom,#dateTo").datepicker().on('changeDate', function () {
//         findAll();
//     });
// }
function  renderChart1(dataJson) {
    // var label = [];
    var label = [ "ตู้ที่1", "ตู้ที่2", "ตู้ที่3", "ตู้ที่4", "ตู้ที่5", "ตู้ที่6", "ตู้ที่7","ตู้ที่8","ตู้ที่9","ตู้ที่10"];
    // var dataTest = [];
    var dataTest = [2.00,1.90,1.80, 1.50, 1.30, 1.20, 1.10,1.00,0.85,0.70];
    // var title = ["รายได้แยกตามภาค"];
    var title=["กราฟแสดงค่าเฉลี่ยน้ำหนักพัสดุรวมรายตู้ ณ เวลาใดเวลาหนึ่ง"];
    var labelX = "น้ำหนักพัสดุ";
    var labelY = "จำนวนตู้";
    // $.each(dataJson, function (k, v) {
    //     label.push(v.areaName);
    //     dataTest.push(v.sum);
    // });
    new Chart(document.getElementById("horizontal_chartTime").getContext("2d"),
        getChartJsHorizontalBar(label, dataTest, title, bgcolorPerformanceBox,bordercolorPerformanceBox,labelX,labelY,hoverbgPerformanceBox,hoverborderPerformanceBox));
}
function  renderChart2(dataJson) {
    // var label = [];
    var label = [ "ตู้ที่1", "ตู้ที่2", "ตู้ที่3", "ตู้ที่4", "ตู้ที่5", "ตู้ที่6", "ตู้ที่7","ตู้ที่8","ตู้ที่9","ตู้ที่10"];
    // var dataTest = [];
    var dataTest = [
        {
            label: "กว้าง",
            data:  [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "rgb(58,206,58)"
        },
        {
            label: "สูง",
            data: [28, 48, 40, 19, 86, 27, 100],
            backgroundColor: "rgb(99,216,99)"
        },
        {
            label: "ยาว",
            data: [12, 16, 42, 24, 84, 23, 22],
            backgroundColor:  "rgb(160,231,160)"
        }
    ];
    // var title = ["รายได้แยกตามภาค"];
    var title=["กราฟแสดงปริมาตรเฉลี่ยรวมรายตู้ ณ เวลาใดเวลาหนึ่ง"];
    var labelX = "จำนวนตู้";
    var labelY = "ปริมาตรพัสดุ";
    // $.each(dataJson, function (k, v) {
    //     label.push(v.areaName);
    //     dataTest.push(v.sum);
    // });
        new Chart(document.getElementById("bar_chartTime1").getContext("2d"),
        getChartJsBar(label,dataTest,title,labelX,labelY));
}
function  renderChart3(dataJson) {
    // var label = [];
    var label = [ "ตู้ที่1", "ตู้ที่2", "ตู้ที่3", "ตู้ที่4", "ตู้ที่5", "ตู้ที่6", "ตู้ที่7","ตู้ที่8","ตู้ที่9","ตู้ที่10"];
    // var dataTest = [];
    var dataTest = [
        {
            label: "สินค้ารายตู้",
            data:  [15000, 10000, 5000, 7000, 2000,3000, 4000,11000,12000,13000],
            backgroundColor: "#fa9200"
        },
    ];
    // var title = ["รายได้แยกตามภาค"];
    var title=["กราฟแสดงปริมาณสินค้าเฉลี่ยรายตู้ ณ เวลาใดเวลาหนึ่ง"];
    var labelX = "จำนวนตู้";
    var labelY = "จำนวนสินค้า";
    // $.each(dataJson, function (k, v) {
    //     label.push(v.areaName);
    //     dataTest.push(v.sum);
    // });
        new Chart(document.getElementById("bar_chartTime2").getContext("2d"),
        getChartJsBar(label,dataTest,title,labelX,labelY));
}


