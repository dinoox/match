package com.service.impl;

import com.bean.StudentEmploymentInfo;
import com.dao.IStudentEmploymentInfoDao;
import com.service.IStudentEmploymentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentEmploymentInfoServiceImpl implements IStudentEmploymentInfoService {

    @Autowired
    private IStudentEmploymentInfoDao studentEmploymentInfoDao;

    @Override
    public List<StudentEmploymentInfo> findAllStudentEmploymentInfo() {
        return studentEmploymentInfoDao.findAllStudentEmploymentInfo();
    }

    @Override
    public void insertStudentEmploymentInfo(StudentEmploymentInfo info) {
        studentEmploymentInfoDao.insertStudentEmploymentInfo(info);
    }

    @Override
    public void updateStudentEmploymentInfo(StudentEmploymentInfo info) {
        studentEmploymentInfoDao.updateStudentEmploymentInfo(info);
    }
}
