package com.carsales.capstoneproject.controller;

import com.carsales.capstoneproject.entity.Model;
import com.carsales.capstoneproject.service.ModelService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/model")
public class ModelController implements BaseController<Model> {
    private final ModelService modelService;

    public ModelController(ModelService modelService) {
        this.modelService = modelService;
    }

    @Override
    public List<Model> findAll() {
        return modelService.findAll();
    }

    @Override
    public Model save(@RequestBody Model model) {
        return modelService.save(model  );
    }

    @Override
    public boolean delete(@RequestBody Model model) {
        return modelService.delete(model);
    }

    @Override
    public Model update(@RequestBody Model model) {
        return modelService.update( model );
    }
}
