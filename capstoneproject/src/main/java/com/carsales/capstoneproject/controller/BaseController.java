package com.carsales.capstoneproject.controller;

import com.carsales.capstoneproject.entity.Car;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface BaseController<T> {
    @GetMapping("")
    public List<T> findAll();
    @PostMapping("")
    public T save(@RequestBody T model);
    @DeleteMapping("")
    public boolean delete(T model);
    @PutMapping("")
    public T update(T model) throws Exception;
}
