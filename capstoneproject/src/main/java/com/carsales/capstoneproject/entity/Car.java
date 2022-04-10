package com.carsales.capstoneproject.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "cars")
@Getter
@Setter

public class Car {

    @Id
    @GeneratedValue
    private long id;
    @ManyToOne
    @JoinColumn(name = "customers_id",nullable = false)
    private Customer customer;
    @OneToOne
    @JoinColumn(name = "model_id",referencedColumnName = "id")
    private Model model;
    private double price;
    private String color;
    private int year;
    private double miles;
    private String description;
    @OneToOne
    @JoinColumn(name = "city_id",referencedColumnName = "id")
    private City city;

    @OneToMany(mappedBy = "car")
    private List<Image> image;
    private Date createdAt;
    private Date updatedAt;


}
