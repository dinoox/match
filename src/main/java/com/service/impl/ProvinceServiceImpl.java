package com.service.impl;

import com.bean.Province;
import com.dao.IProvinceDao;
import com.service.IProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProvinceServiceImpl implements IProvinceService {

    @Autowired
    private IProvinceDao provinceDao;

    @Override
    public List<Province> findAllProvince() { return provinceDao.findAllProvince(); }
}
