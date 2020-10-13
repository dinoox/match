package com.controller;

import com.bean.Feedback;
import com.service.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class FeedbackController {

    @Autowired
    private IFeedbackService feedbackService;


    @RequestMapping("/findAllFeedback")
    public List<Feedback> findAllFeedback() {
        return feedbackService.findAllFeedback();
    }

    @RequestMapping("/insertFeedback")
    public String insertFeedback(Feedback feedback, HttpSession session) {

        String time = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
        feedback.setTime(time);

        feedbackService.insertFeedback(feedback);

        session.setAttribute("contact","yes");

        return "redirect:/index.html#contact";
    }

    @RequestMapping("/updateFeedback")
    public void updateFeedback(Feedback feedback) {
        feedbackService.updateFeedback(feedback);
    }

    @RequestMapping("/deleteFeedbackByPhone")
    public void deleteFeedbackByPhone(String phone) {
        feedbackService.deleteFeedbackByPhone(phone);
    }


}
