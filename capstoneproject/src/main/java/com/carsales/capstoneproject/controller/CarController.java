package com.carsales.capstoneproject.controller;

import com.carsales.capstoneproject.entity.Car;
import com.carsales.capstoneproject.entity.User;
import com.carsales.capstoneproject.service.CarService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/car")
public class CarController implements BaseController<Car>{

    private final CarService service;

    public CarController(CarService service) {
        this.service = service;
    }

    @Override
    public List<Car> findAll(){

        return service.findAll();
    }

    @Override
    public Car save(@RequestBody Car model) {
        return service.save(model);
    }

    @Override
    public boolean delete(@RequestBody Car model) {
        return service.delete(model);
    }

    @Override
    public Car update(@RequestBody Car model) {
        return service.update(model);
    }
}
