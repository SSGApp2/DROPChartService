package com.soft.app.controller.rest;

import com.soft.app.entity.vChartPerfCountCargo;
import com.soft.app.entity.vChartPerfIncome;
import com.soft.app.repository.custom.vChartPerfRepoCustom;
import com.soft.app.repository.vChartPerformanceRepository;
import flexjson.JSONSerializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/vChartPerformance")
public class vChartPerformanceRestController {

    @Autowired
    vChartPerformanceRepository vChartPerformanceRepository;

    @Autowired
    vChartPerfRepoCustom vChartPerfRepoCustom;

//    @GetMapping(value = "/findByDatePerfIncome", headers = "Accept=application/json; charset=utf-8")
//    public String findByDatePerfIncome(@RequestParam("dateFrom")Long dateFrom,@RequestParam("dateTo")Long dateTo) {
//        List<vChartPerfIncome> result = vChartPerfRepoCustom.findByDatePerfIncome(dateFrom,dateTo);
//        return new JSONSerializer().deepSerialize(result);
//    }

    @GetMapping(value = "/findByDatePerfIncome", headers = "Accept=application/json; charset=utf-8")
    public String findByDatePerfCountCargo(@RequestParam("dateFrom")Long dateFrom,@RequestParam("dateTo")Long dateTo) {
        Map results = new HashMap();
        results.put("chart1",vChartPerfRepoCustom.findByDatePerfIncome(dateFrom,dateTo));
        results.put("chart2",vChartPerfRepoCustom.findByDatePerfCountCargo(dateFrom,dateTo));
        results.put("chart3",vChartPerfRepoCustom.findByDatePerfCountWeight(dateFrom,dateTo));

        return new JSONSerializer().deepSerialize(results);
    }
}
