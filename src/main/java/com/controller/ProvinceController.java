package com.controller;

import com.bean.Poverty;
import com.bean.Province;
import com.service.IPovertyService;
import com.service.IProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/province")
public class ProvinceController {

    @Autowired
    private IProvinceService provinceService;

    @RequestMapping("/findAllProvince")
    public String findAllProvince(Model model) {

        List<Province> provinces = provinceService.findAllProvince();
        model.addAttribute("provinces",provinces);

        return "backstage/province/list";
    }

}
