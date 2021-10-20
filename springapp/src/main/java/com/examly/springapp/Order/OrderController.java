package com.examly.springapp.Order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/orders")
    public List<OrderModel> getUserProducts(@RequestBody String email) {
        email = email.replace("%40", "@");
        email = email.replace("=", "").strip();
        return orderService.getUserProducts(email);
    }

    @PostMapping("/placeOrder")
    public boolean placeOrder(@RequestBody OrderModel order) {
        return orderService.placeOrder(order);
    }

    @GetMapping("/admin/orders")
    public List<OrderModel> getOrders() {
        return orderService.getOrders();
    }
}
