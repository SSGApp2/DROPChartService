package com.soft.app.repository.custom.impl;

import com.soft.app.entity.vChartPerfCountCargo;
import com.soft.app.entity.vChartPerfCountWeight;
import com.soft.app.entity.vChartPerfIncome;
import com.soft.app.repository.custom.vChartPerfRepoCustom;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Repository
public class vChartPerfRepoCustomImpl implements vChartPerfRepoCustom {

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public List<Map> findByDatePerfIncome(Long dateFrom, Long dateTo) {
        LOGGER.info("dateFrom = {}",dateFrom);
        LOGGER.info("dateTo : {}",dateTo);

        Criteria criteria = ((Session) entityManager.getDelegate()).createCriteria(vChartPerfIncome.class);
        ProjectionList projectionList = Projections.projectionList();

        if(dateFrom != null){
            Date dateFromLongToDate = new Date(dateFrom);
            criteria.add(Restrictions.ge("docDate", dateFromLongToDate));

        }
        if(dateTo != null){
            Date dateToLongToDate = new Date(dateTo);
            criteria.add(Restrictions.le("docDate", dateToLongToDate));
        }

        projectionList.add(Projections.groupProperty("areaName"), "areaName");
        projectionList.add(Projections.sum("sum"), "sum");
        criteria.setProjection(projectionList);
        criteria.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP); //TOMAP
        criteria.addOrder(Order.asc("sum"));
        return criteria.list();
    }

    @Override
    public List<Map> findByDatePerfCountCargo(Long dateFrom, Long dateTo) {
        LOGGER.info("dateFrom = {}",dateFrom);
        LOGGER.info("dateTo : {}",dateTo);

        Criteria criteria = ((Session) entityManager.getDelegate()).createCriteria(vChartPerfCountCargo.class);
        ProjectionList projectionList = Projections.projectionList();

        if(dateFrom != null){
            Date dateFromLongToDate = new Date(dateFrom);
            criteria.add(Restrictions.ge("docDate", dateFromLongToDate));

        }
        if(dateTo != null){
            Date dateToLongToDate = new Date(dateTo);
            criteria.add(Restrictions.le("docDate", dateToLongToDate));
        }

        projectionList.add(Projections.groupProperty("areaName"), "areaName");
        projectionList.add(Projections.sum("count"), "count");
        criteria.setProjection(projectionList);
        criteria.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP); //TOMAP
        criteria.addOrder(Order.asc("count"));
        return criteria.list();
    }

    @Override
    public List<Map> findByDatePerfCountWeight(Long dateFrom, Long dateTo) {
        LOGGER.info("dateFrom = {}",dateFrom);
        LOGGER.info("dateTo : {}",dateTo);

        Criteria criteria = ((Session) entityManager.getDelegate()).createCriteria(vChartPerfCountWeight.class);
        ProjectionList projectionList = Projections.projectionList();

        if(dateFrom != null){
            Date dateFromLongToDate = new Date(dateFrom);
            criteria.add(Restrictions.ge("docDate", dateFromLongToDate));

        }
        if(dateTo != null){
            Date dateToLongToDate = new Date(dateTo);
            criteria.add(Restrictions.le("docDate", dateToLongToDate));
        }

        projectionList.add(Projections.groupProperty("areaName"), "areaName");
        projectionList.add(Projections.sum("sum"), "sum");
        criteria.setProjection(projectionList);
        criteria.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP); //TOMAP
        criteria.addOrder(Order.asc("sum"));
        return criteria.list();
    }
}
