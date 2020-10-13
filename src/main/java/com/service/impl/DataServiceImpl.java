package com.service.impl;

import com.bean.Data;
import com.dao.IDataDao;
import com.service.IDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataServiceImpl implements IDataService {

    @Autowired
    private IDataDao dataDao;

    @Override
    public List<Data> findAllDepartmentStudentNum(String grade) {
        return dataDao.findAllDepartmentStudentNum(grade);
    }

    @Override
    public List<Data> findAllDepartmentStudentNumTopFive(String grade) {
        return dataDao.findAllDepartmentStudentNumTopFive(grade);
    }

    @Override
    public List<Data> findAllDepartmentStudentNumInterceptBefore(String grade) {
        return dataDao.findAllDepartmentStudentNumInterceptBefore(grade);
    }

    @Override
    public List<Data> findAllDepartmentStudentNumInterceptAfter(String grade) {
        return dataDao.findAllDepartmentStudentNumInterceptAfter(grade);
    }

    @Override
    public List<Data> findAllDepartmentGoodStudentInfo(String grade) {
        return dataDao.findAllDepartmentGoodStudentInfo(grade);
    }

    @Override
    public List<Data> findAllDepartmentGoodStudentNum(String grade) {
        return dataDao.findAllDepartmentGoodStudentNum(grade);
    }

    @Override
    public List<Data> findAllProvinceMaleNum(String grade) {
        return dataDao.findAllProvinceMaleNum(grade);
    }

    @Override
    public List<Data> findAllProvinceFemaleNum(String grade) {
        return dataDao.findAllProvinceFemaleNum(grade);
    }

    @Override
    public List<Data> findAllDepartmentMaleNum(String grade) {
        return dataDao.findAllDepartmentMaleNum(grade);
    }

    @Override
    public List<Data> findAllDepartmentFemaleNum(String grade) {
        return dataDao.findAllDepartmentFemaleNum(grade);
    }

    @Override
    public List<Data> findAllProvinceStudentNum(String grade) {
        return dataDao.findAllProvinceStudentNum(grade);
    }

    @Override
    public Integer findProvinceMaleNum(String grade, String provinceName) {
        return dataDao.findProvinceMaleNum(grade, provinceName);
    }

    @Override
    public Integer findProvinceFemaleNum(String grade, String provinceName) {
        return dataDao.findProvinceFemaleNum(grade, provinceName);
    }

    @Override
    public Integer findProvinceStudentNum(String grade, String provinceName) {
        return dataDao.findProvinceStudentNum(grade, provinceName);
    }

    @Override
    public List<Data> findCityStudentNum(String grade, String cityName) {
        return dataDao.findCityStudentNum(grade, cityName);
    }

    @Override
    public List<Data> findProvinceAllCityMaleNum(String grade, String provinceName) {
        return dataDao.findProvinceAllCityMaleNum(grade, provinceName);
    }

    @Override
    public List<Data> findProvinceAllCityFemaleNum(String grade, String provinceName) {
        return dataDao.findProvinceAllCityFemaleNum(grade, provinceName);
    }

    @Override
    public List<Data> findProvinceAllCityStudentNum(String grade, String provinceName) {
        return dataDao.findProvinceAllCityStudentNum(grade, provinceName);
    }

    @Override
    public List<Data> findAllProvincePovertyScale(String grade) {
        return dataDao.findAllProvincePovertyScale(grade);
    }

    @Override
    public List<Data> findAllProvincePovertyScaleExceptShanDong(String grade) {
        return dataDao.findAllProvincePovertyScaleExceptShanDong(grade);
    }

    @Override
    public List<Data> findAllProvinceGoodStudentNum(String grade) {
        return dataDao.findAllProvinceGoodStudentNum(grade);
    }

    @Override
    public Integer findSchoolMaleNum(String grade) {
        return dataDao.findSchoolMaleNum(grade);
    }

    @Override
    public Integer findSchoolFemaleNum(String grade) {
        return dataDao.findSchoolFemaleNum(grade);
    }

    @Override
    public Integer findSchoolStudentNum(String grade) {
        return dataDao.findSchoolStudentNum(grade);
    }

    @Override
    public List<Data> findSchoolTopTenStudent(String grade) {
        return dataDao.findSchoolTopTenStudent(grade);
    }

    @Override
    public List<Data> findSchoolAllProvinceEmploymentStudentNum(String grade) {
        return dataDao.findSchoolAllProvinceEmploymentStudentNum(grade);
    }

    @Override
    public List<Data> findDepartmentAllProvinceEmploymentStudentNum(String grade, String departmentName) {
        return dataDao.findDepartmentAllProvinceEmploymentStudentNum(grade,departmentName);
    }

    @Override
    public List<Data> findMajorAllProvinceEmploymentStudentNum(String grade, String majorName) {
        return dataDao.findMajorAllProvinceEmploymentStudentNum(grade,majorName);
    }

    @Override
    public List<Data> findSchoolAllVocationStudentNum(String grade) {
        return dataDao.findSchoolAllVocationStudentNum(grade);
    }

    @Override
    public List<Data> findDepartmentAllVocationStudentNum(String grade, String departmentName) {
        return dataDao.findDepartmentAllVocationStudentNum(grade,departmentName);
    }

    @Override
    public List<Data> findMajorAllVocationStudentNum(String grade, String majorName) {
        return dataDao.findMajorAllVocationStudentNum(grade,majorName);
    }

    @Override
    public List<Data> findAllTermCardConsume(String grade) {
        return dataDao.findAllTermCardConsume(grade);
    }

    @Override
    public List<Data> findAllTermMaleCardConsume(String grade) {
        return dataDao.findAllTermMaleCardConsume(grade);
    }

    @Override
    public List<Data> findAllTermFemaleCardConsume(String grade) {
        return dataDao.findAllTermFemaleCardConsume(grade);
    }

    @Override
    public List<Data> findAllProvinceAllTermCardConsume(String grade) {
        return dataDao.findAllProvinceAllTermCardConsume(grade);
    }

    @Override
    public List<Data> findAllProvinceStudentRecruit(String grade) {
        return dataDao.findAllProvinceStudentRecruit(grade);
    }

    @Override
    public List<Data> findAllForeignStudentRecruit(String grade) {
        return dataDao.findAllForeignStudentRecruit(grade);
    }


}
