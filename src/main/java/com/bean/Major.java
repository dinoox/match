package com.bean;

import java.io.Serializable;

public class Major implements Serializable {

    private String no;
    private String name;
    private String department;

    public String getNo() { return no; }

    public void setNo(String no) { this.no = no; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getDepartment() { return department; }

    public void setDepartment(String department) { this.department = department; }

    @Override
    public String toString() {
        return "Major{" +
                "no='" + no + '\'' +
                ", name='" + name + '\'' +
                ", department='" + department + '\'' +
                '}';
    }
}
