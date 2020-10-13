package com.dao;


import com.bean.StudentEmploymentInfo;
import com.bean.StudentTermInfo;

import java.util.List;

public interface IStudentEmploymentInfoDao {

    public List<StudentEmploymentInfo> findAllStudentEmploymentInfo();

    public void insertStudentEmploymentInfo(StudentEmploymentInfo info);

    public void updateStudentEmploymentInfo(StudentEmploymentInfo info);

}
