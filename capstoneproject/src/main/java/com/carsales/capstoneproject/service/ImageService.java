package com.carsales.capstoneproject.service;


import com.carsales.capstoneproject.entity.Image;
import com.carsales.capstoneproject.repository.ImageRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ImageService implements BaseService<Image> {

    private final ImageRepository imageRepository;

    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @Override
    public List<Image> findAll() {
        return imageRepository.findAll();
    }

    @Override
    public Image save(Image model) {
        return imageRepository.save( model );
    }

    @Override
    public boolean delete(Image model) {
        imageRepository.delete( model );
        return false;
    }

    @Override
    public Image update(Image model) {
        return imageRepository.save( model );
    }
}
