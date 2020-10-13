package com.bean;

import java.io.Serializable;

public class Poverty implements Serializable {

    private Integer level;
    private String name;
    private Double money;

    public Integer getLevel() { return level; }

    public void setLevel(Integer level) { this.level = level; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public Double getMoney() { return money; }

    public void setMoney(Double money) { this.money = money; }

    @Override
    public String toString() {
        return "Poverty{" +
                "level=" + level +
                ", name='" + name + '\'' +
                ", money=" + money +
                '}';
    }
}
