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
    var dataTest = [200,190,180, 150, 130, 120, 110,100,85,70];
    // var title = ["รายได้แยกตามภาค"];
    var title=["แสดงรายการตู้ที่มีการใช้งานมาก 10 อันดับแรก"];
    var labelX = "น้ำหนักพัสดุ";
    var labelY = "จำนวนตู้";
    // $.each(dataJson, function (k, v) {
    //     label.push(v.areaName);
    //     dataTest.push(v.sum);
    // });
    if(myChart1){
        myChart1.destroy();
    }
   myChart1 = new Chart(document.getElementById("horizontal_chartUse").getContext("2d"),
        getChartJsHorizontalBar(label, dataTest, title, bgcolorPerformanceBox,bordercolorPerformanceBox,labelX,labelY,hoverbgPerformanceBox,hoverborderPerformanceBox));
}
function  renderChart2(dataJson) {
    // var label = [];
    var label = [ "ตู้ที่11", "ตู้ที่12", "ตู้ที่13", "ตู้ที่14", "ตู้ที่15", "ตู้ที่16", "ตู้ที่17","ตู้ที่18","ตู้ที่19","ตู้ที่20"];
    // var dataTest = [];
    var dataTest = [2.00,1.90,1.80, 1.50, 1.30, 1.20, 1.10,1.00,0.85,0.70];
    // var title = ["รายได้แยกตามภาค"];
    var title=["แสดงรายการตู้ที่มีการใช้งานน้อย 10 อันดับแรก"];
    var labelX = "น้ำหนักพัสดุ";
    var labelY = "จำนวนตู้";
    // $.each(dataJson, function (k, v) {
    //     label.push(v.areaName);
    //     dataTest.push(v.sum);
    // });
    if(myChart2){
        myChart2.destroy();
    }
  myChart2 =  new Chart(document.getElementById("horizontal_chartUse2").getContext("2d"),
        getChartJsHorizontalBar(label, dataTest, title, bgcolorPerformanceBox,bordercolorPerformanceBox,labelX,labelY,hoverbgPerformanceBox,hoverborderPerformanceBox));
}
function  renderChart3(dataJson) {
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


