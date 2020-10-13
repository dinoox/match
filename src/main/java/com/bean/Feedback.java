package com.bean;

import java.io.Serializable;

public class Feedback implements Serializable {

    private String name;
    private String phone;
    private String email;
    private String message;
    private String time;

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getPhone() { return phone; }

    public void setPhone(String phone) { this.phone = phone; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String getMessage() { return message; }

    public void setMessage(String message) { this.message = message; }

    public String getTime() { return time; }

    public void setTime(String time) { this.time = time; }

    @Override
    public String toString() {
        return "Feedback{" +
                "name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", message='" + message + '\'' +
                ", time='" + time + '\'' +
                '}';
    }

}
