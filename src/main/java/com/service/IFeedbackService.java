package com.service;

import com.bean.Feedback;

import java.util.List;

public interface IFeedbackService {

    public List<Feedback> findAllFeedback();

    public void insertFeedback(Feedback feedback);

    public void updateFeedback(Feedback feedback);

    public void deleteFeedbackByPhone(String phone);

}
