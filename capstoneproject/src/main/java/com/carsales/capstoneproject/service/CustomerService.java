package com.carsales.capstoneproject.service;

import com.carsales.capstoneproject.entity.Customer;
import com.carsales.capstoneproject.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerService implements BaseService<Customer>{
    private final CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Customer> findAll() {
        return repository.findAll() ;
    }

    @Override
    public Customer save(Customer model) {
        return repository.save( model );
    }

    @Override
    public boolean delete(Customer model) {
        repository.delete( model );
        return false;
    }

    @Override
    public Customer update(Customer model) {
        return repository.save( model );
    }
}
