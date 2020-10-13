package com.service.impl;

import com.bean.Major;
import com.dao.IMajorDao;
import com.service.IMajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MajorServiceImpl implements IMajorService {

    @Autowired
    private IMajorDao majorDao;

    @Override
    public List<Major> findAllMajor(Integer startIndex) { return majorDao.findAllMajor(startIndex); }

    @Override
    public List<Major> findAllMajorName(){ return  majorDao.findAllMajorName();}

    @Override
    public Major findMajorByNo(String no) { return majorDao.findMajorByNo(no); }

    @Override
    public void insertMajor(Major major) { majorDao.insertMajor(major); }

    @Override
    public void updateMajor(Major major) { majorDao.updateMajor(major); }

    @Override
    public void deleteMajorByNo(String no) { majorDao.deleteMajorByNo(no); }
}

