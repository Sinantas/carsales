package com.carsales.capstoneproject.controller;

import com.carsales.capstoneproject.entity.Image;
import com.carsales.capstoneproject.service.ImageService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("api/v1/image")
public class ImageController implements BaseController<Image>{
    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @Override
    public List<Image> findAll() {
        return imageService.findAll();
    }

    @Override
    public Image save(@RequestBody Image model) {
        return imageService.save( model );
    }

    @Override
    public boolean delete(@RequestBody Image model) {
        return imageService.delete( model );
    }

    @Override
    public Image update(@RequestBody Image model) {
        return imageService.update( model );
    }
}
