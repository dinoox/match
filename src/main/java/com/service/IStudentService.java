package com.service;

import com.bean.Student;

import java.util.List;

public interface IStudentService {

    public void update(Student student);

    public List<Student> findAllStudent();

    public Student findStudentByNo(String no);

    public List<Student> findStudentByGrade(String grade);

    public List<Student> findStudentByMajor(String major);

    public List<Student> findStudentByProvince(String province);

    public void insertStudent(Student student);

    public void updateStudent(Student student);

    public void deleteStudentByNo(String no);



}
