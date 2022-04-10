package com.carsales.capstoneproject.controller;

import com.carsales.capstoneproject.entity.Customer;
import com.carsales.capstoneproject.service.CustomerService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/customer")
public class CustomerController implements BaseController<Customer>{
    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }

    @Override
    public List<Customer> findAll() {
        return service.findAll();
    }

    @Override
    public Customer save(@RequestBody Customer model) {
        return service.save( model );
    }

    @Override
    public boolean delete(@RequestBody Customer model) {
        return service.delete( model );
    }

    @Override
    public Customer update(@RequestBody Customer model) {
        return service.update( model );
    }
}
