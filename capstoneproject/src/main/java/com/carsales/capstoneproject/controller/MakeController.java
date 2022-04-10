package com.carsales.capstoneproject.controller;

import com.carsales.capstoneproject.entity.Make;
import com.carsales.capstoneproject.service.MakeService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/make")
public class MakeController implements BaseController<Make>{
   private final MakeService makeService;

    public MakeController(MakeService makeService) {
        this.makeService = makeService;
    }

    @Override
    public List<Make> findAll() {
        return makeService.findAll();
    }

    @Override
    public Make save(@RequestBody Make model) {
        return makeService.save( model );
    }

    @Override
    public boolean delete(@RequestBody Make model) {
        return makeService.delete(model);
    }

    @Override
    public Make update(@RequestBody Make model) {
        return makeService.update( model );
    }
}
