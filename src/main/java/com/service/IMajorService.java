package com.service;

import com.bean.Major;

import java.util.List;

public interface IMajorService {

    public List<Major> findAllMajor(Integer startIndex);

    public List<Major> findAllMajorName();

    public Major findMajorByNo(String no);

    public void insertMajor(Major major);

    public void updateMajor(Major major);

    public void deleteMajorByNo(String no);
}
