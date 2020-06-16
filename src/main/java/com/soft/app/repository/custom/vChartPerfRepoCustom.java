package com.soft.app.repository.custom;

import com.soft.app.entity.vChartPerfCountCargo;
import com.soft.app.entity.vChartPerfIncome;

import java.util.Date;
import java.util.List;
import java.util.Map;

public interface vChartPerfRepoCustom {

     List<Map>  findByDatePerfIncome(Long dateFrom, Long dateTo);
     List<Map>  findByDatePerfCountCargo(Long dateFrom, Long dateTo);
     List<Map>  findByDatePerfCountWeight(Long dateFrom, Long dateTo);
}
