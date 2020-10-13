package com.dao;

import com.bean.Poverty;
import java.util.List;

public interface IPovertyDao {

    public List<Poverty> findAllPoverty();

    public Poverty findPovertyByLevel(Integer level);

    public void insertPoverty(Poverty poverty);

    public void updatePoverty(Poverty poverty);

    public void deletePovertyByLevel(Integer level);
}
