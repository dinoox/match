package com.bean;

import java.io.Serializable;

public class StudentTermInfo implements Serializable {

    private String no;
    private String term;
    private Double score;
    private Double cardConsume;

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Double getCardConsume() {
        return cardConsume;
    }

    public void setCardConsume(Double cardConsume) {
        this.cardConsume = cardConsume;
    }

    @Override
    public String toString() {
        return "StudentTermInfo{" +
                "no='" + no + '\'' +
                ", term='" + term + '\'' +
                ", score=" + score +
                ", cardConsume=" + cardConsume +
                '}';
    }
}
