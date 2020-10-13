package com.dao;

import com.bean.Data;

import java.util.List;

public interface IDataDao {

    public List<Data> findAllDepartmentStudentNum(String grade);

    public List<Data> findAllDepartmentStudentNumTopFive(String grade);

    public List<Data> findAllDepartmentStudentNumInterceptBefore(String grade);

    public List<Data> findAllDepartmentStudentNumInterceptAfter(String grade);

    public List<Data> findAllDepartmentGoodStudentInfo(String grade);

    public List<Data> findAllDepartmentGoodStudentNum(String grade);



    public List<Data> findAllProvinceMaleNum(String grade);

    public List<Data> findAllProvinceFemaleNum(String grade);

    public List<Data> findAllDepartmentMaleNum(String grade);

    public List<Data> findAllDepartmentFemaleNum(String grade);

    public List<Data> findAllProvinceStudentNum(String grade);

    public Integer findProvinceMaleNum(String grade,String provinceName);

    public Integer findProvinceFemaleNum(String grade,String provinceName);

    public Integer findProvinceStudentNum(String grade,String provinceName);



    public List<Data> findCityStudentNum(String grade,String cityName);

    public List<Data> findProvinceAllCityMaleNum(String grade,String provinceName);

    public List<Data> findProvinceAllCityFemaleNum(String grade,String provinceName);

    public List<Data> findProvinceAllCityStudentNum(String grade,String provinceName);



    public List<Data> findAllProvincePovertyScale(String grade);

    public List<Data> findAllProvinceGoodStudentNum(String grade);

    public List<Data> findAllProvincePovertyScaleExceptShanDong(String grade);


    public Integer findSchoolMaleNum(String grade);

    public Integer findSchoolFemaleNum(String grade);

    public Integer findSchoolStudentNum(String grade);

    public List<Data> findSchoolTopTenStudent(String grade);



    public List<Data> findSchoolAllProvinceEmploymentStudentNum(String grade);

    public List<Data> findDepartmentAllProvinceEmploymentStudentNum(String grade,String departmentName);

    public List<Data> findMajorAllProvinceEmploymentStudentNum(String grade, String majorName);


    public List<Data> findSchoolAllVocationStudentNum(String grade);

    public List<Data> findDepartmentAllVocationStudentNum(String grade,String departmentName);

    public List<Data> findMajorAllVocationStudentNum(String grade,String majorName);



    public List<Data> findAllTermCardConsume(String grade);

    public List<Data> findAllTermMaleCardConsume(String grade);

    public List<Data> findAllTermFemaleCardConsume(String grade);

    public List<Data> findAllProvinceAllTermCardConsume(String grade);



    public List<Data> findAllProvinceStudentRecruit(String grade);

    public List<Data> findAllForeignStudentRecruit(String grade);
}
