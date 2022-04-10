package com.carsales.capstoneproject.service;

import com.carsales.capstoneproject.entity.User;
import com.carsales.capstoneproject.repository.UserRepository;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements BaseService<User>{


    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(User model) {
        model.setPassword( passwordEncoder.encode( model.getPassword() ) );
      return userRepository.save( model );
    }

    @Override
    public boolean delete(User model) {
        userRepository.delete( model );
        return false;
    }

    @Override
    public User update(User model) throws Exception {
       Optional<User> userOpt = userRepository.findById( model.getId() );
        userOpt.orElseThrow( ChangeSetPersister.NotFoundException::new );
        User user = userOpt.get();
        user.setEmail( model.getEmail() );
        user.setPassword( passwordEncoder.encode( model.getPassword()) );
        user.setName( model.getName() );
        user.setPhone( model.getPhone() );
        user.setRole( model.getRole() );
        return userRepository.save( user );
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail( email );
    }
}
