package com.service.impl;

import com.bean.Poverty;
import com.dao.IPovertyDao;
import com.service.IPovertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PovertyServiceImpl implements IPovertyService {

    @Autowired
    private IPovertyDao povertyDao;

    @Override
    public List<Poverty> findAllPoverty() { return povertyDao.findAllPoverty(); }

    @Override
    public Poverty findPovertyByLevel(Integer level){ return povertyDao.findPovertyByLevel(level); }

    @Override
    public void insertPoverty(Poverty poverty) { povertyDao.insertPoverty(poverty); }

    @Override
    public void updatePoverty(Poverty poverty) { povertyDao.updatePoverty(poverty); }

    @Override
    public void deletePovertyByLevel(Integer level) { povertyDao.deletePovertyByLevel(level); }
}
