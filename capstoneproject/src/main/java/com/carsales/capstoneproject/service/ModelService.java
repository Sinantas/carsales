package com.carsales.capstoneproject.service;

import com.carsales.capstoneproject.entity.Model;
import com.carsales.capstoneproject.repository.ModelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModelService implements BaseService <Model>{

    private final ModelRepository modelRepository;

    public ModelService(ModelRepository modelRepository) {
        this.modelRepository = modelRepository;
    }

    @Override
    public List<Model> findAll() {
        return modelRepository.findAll();
    }

    @Override
    public Model save(Model model) {
        return modelRepository.save( model );
    }

    @Override
    public boolean delete(Model model) {
        modelRepository.delete( model );
        return false;
    }

    @Override
    public Model update(Model model) {
        return modelRepository.save( model );
    }
}
