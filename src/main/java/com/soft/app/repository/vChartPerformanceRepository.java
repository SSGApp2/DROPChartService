package com.soft.app.repository;

import com.soft.app.entity.vChartPerfIncome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface vChartPerformanceRepository extends JpaRepository<vChartPerfIncome,Long>,JpaSpecificationExecutor<vChartPerfIncome> {
}
