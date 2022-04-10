package com.carsales.capstoneproject.service;

import java.util.List;

public interface BaseService<T> {
    public List<T> findAll();
    public T save(T model);
    public boolean delete(T model);
    public T update(T model) throws Exception;
}
