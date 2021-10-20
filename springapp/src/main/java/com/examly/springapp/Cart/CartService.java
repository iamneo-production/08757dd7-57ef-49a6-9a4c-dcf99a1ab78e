package com.examly.springapp.Cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

}
