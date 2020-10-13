package com.service.impl;

import com.bean.StudentTermInfo;
import com.dao.IStudentTermInfoDao;
import com.service.IStudentTermInfoService;
import org.springframework.stereotype.Service;

@Service
public class StudentTermInfoServiceImpl implements IStudentTermInfoService {

    private IStudentTermInfoDao studentTermInfoDao;

    @Override
    public void insertStudentTermInfo(StudentTermInfo info) {
        studentTermInfoDao.insertStudentTermInfo(info);
    }
}
