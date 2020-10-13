package com.config;


public class Main {

    static class Shape {
        String name;

        public void setName(String name) {
            this.name = name;
        }

        public Shape(String name) {
            this.name = name;
        }
    }

    static void reverse(Shape shape) {
        shape.setName("as");

    }

    public static void main(String[] args) {
        System.out.println(1);
    }
}
