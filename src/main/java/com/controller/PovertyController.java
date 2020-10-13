package com.controller;

import com.bean.Poverty;
import com.service.IPovertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class PovertyController {

    @Autowired
    private IPovertyService povertyService;

    @RequestMapping("/findAllPoverty")
    public String findAllPoverty(Model model) {

        List<Poverty> allPoverty = povertyService.findAllPoverty();
        model.addAttribute("allPoverty",allPoverty);

        return "backstage/poverty/list";
    }

    @RequestMapping("/updatePoverty")
    public String updatePoverty(Poverty poverty) {

        povertyService.updatePoverty(poverty);

        return "redirect:/findAllPoverty";
    }

    @RequestMapping("/insertPoverty")
    public String insertPoverty(Poverty poverty) {

        povertyService.insertPoverty(poverty);

        return "redirect:/findAllPoverty";
    }

    @RequestMapping("/deletePovertyByLevel")
    public String deletePovertyByLevel(Integer level) {

        povertyService.deletePovertyByLevel(level);

        return "redirect:/findAllPoverty";
    }

    @RequestMapping("/toEditPovertyPage")
    public String toEditPovertyPage(Integer level,Model model) {

        Poverty poverty = povertyService.findPovertyByLevel(level);
        model.addAttribute("poverty",poverty);

        return "backstage/poverty/edit";
    }

    @RequestMapping("/toAddPovertyPage")
    public String toAddPovertyPage() {

        return "backstage/poverty/add";
    }
}
