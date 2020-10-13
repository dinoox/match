package com.bean;

import java.io.Serializable;

public class Student implements Serializable {

    private Integer id;
    private String no;
    private String name;
    private Integer age;
    private String sex;
    private String major;
    private String province;
    private String city;

    private Integer povertyLevel;
    private String admissionTime;
    private Double cardConsume;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getPovertyLevel() {
        return povertyLevel;
    }

    public void setPovertyLevel(Integer povertyLevel) {
        this.povertyLevel = povertyLevel;
    }

    public String getAdmissionTime() {
        return admissionTime;
    }

    public void setAdmissionTime(String admissionTime) {
        this.admissionTime = admissionTime;
    }

    public Double getCardConsume() {
        return cardConsume;
    }

    public void setCardConsume(Double cardConsume) {
        this.cardConsume = cardConsume;
    }

    @Override
    public String toString() {
        return "Student{" +
                "no='" + no + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                ", major='" + major + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                ", povertyLevel=" + povertyLevel +
                ", admissionTime='" + admissionTime + '\'' +
                ", cardConsume='" + cardConsume + '\'' +
                '}';
    }
}
