package com.bean;

import java.io.Serializable;

public class Data implements Serializable {

    private Integer maleNum;
    private Integer femaleNum;
    private Integer studentNum;

    private String studentName;
    private String termName;
    private String majorName;
    private String departmentName;
    private String provinceName;
    private String cityName;
    private String vocationName;


    private Double studentScore;
    private String studentNo;
    private Double cardConsume;


    private String povertyZeroStudentNum;
    private String povertyOneStudentNum;
    private String povertyTwoStudentNum;
    private String povertyThreeStudentNum;


    public String getStudentNo() { return studentNo; }

    public void setStudentNo(String studentNo) { this.studentNo = studentNo; }

    public Double getStudentScore() { return studentScore; }

    public void setStudentScore(Double studentScore) { this.studentScore = studentScore; }

    public Integer getMaleNum() { return maleNum; }

    public void setMaleNum(Integer maleNum) { this.maleNum = maleNum; }

    public Integer getFemaleNum() { return femaleNum; }

    public void setFemaleNum(Integer femaleNum) { this.femaleNum = femaleNum; }

    public Integer getStudentNum() { return studentNum; }

    public void setStudentNum(Integer studentNum) { this.studentNum = studentNum; }

    public String getDepartmentName() { return departmentName; }

    public void setDepartmentName(String departmentName) { this.departmentName = departmentName; }

    public String getProvinceName() { return provinceName; }

    public void setProvinceName(String provinceName) { this.provinceName = provinceName; }

    public String getCityName() { return cityName; }

    public void setCityName(String cityName) { this.cityName = cityName; }

    public String getTermName() { return termName; }

    public void setTermName(String termName) { this.termName = termName; }

    public Double getCardConsume() { return cardConsume; }

    public void setCardConsume(Double cardConsume) { this.cardConsume = cardConsume; }

    public String getStudentName() { return studentName; }

    public void setStudentName(String studentName) { this.studentName = studentName; }

    public String getMajorName() { return majorName; }

    public void setMajorName(String majorName) { this.majorName = majorName; }

    public String getPovertyZeroStudentNum() { return povertyZeroStudentNum; }

    public String getVocationName() { return vocationName; }

    public void setVocationName(String vocationName) { this.vocationName = vocationName; }

    public void setPovertyZeroStudentNum(String povertyZeroStudentNum) { this.povertyZeroStudentNum = povertyZeroStudentNum; }

    public String getPovertyOneStudentNum() { return povertyOneStudentNum; }

    public void setPovertyOneStudentNum(String povertyOneStudentNum) { this.povertyOneStudentNum = povertyOneStudentNum; }

    public String getPovertyTwoStudentNum() { return povertyTwoStudentNum; }

    public void setPovertyTwoStudentNum(String povertyTwoStudentNum) { this.povertyTwoStudentNum = povertyTwoStudentNum; }

    public String getPovertyThreeStudentNum() { return povertyThreeStudentNum; }

    public void setPovertyThreeStudentNum(String povertyThreeStudentNum) { this.povertyThreeStudentNum = povertyThreeStudentNum; }
}
