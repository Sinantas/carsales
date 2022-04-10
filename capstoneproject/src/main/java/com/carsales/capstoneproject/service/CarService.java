package com.carsales.capstoneproject.service;

import com.carsales.capstoneproject.entity.Car;
import com.carsales.capstoneproject.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements BaseService<Car> {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public List<Car> findAll() {
        return carRepository.findAll();
    }

    @Override
    public Car save(Car model) {
        return carRepository.save( model );
    }

    @Override
    public boolean delete(Car model) {
        carRepository.delete( model );
        return false;
    }

    @Override
    public Car update(Car model) {
        return  carRepository.save( model );
    }


}
