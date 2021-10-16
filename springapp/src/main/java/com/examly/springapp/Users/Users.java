package com.examly.springapp.Users;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Users {
    
    @RequestMapping("/hello")
    public String sayHi(){
        return "Hi Rajan Kumar";
    }

    

}
