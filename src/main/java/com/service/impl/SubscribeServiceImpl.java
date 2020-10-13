package com.service.impl;

import com.bean.Subscribe;
import com.dao.ISubscribeDao;
import com.service.ISubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubscribeServiceImpl implements ISubscribeService {

    @Autowired
    private ISubscribeDao subscribeDao;

    @Override
    public void insertSubscribe(Subscribe subscribe) {
        subscribeDao.insertSubscribe(subscribe);
    }
}
