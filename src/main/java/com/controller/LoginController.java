package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;


@Controller
public class LoginController {

    @RequestMapping("/adminLogin")
    public String login(String username, String password, Model model, HttpSession session) {

        if(username.equals("admin")  && password.equals("12345")) {

            session.setAttribute("loginUser",username);

            return "redirect:/findAllDepartment?back=1";
        }

        model.addAttribute("message","用户名或者密码错误!");

        return "login/adminLogin";
    }

    @RequestMapping("/userLogin")
    public String userLogin(String username, String password, Model model, HttpSession session) {

        session.setAttribute("loginUser",username);
        return "forestage/studentNum";

    }

    @RequestMapping("/toAdminLoginPage")
    public String toAdminLoginPage() {
        return "login/adminLogin";
    }

    @RequestMapping("/toUserLoginPage")
    public String toUserLoginPage() {
        return "login/userLogin";
    }

}
