package com.carsales.capstoneproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "images")
@Getter
@Setter
public class Image {
    @Id
    @GeneratedValue
    private long id;
    @ManyToOne
    @JoinColumn(name = "car_id",nullable = false)
    private Car car;
    private String path;
    private Date createdAt;
    private Date updatedAt;

}
