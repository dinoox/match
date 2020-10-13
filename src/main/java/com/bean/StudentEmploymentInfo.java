package com.bean;

import java.io.Serializable;

public class StudentEmploymentInfo implements Serializable {

    private String no;
    private String vocation;
    private String province;
    private String city;


    public String getNo() { return no; }

    public void setNo(String no) { this.no = no; }

    public String getVocation() { return vocation; }

    public void setVocation(String vocation) { this.vocation = vocation; }

    public String getProvince() { return province; }

    public void setProvince(String province) { this.province = province; }

    public String getCity() { return city; }

    public void setCity(String city) { this.city = city; }

    @Override
    public String toString() {
        return "StudentEmploymentInfo{" +
                "no='" + no + '\'' +
                ", vocation='" + vocation + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
