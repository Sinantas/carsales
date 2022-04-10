package com.carsales.capstoneproject.repository;


import com.carsales.capstoneproject.entity.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ModelRepository extends JpaRepository<Model,Long> {
}
