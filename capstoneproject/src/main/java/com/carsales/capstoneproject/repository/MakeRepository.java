package com.carsales.capstoneproject.repository;


import com.carsales.capstoneproject.entity.Make;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MakeRepository extends JpaRepository<Make, Long> {

}
