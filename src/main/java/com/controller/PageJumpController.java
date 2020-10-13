package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageJumpController {

    @GetMapping("/toCardConsumePage")
    public String toCardConsumePage(){
        return "forestage/cardConsume";
    }

    @GetMapping("/toEmploymentInfoPage")
    public String toEmploymentInfoPage(){
        return "forestage/employmentInfo";
    }

    @GetMapping("/toGoodStudentPage")
    public String toGoodStudentPage(){
        return "forestage/goodStudent";
    }

    @GetMapping("/toRecruitInfoPage")
    public String toRecruitInfoPage(){
        return "forestage/recruitInfo";
    }

    @GetMapping("/toSexRatePage")
    public String toSexRatePage(){
        return "forestage/sexRate";
    }

    @GetMapping("/toStudentNumPage")
    public String toStudentNumPage(){
        return "forestage/studentNum";
    }

    @GetMapping("/toStudentSourcePage")
    public String toStudentSourcePage(){
        return "forestage/studentSource";
    }


}
