package com.carsales.capstoneproject.controller;

import com.carsales.capstoneproject.entity.User;
import com.carsales.capstoneproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/user")
public class UserController implements BaseController<User>{

    private final UserService service;

    public UserController (UserService service) {
        this.service = service;
    }

    @GetMapping("")
    public List<User> findAll(){

        return service.findAll();
    }

    @PostMapping("")
    public User save(@RequestBody User user){

        user.setRole( "USER" );
        service.save( user );
        return user;
    }

    @Override
    public boolean delete(@RequestBody  User model) {
        service.delete( model );
        return false;
    }

    @Override
    public User update(@RequestBody  User model) throws Exception {
        return service.update( model );
    }

}
