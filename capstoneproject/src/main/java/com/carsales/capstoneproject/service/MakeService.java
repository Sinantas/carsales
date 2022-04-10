package com.carsales.capstoneproject.service;

import com.carsales.capstoneproject.entity.Make;
import com.carsales.capstoneproject.repository.MakeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MakeService implements BaseService<Make>{
    private final MakeRepository makeRepository;

    public MakeService(MakeRepository makeRepository) {
        this.makeRepository = makeRepository;
    }

    @Override
    public List<Make> findAll() {
        return makeRepository.findAll();
    }

    @Override
    public Make save(Make model) {
        return makeRepository.save( model );
    }

    @Override
    public boolean delete(Make model) {
        makeRepository.delete( model );
        return false;
    }

    @Override
    public Make update(Make model) {
        return makeRepository.save( model );
    }
}
