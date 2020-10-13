package com.dao;

import com.bean.Major;
import java.util.List;

public interface IMajorDao {

    public List<Major> findAllMajor(Integer startIndex);

    public List<Major> findAllMajorName();

    public Major findMajorByNo(String no);

    public void insertMajor(Major major);

    public void updateMajor(Major major);

    public void deleteMajorByNo(String no);
}
