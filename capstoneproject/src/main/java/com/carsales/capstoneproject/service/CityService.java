package com.carsales.capstoneproject.service;

import com.carsales.capstoneproject.entity.City;
import com.carsales.capstoneproject.repository.CityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService implements BaseService<City> {
    private final CityRepository repository;

    public CityService(CityRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<City> findAll() {
        return repository.findAll();
    }

    @Override
    public City save(City model) {
        return repository.save( model );
    }

    @Override
    public boolean delete(City model) {
        repository.delete( model );
        return false;
    }

    @Override
    public City update(City model) {
        repository.save( model );
        return model;
    }
}
