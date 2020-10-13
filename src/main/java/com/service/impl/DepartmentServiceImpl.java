package com.service.impl;

import com.bean.Department;
import com.dao.IDepartmentDao;
import com.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DepartmentServiceImpl implements IDepartmentService  {

    @Autowired
    private IDepartmentDao departmentDao;

    @Override
    public List<Department> findAllDepartment() { return departmentDao.findAllDepartment(); }

    @Override
    public Department findDepartmentByNo(String no) {
        return departmentDao.findDepartmentByNo(no);
    }

    @Override
    public void insertDepartment(Department department) {
        departmentDao.insertDepartment(department);
    }

    @Override
    public void updateDepartment(Department department) {
        departmentDao.updateDepartment(department);
    }

    @Override
    public void deleteDepartmentByNo(String no) {
        departmentDao.deleteDepartmentByNo(no);
    }
}
