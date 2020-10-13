package com.service;

import com.bean.Department;

import java.util.List;

public interface IDepartmentService  {

    public List<Department> findAllDepartment();

    public Department findDepartmentByNo(String no);

    public void insertDepartment(Department department);

    public void updateDepartment(Department department);

    public void deleteDepartmentByNo(String no);

}
