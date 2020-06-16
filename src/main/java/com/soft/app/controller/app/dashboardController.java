package com.soft.app.controller.app;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/dashboard")
public class dashboardController {

    @GetMapping("/performance")
    public String dashboardPerformance(Model ui){
        ui.addAttribute("statusChart","1");
        return "dashboardPerformance";
    }

    @GetMapping("/performanceBox")
    public String dashboardPerformanceBox(Model ui){
        ui.addAttribute("statusChart","2");
        return "dashboardPerformanceBox";
    }

    @GetMapping("/performanceTime")
    public String dashboardPerformanceBoxTime(Model ui){
        ui.addAttribute("statusChart","3");
        return "dashboardPerformanceBoxTime";
    }

    @GetMapping("/performanceUse")
    public String dashboardPerformanceBoxUse(Model ui){
        ui.addAttribute("statusChart","4");
        return "dashboardPerformanceBoxUse";
    }
    @GetMapping("/performanceDailySale")
    public String dashboardPerformanceDailySale(Model ui){
        ui.addAttribute("statusChart","4");
        return "dashboardPerformanceDailySale";
    }
}
