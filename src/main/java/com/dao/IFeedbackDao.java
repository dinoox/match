package com.dao;

import com.bean.Feedback;

import java.util.List;

public interface IFeedbackDao {

    public List<Feedback> findAllFeedback();

    public void insertFeedback(Feedback feedback);

    public void updateFeedback(Feedback feedback);

    public void deleteFeedbackByPhone(String phone);

}
