//bg for horizontal bar
var bgcolorPerformanceBox = "rgba(255,99,132,0.2)";
var bordercolorPerformanceBox= "rgba(255,99,132,1)";
var hoverbgPerformanceBox =  "rgba(255,99,132,0.5)";
var hoverborderPerformanceBox = "rgba(255,99,132,1)";
var myChart1;
var myChart2;
var myChart3;
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
}

// function onChangePieChart() {
//
//     $("#dateFrom,#dateTo").datepicker().on('changeDate', function () {
//         findAll();
//     });
// }
function  renderChart1(dataJson) {
    var title=["กราฟแสดงปริมาณสินค้าเฉลี่ยรายตู้ ณ เวลาใดเวลาหนึ่ง"];
    var labelX = "จำนวนตู้";
    var labelY = "จำนวนสินค้า";
    // $.each(dataJson, function (k, v) {
    //     label.push(v.areaName);
    //     dataTest.push(v.sum);
    // });
        new Chart(document.getElementById("line_chart").getContext("2d"),
        getChartJsLine(title,labelX,labelY));
}


