package com.service;

import com.bean.StudentEmploymentInfo;

import java.util.List;

public interface IStudentEmploymentInfoService {

    public List<StudentEmploymentInfo> findAllStudentEmploymentInfo();

    public void insertStudentEmploymentInfo(StudentEmploymentInfo info);

    public void updateStudentEmploymentInfo(StudentEmploymentInfo info);
}
