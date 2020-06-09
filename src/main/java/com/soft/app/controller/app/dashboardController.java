package com.soft.app.controller.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/dashboard")
public class dashboardController {

    @GetMapping("/performance")
    public String dashboardPerformance (){
        return "dashboardPerformance";
    }
}
