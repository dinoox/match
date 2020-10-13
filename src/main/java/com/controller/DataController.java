package com.controller;

import com.bean.*;

import java.util.List;

import com.service.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class DataController {


    @Autowired
    private IDataService dataService;

    @Autowired
    private IMajorService majorService;

    @Autowired
    private IFeedbackService feedbackService;

    @Autowired
    private IProvinceService provinceService;

    @Autowired
    private IDepartmentService departmentService;



    /**
     * 查询指定年级所有学院学生数量
     * @param grade （年级）
     * @return 学院名称 + 学生数量
     */

    @GetMapping("/findAllDepartmentStudentNum")
    public List<Data> findAllDepartmentStudentNum(String grade){
        return dataService.findAllDepartmentStudentNum(grade);
    }

    /**
     * 查询指定年级所有学院男性学生数量
     * @param grade （年级）
     * @return 学院名称 + 男性学生数量
     */

    @GetMapping("/findAllDepartmentMaleNum")
    public List<Data> findAllDepartmentMaleNum(String grade){
        return dataService.findAllDepartmentMaleNum(grade);
    }

    /**
     * 查询指定年级所有学院女性学生数量
     * @param grade （年级）
     * @return 学院名称 + 女性学生数量
     */

    @GetMapping("/findAllDepartmentFemaleNum")
    public List<Data> findAllDepartmentFemaleNum(String grade){
        return dataService.findAllDepartmentFemaleNum(grade);
    }

    /**
     * 查询指定年级所有学院学生数量Top5
     * @param grade （年级）
     * @return 学院名称 + 学生数量
     */

    @GetMapping("/findAllDepartmentStudentNumTopFive")
    public List<Data> findAllDepartmentStudentNumTopFive(String grade){
        return dataService.findAllDepartmentStudentNumTopFive(grade);
    }

    /**
     * 查询指定年级前一半学院学生数量（9个学院）
     * @param grade （年级）
     * @return 学院名称 + 学生数量
     */

    @GetMapping("/findAllDepartmentStudentNumInterceptBefore")
    public List<Data> findAllDepartmentStudentNumInterceptBefore(String grade){
        return dataService.findAllDepartmentStudentNumInterceptBefore(grade);
    }

    /**
     * 查询指定年级后一半学院学生数量（9个学院）
     * @param grade （年级）
     * @return 学院名称 + 学生数量
     */

    @GetMapping("/findAllDepartmentStudentNumInterceptAfter")
    public List<Data> findAllDepartmentStudentNumInterceptAfter(String grade){
        return dataService.findAllDepartmentStudentNumInterceptAfter(grade);
    }

    /**
     * 查询指定年级所有省份男性学生数量
     * @param grade （年级）
     * @return 省份名称 + 男性学生数量
     */

    @GetMapping("/findAllProvinceMaleNum")
    public List<Data> findAllProvinceMaleNum(String grade){
        return dataService.findAllProvinceMaleNum(grade);
    }

    /**
     * 查询指定年级所有省份女性学生数量
     * @param grade （年级）
     * @return 省份名称 + 女性学生数量
     */

    @GetMapping("/findAllProvinceFemaleNum")
    public List<Data> findAllProvinceFemaleNum(String grade){
        return dataService.findAllProvinceFemaleNum(grade);
    }

    /**
     * 查询指定年级所有省份学生数量
     * @param grade （年级）
     * @return  省份名称 + 学生总数
     */

    @GetMapping("/findAllProvinceStudentNum")
    public List<Data> findAllProvinceStudentNum(String grade){
        return dataService.findAllProvinceStudentNum(grade);
    }

    /**
     * 查询指定年级指定省份的学生性别规模
     * @param grade （年级）
     * @param provinceName （省份名称）
     * @return  男性学生数量 + 女性学生数量 + 学生总数
     */

    @GetMapping("/findProvinceSexScale")
    public Data findProvinceSexScale(String grade,String provinceName) {

        Integer maleNum = dataService.findProvinceMaleNum(grade,provinceName);
        Integer femaleNum = dataService.findProvinceFemaleNum(grade,provinceName);
        Integer studentNum = dataService.findProvinceStudentNum(grade,provinceName);

        Data data = new Data();

        data.setMaleNum(maleNum);
        data.setFemaleNum(femaleNum);
        data.setStudentNum(studentNum);

        return data;
    }
    /**
     * 查询指定年级的在校生性别规模
     * @param grade （年级）
     * @return 男性学生数量 + 女性学生数量 + 学生总数
     */

    @GetMapping("/findSchoolSexScale")
    public Data findSchoolSexScale(String grade){

        Integer maleNum = dataService.findSchoolMaleNum(grade);
        Integer femaleNum = dataService.findSchoolFemaleNum(grade);
        Integer studentNum = dataService.findSchoolStudentNum(grade);

        Data data = new Data();

        data.setMaleNum(maleNum);
        data.setFemaleNum(femaleNum);
        data.setStudentNum(studentNum);

        return data;
    }

    /**
     * 查询指定年级指定城市的学生数量
     * @param grade （年级）
     * @param cityName （城市名称）
     * @return  城市名称 + 学生数量
     */

    @GetMapping("/findCityStudentNum")
    public List<Data> findCityStudentNum(String grade,String cityName){
        return dataService.findCityStudentNum(grade,cityName);
    }


    /**
     * 查询指定年级指定省份的所有城市男性学生数量
     * @param grade （年级）
     * @param provinceName （省份名称）
     * @return  城市名称 + 男性学生数量
     */

    @GetMapping("/findProvinceAllCityMaleNum")
    public List<Data> findProvinceAllCityMaleNum(String grade,String provinceName){
        return dataService.findProvinceAllCityMaleNum(grade,provinceName);
    }

    /**
     * 查询指定年级指定省份的所有城市女性学生数量
     * @param grade （年级）
     * @param provinceName （省份名称）
     * @return  城市名称 + 女性学生数量
     */

    @GetMapping("/findProvinceAllCityFemaleNum")
    public List<Data> findProvinceAllCityFemaleNum(String grade,String provinceName){
        return dataService.findProvinceAllCityFemaleNum(grade,provinceName);
    }

    /**
     * 查询指定年级指定省份所有城市学生数量
     * @param grade （年级）
     * @param provinceName （省份名称）
     * @return  城市名称 + 学生数量
     */

    @GetMapping("/findProvinceAllCityStudentNum")
    public List<Data> findProvinceAllCityStudentNum(String grade,String provinceName){
        return dataService.findProvinceAllCityStudentNum(grade,provinceName);
    }

    /**
     * 查询全国所有的省份
     * @return 全国所有省份
     */

    @GetMapping("/findAllProvince")
    public List<Province> findAllProvince(){
        return provinceService.findAllProvince();
    }

    @GetMapping("/findAllDepartment")
    public List<Department> findAllDepartment() {
        return departmentService.findAllDepartment();
    }

    @GetMapping("/findAllMajorName")
    public List<Major> findAllMajorName(){
        return majorService.findAllMajorName();
    }

    /**
     * 查询指定年级所有省份学生贫困规模
     * @param grade （年级）
     * @return 省份名称 + 一级贫困生数目 + 二级贫困生数目 + 三级贫困生数目 + 不贫困生数目
     */

    @GetMapping("/findAllProvincePovertyScale")
    public List<Data> findAllProvincePovertyScale(String grade){
        return dataService.findAllProvincePovertyScale(grade);
    }

    /**
     * 查询指定年级所有省份学生贫困规模（去除山东）
     * @param grade （年级）
     * @return 省份名称 + 一级贫困生数目 + 二级贫困生数目 + 三级贫困生数目 + 不贫困生数目
     */

    @GetMapping("/findAllProvincePovertyScaleExceptShanDong")
    public List<Data> findAllProvincePovertyScaleExceptShanDong(String grade){
        return dataService.findAllProvincePovertyScaleExceptShanDong(grade);
    }

    /**
     * 查询指定年级所有省份所有学生所有学期平均绩点高于xxx的学生数目
     * @param grade (年级)
     * @return 省份名称 + 优秀学生数目
     */

    @GetMapping("/findAllProvinceGoodStudentNum")
    public List<Data> findAllProvinceGoodStudentNum(String grade) {
        return dataService.findAllProvinceGoodStudentNum(grade);
    }

    /**
     * 查询指定年级所有学院学霸信息
     * @param grade （年级）
     * @return  院系 + 专业 + 学生姓名 + 学霸指数
     */

    @GetMapping("/findAllDepartmentGoodStudentInfo")
    public List<Data> findAllDepartmentGoodStudentInfo(String grade){
        return dataService.findAllDepartmentGoodStudentInfo(grade);
    }

    /**
     * 查询指定年级所有学院学霸数目
     * @param grade （年级）
     * @return  院系名称 + 学霸数目
     */

    @GetMapping("/findAllDepartmentGoodStudentNum")
    public List<Data> findAllDepartmentGoodStudentNum(String grade) {
        return dataService.findAllDepartmentGoodStudentNum(grade);
    }

    /**
     * 查询指定年级学习（学霸指数）前10名的学霸信息
     * @param grade （年级）
     * @return  学号 + 姓名 + 专业 + 学霸指数
     */

    @GetMapping("/findSchoolTopTenStudent")
    public List<Data> findSchoolTopTenStudent(String grade) {
        return dataService.findSchoolTopTenStudent(grade);
    }

    /**
     * 查询指定年级所有省就业学生数目
     * @param grade （年级）
     * @return  省份名称 + 学生数目
     */

    @GetMapping("/findSchoolAllProvinceEmploymentStudentNum")
    public List<Data> findSchoolAllProvinceEmploymentStudentNum(String grade) {
        return dataService.findSchoolAllProvinceEmploymentStudentNum(grade);
    }

    /**
     * 查询指定年级指定学院所有省就业学生数目
     * @param grade （年级）
     * @param departmentName （学院名称）
     * @return  省份名称 + 学生数目
     */

    @GetMapping("/findDepartmentAllProvinceEmploymentStudentNum")
    public List<Data> findDepartmentAllProvinceEmploymentStudentNum(String grade,String departmentName) {
        return dataService.findDepartmentAllProvinceEmploymentStudentNum(grade,departmentName);
    }

    /**
     * 查询指定年级指定专业所有省就业学生数目
     * @param grade （年级）
     * @param majorName （专业）
     * @return 省份名称 + 学生数目
     */

    @GetMapping("/findMajorAllProvinceEmploymentStudentNum")
    public List<Data> findMajorAllProvinceEmploymentStudentNum(String grade,String majorName) {
        return dataService.findMajorAllProvinceEmploymentStudentNum(grade,majorName);
    }

    /**
     * 查询指定年级学生的毕业岗位情况
     * @param grade （年级）
     * @return  岗位名称 + 学生数量
     */

    @GetMapping("/findSchoolAllVocationStudentNum")
    public List<Data> findSchoolAllVocationStudentNum(String grade) {
        return dataService.findSchoolAllVocationStudentNum(grade);
    }

    /**
     * 查询指定年级指定院系学生毕业岗位情况
     * @param grade （年级）
     * @param departmentName （学院名称）
     * @return  岗位名称 + 学生数目
     */

    @GetMapping("/findDepartmentAllVocationStudentNum")
    public List<Data> findDepartmentAllVocationStudentNum(String grade,String departmentName) {
        return dataService.findDepartmentAllVocationStudentNum(grade,departmentName);
    }

    /**
     * 查询指定年级指定专业学生毕业岗位情况
     * @param grade （年级）
     * @param majorName （专业名称）
     * @return  岗位名称 + 学生数目
     */

    @GetMapping("/findMajorAllVocationStudentNum")
    public List<Data> findMajorAllVocationStudentNum(String grade,String majorName) {
        return dataService.findMajorAllVocationStudentNum(grade,majorName);
    }

    /**
     * 查询指定年级所有学期的一卡通消费总额
     * @param grade （年级）
     * @return  学期名称 + 消费总额
     */

    @GetMapping("/findAllTermCardConsume")
    public List<Data> findAllTermCardConsume(String grade) {
        return dataService.findAllTermCardConsume(grade);
    }

    /**
     * 查询指定年级所有学期的男性一卡通消费总额
     * @param grade （年级）
     * @return  学期名称 + 消费总额
     */

    @GetMapping("/findAllTermMaleCardConsume")
    public List<Data> findAllTermMaleCardConsume(String grade){
        return dataService.findAllTermMaleCardConsume(grade);
    }

    /**
     * 查询指定年级所有学期的女性一卡通消费总额
     * @param grade （年级）
     * @return  学期名称 + 消费总额
     */

    @GetMapping("/findAllTermFemaleCardConsume")
    public List<Data> findAllTermFemaleCardConsume(String grade) {
        return dataService.findAllTermFemaleCardConsume(grade);
    }


    /**
     * 查询指定年级所有省所有学期的一卡通消费总额
     * @param grade （年级）
     * @return  省份名称 + 消费总额
     */

    @GetMapping("/findAllProvinceAllTermCardConsume")
    public List<Data> findAllProvinceAllTermCardConsume(String grade) {
        return dataService.findAllProvinceAllTermCardConsume(grade);
    }

    /**
     * 查询指定年级各省份招生计划图谱
     * @param grade （年级）
     * @return  省份名称 + 学生数目
     */

    @GetMapping("/findAllProvinceStudentRecruit")
    public List<Data> findAllProvinceStudentRecruit(String grade) {
        return dataService.findAllProvinceStudentRecruit(grade);
    }

    /**
     * 查询指定年级国外留学生招生计划
     * @param grade （年级）
     * @return  国家名称 + 学生数目
     */

    @GetMapping("/findAllForeignStudentRecruit")
    public List<Data> findAllForeignStudentRecruit(String grade) {
        return dataService.findAllForeignStudentRecruit(grade);
    }

    /**
     * 查点用户反馈
     * @return 用户反馈信息
     */

    @GetMapping("/findSomeFeedback")
    public List<Feedback> findSomeFeedback() {
        return feedbackService.findAllFeedback();
    }

}
