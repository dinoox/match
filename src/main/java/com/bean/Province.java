package com.bean;

import java.io.Serializable;

public class Province implements Serializable {

    private String name;

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    @Override
    public String toString() {
        return "Province{" +
                "name='" + name + '\'' +
                '}';
    }
}
