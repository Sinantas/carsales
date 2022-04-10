package com.carsales.capstoneproject.controller;

import com.carsales.capstoneproject.entity.City;
import com.carsales.capstoneproject.service.CityService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/city")
public class CityController implements BaseController<City> {

    private final CityService service;

    public CityController(CityService service) {
        this.service = service;
    }

    @Override
    public List<City> findAll() {
        return service.findAll();
    }

    @Override
    public City save(@RequestBody City model) {
        return service.save( model );
    }

    @Override
    public boolean delete(@RequestBody City model) {
        return service.delete( model );
    }

    @Override
    public City update(@RequestBody City model) {
        return service.update( model );
    }

}
