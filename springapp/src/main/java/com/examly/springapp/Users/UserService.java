package com.examly.springapp.Users;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<Users> getAllUsers(){
        List<Users> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public boolean addUser(Users user){
        if(userRepository.findById(user.getEmail()).isEmpty()){
            userRepository.save(user);
            return true;
        }
        return false;
    }

    public boolean findUser(Users user){
        if(!userRepository.findById(user.getEmail()).isEmpty()){
            Users dataUser = userRepository.findById(user.getEmail()).get();
            String username = dataUser.getEmail();
            String password = dataUser.getPassword();
            return username.equals(user.getEmail()) && password.equals(user.getPassword());         
        }
        return false;
    }
}