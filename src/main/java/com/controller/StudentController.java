package com.controller;

import com.bean.Major;
import com.bean.Poverty;
import com.bean.Province;
import com.bean.Student;
import com.dao.IMajorDao;
import com.service.IMajorService;
import com.service.IPovertyService;
import com.service.IProvinceService;
import com.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.net.http.HttpRequest;
import java.util.List;

@Controller
public class StudentController {

    @Autowired
    private IStudentService studentService;

    @Autowired
    private IMajorService majorService;

    @Autowired
    private IProvinceService provinceService;

    @Autowired
    private IPovertyService povertyService;

    @RequestMapping("/findAllStudent")
    public String findAllStudent(Model model) {

        List<Student> students =  studentService.findAllStudent();

        model.addAttribute("students",students);

        return "backstage/student/list";
    }

    @RequestMapping("/toConditionPage")
    public String toConditionPage(Model model) {

        List<Major> majors =  majorService.findAllMajorName();

        model.addAttribute("majors",majors);

        return "backstage/student/condition";
    }

    @RequestMapping("/findStudentByMajor")
    public String findStudentByMajor(String major,Model model) {

        List<Student> students =  studentService.findStudentByMajor(major);

        model.addAttribute("students",students);

        return "backstage/student/list";
    }

    @RequestMapping("/updateStudent")
    public String updateStudent(Student student, HttpServletRequest request) {

        studentService.updateStudent(student);

        return "redirect:/toConditionPage";
    }

    @RequestMapping("/toEditStudentPage")
    public String toEditStudentPage(String no,Model model) {

        Student student = studentService.findStudentByNo(no);
        List<Major> majors =  majorService.findAllMajorName();
        List<Province> provinces = provinceService.findAllProvince();
        List<Poverty> allPoverty = povertyService.findAllPoverty();


        model.addAttribute("majors",majors);
        model.addAttribute("student",student);
        model.addAttribute("provinces",provinces);
        model.addAttribute("allPoverty",allPoverty);


        return "backstage/student/edit";
    }

    @ResponseBody
    @RequestMapping("/edit")
    public List<Student> edit() {

        String major = "农学专业";

        Integer majorNum = 1;

        Integer studentNum = 0;

        List<Student> students =  studentService.findAllStudent();

        for(int i = 0;i<students.size();i++){

            String finalStudentNum = null;
            String finalMajorNum = null;
            String major1 = students.get(i).getMajor();

            if(!major.equals(major1)) {
                majorNum++;
                major = major1;
                studentNum = 1;
            } else {
                studentNum++;
            }

            if(majorNum < 10 ) {
                finalMajorNum = "0" + String.valueOf(majorNum);
            }else {
                finalMajorNum = String.valueOf(majorNum);
            }

            if(studentNum < 10) {
                finalStudentNum = "000" + String.valueOf(studentNum);
            } else if (studentNum <100) {
                finalStudentNum = "00" + String.valueOf(studentNum);
            }


            students.get(i).setNo("2018"+finalMajorNum+finalStudentNum);
            System.out.println(students.get(i).getId()+ "  " +students.get(i));
            studentService.updateStudent(students.get(i));
        }

        return students;
    }


}
