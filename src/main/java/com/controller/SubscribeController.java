package com.controller;

import com.bean.Department;
import com.bean.Subscribe;
import com.service.IDepartmentService;
import com.service.ISubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class SubscribeController {

    @Autowired
    private ISubscribeService subscribeService;

    @RequestMapping("/insertSubscribe")
    public String insertSubscribe(Subscribe subscribe, HttpSession session) {
        subscribeService.insertSubscribe(subscribe);

        session.setAttribute("subscribe","yes");

        return "redirect:/index.html#subscribe";
    }

}
