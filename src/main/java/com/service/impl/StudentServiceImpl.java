package com.service.impl;

import com.bean.Student;
import com.dao.IStudentDao;
import com.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentServiceImpl implements IStudentService {

    @Autowired
    private IStudentDao studentDao;

    @Override
    public void update(Student student) { studentDao.update(student); }

    @Override
    public List<Student> findAllStudent() { return studentDao.findAllStudent(); }

    @Override
    public Student findStudentByNo(String no) {
        return studentDao.findStudentByNo(no);
    }

    @Override
    public List<Student> findStudentByGrade(String grade) { return studentDao.findStudentByGrade(grade); }

    @Override
    public List<Student> findStudentByMajor(String major) { return studentDao.findStudentByMajor(major); }

    @Override
    public List<Student> findStudentByProvince(String province) { return studentDao.findStudentByProvince(province); }

    @Override
    public void insertStudent(Student student) { studentDao.insertStudent(student); }

    @Override
    public void updateStudent(Student student) { studentDao.updateStudent(student); }

    @Override
    public void deleteStudentByNo(String no) { studentDao.deleteStudentByNo(no); }


}
