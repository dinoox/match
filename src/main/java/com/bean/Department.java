package com.bean;

import java.io.Serializable;

public class Department implements Serializable {

    private String no;
    private String name;
    private String contact;

    public String getNo() { return no; }

    public void setNo(String no) { this.no = no; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getContact() { return contact; }

    public void setContact(String contact) { this.contact = contact; }

    @Override
    public String toString() {
        return "Department{" +
                "no='" + no + '\'' +
                ", name='" + name + '\'' +
                ", contact='" + contact + '\'' +
                '}';
    }
}
