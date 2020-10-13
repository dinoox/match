package com.controller;

import com.bean.Department;
import com.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

@Controller
public class DepartmentController {

    @Autowired
    private IDepartmentService departmentService;

    @RequestMapping(value = "/findAllDepartment",params = {"back"})
    public String findAllDepartment(Model model) {

        List<Department> departments = departmentService.findAllDepartment();

        for (Department department : departments) {
            System.out.println(department);
        }

        model.addAttribute("departments",departments);

        return "backstage/department/list";
    }

    @RequestMapping("/updateDepartment")
    public String updateDepartment(Department department) {

        departmentService.updateDepartment(department);

        return "redirect:/findAllDepartment?back=1";
    }

    @RequestMapping("/toAddDepartmentPage")
    public String toAddDepartmentPage() {
        return "backstage/department/add";
    }

    @RequestMapping("/toEditDepartmentPage")
    public String toEditDepartmentPage(String no,Model model) {

        Department department = departmentService.findDepartmentByNo(no);
        model.addAttribute("department",department);

        return "backstage/department/edit";
    }

}
