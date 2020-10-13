package com.service.impl;

import com.bean.Feedback;
import com.dao.IFeedbackDao;
import com.service.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackServiceImpl implements IFeedbackService {

    @Autowired
    private IFeedbackDao feedbackDao;

    @Override
    public List<Feedback> findAllFeedback() {
        return feedbackDao.findAllFeedback();
    }

    @Override
    public void insertFeedback(Feedback feedback) {
        feedbackDao.insertFeedback(feedback);
    }

    @Override
    public void updateFeedback(Feedback feedback) {
        feedbackDao.updateFeedback(feedback);
    }

    @Override
    public void deleteFeedbackByPhone(String phone) {
        feedbackDao.deleteFeedbackByPhone(phone);
    }
}
