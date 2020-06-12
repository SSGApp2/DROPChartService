package com.soft.app.spring.configuration;

import com.soft.app.constant.ServerConstant;

import com.soft.app.util.BeanUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {
    private static final Logger LOGGER = LogManager.getLogger(ApplicationStartup.class);



    @Override
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
        LOGGER.info("ApplicationStartup.....!");
        LOGGER.info("Swagger UI : /swagger-ui.html");
        LOGGER.info("Spring Data REST : /rest");

//        Demo
//        appParameterRepository.deleteAll();
//        AppParameter appParameter=new AppParameter();
//        appParameter.setCode("50");
//        appParameter.setParameterDescription("ConfigForApplication");
//
//        Set<ParameterDetail> parameterDetails=new HashSet<>();
//        ParameterDetail parameterDetail=new ParameterDetail();
//        parameterDetail.setAppParameter(appParameter);
//        parameterDetail.setCode("01");
//        parameterDetail.setParameterValue1("EngineServer");
//        parameterDetail.setParameterValue2("localhost:8888");
//        parameterDetails.add(parameterDetail);
//        appParameter.setParameterDetails(parameterDetails);
//        appParameterRepository.save(appParameter);


    }

}
