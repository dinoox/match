package com.controller;

import com.bean.Department;
import com.bean.Major;
import com.service.IDepartmentService;
import com.service.IMajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

@Controller
public class MajorController {

    @Autowired
    private IMajorService majorService;

    @Autowired
    private IDepartmentService departmentService;


    @RequestMapping("/findAllMajor")
    public String findAllMajor(Integer startIndex,Model model) {

        startIndex = startIndex == null ? 0 : startIndex;
        List<Major> majors = majorService.findAllMajor(startIndex);
        model.addAttribute("majors",majors);
        return "backstage/major/list";
    }

    @RequestMapping("/updateMajor")
    public String updateMajor(Major major,Model model) {

        majorService.updateMajor(major);
        return "redirect:/findAllMajor";
    }


    @RequestMapping("/toEditMajorPage")
    public String toEditMajorPage(String no,Model model) {

        Major major = majorService.findMajorByNo(no);

        List<Department> departments = departmentService.findAllDepartment();

        model.addAttribute("major",major);
        model.addAttribute("departments",departments);

        return "backstage/major/edit";
    }
}
