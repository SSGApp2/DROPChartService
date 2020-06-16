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
@Table(name = "v_chart_perf_count_weight")
public class vChartPerfCountWeight {

    @Id
    private Long id;
    private String areaName;
    private Double sum;

    @Temporal(TemporalType.DATE)
    private Date docDate;

}
