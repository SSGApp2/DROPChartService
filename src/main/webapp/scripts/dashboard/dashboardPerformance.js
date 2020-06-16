var bgcolorPerformance1=["rgb(58,206,58)", "rgb(78,211,78)", "rgb(99,216,99)", "rgb(119,221,119)", "rgb(139,226,139)", "rgb(160,231,160)", "rgb(180,236,180)"];
var bgcolorPerformance2=["#fa9200", "#ff9e14", "#ffa82e", "#ffb347", "#ffbe61", "#ffc87a", "#ffd394"];
var bgcolorPerformance3=["#7ea4b3", "#8eafbc", "#9ebbc6", "#aec6cf", "#bed1d8", "#cedde2", "#dee8eb"];
var myChart1;
var myChart2;
var myChart3;
jQuery(document).ready(function () {
    findAll();

});

function findAll() {
    onChangePieChart();
    AjaxUtil.get('/vChartPerformance/findByDatePerfIncome', {
        dateFrom: DateUtil.coverStringToDate($("#dateFrom").val(), 'TH'),
        dateTo: DateUtil.coverStringToDate($("#dateTo").val(), 'TH')
    }).always(function (data, status, xhr) {
        if (xhr.status == 200) {
            var dataJson = JsonUtil.tryParseJSON(xhr.responseText);
            renderChart1(dataJson.chart1);
            renderChart2(dataJson.chart2);
            renderChart3(dataJson.chart3);

        }
    });
}

function onChangePieChart() {

    $("#dateFrom,#dateTo").datepicker().on('changeDate', function () {
        findAll();
    });
}
function  renderChart1(dataJson) {
    var label = [];
    var dataTest = [];
    var title = ["รายได้แยกตามภาค"];
    $.each(dataJson, function (k, v) {
        label.push(v.areaName);
        dataTest.push(v.sum);
    });
    if(myChart1){
        myChart1.destroy();
    }
    myChart1 =   new Chart(document.getElementById("pie_chart1").getContext("2d"), getChartJsPie(label, dataTest, title, bgcolorPerformance1));
}
function  renderChart2(dataJson) {
    var label = [];
    var dataTest = [];
    var title = ["จำนวนสินค้าแยกตามภาค"];
    $.each(dataJson, function (k, v) {
        label.push(v.areaName);
        dataTest.push(v.count);
    });
    if(myChart2){
        myChart2.destroy();
    }
    myChart2 = new Chart(document.getElementById("pie_chart2").getContext("2d"), getChartJsPie(label, dataTest, title, bgcolorPerformance2));
}
function  renderChart3(dataJson) {
    var label = [];
    var dataTest = [];
    var title = ["จำนวนน้ำหนักแยกตามภาค"];
    $.each(dataJson, function (k, v) {
        label.push(v.areaName);
        dataTest.push(v.sum);
    });
    if(myChart3){
        myChart3.destroy();
    }
    myChart3 =   new Chart(document.getElementById("pie_chart3").getContext("2d"), getChartJsPie(label, dataTest, title, bgcolorPerformance3));
}


