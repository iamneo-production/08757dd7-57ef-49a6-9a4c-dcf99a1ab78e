package com.examly.springapp.Order;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public List<OrderModel> getUserProducts(String email) {
        List<OrderModel> tmp = new ArrayList<>();
        List<OrderModel> order = new ArrayList<>();
        orderRepository.findAll().forEach(tmp::add);
        for (OrderModel ord : tmp) {
            if (ord.getUserId().equals(email)) {
                order.add(ord);
            }
        }
        return order;
    }

    public boolean placeOrder(OrderModel order) {
        orderRepository.save(order);
        return true;
    }

    public List<OrderModel> getOrders() {
        List<OrderModel> order = new ArrayList<>();
        orderRepository.findAll().forEach(order::add);
        return order;
    }
}
