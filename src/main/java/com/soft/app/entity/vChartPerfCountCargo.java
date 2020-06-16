package com.soft.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = {"id"})
@Table(name = "v_chart_perf_count_cargo")
public class vChartPerfCountCargo {

    @Id
    private Long id;
    private String areaName;
    private Double count;

    @Temporal(TemporalType.DATE)
    private Date docDate;

}
