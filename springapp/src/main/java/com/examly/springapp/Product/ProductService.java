package com.examly.springapp.Product;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public String productSave(ProductModel product) {
        try {
            productRepository.save(product);
            return "Product added";
        } catch (Exception e) {
            return "Product exists with this name";
        }
    }

    public List<ProductModel> getProduct() {
        List<ProductModel> products = new ArrayList<>();
        productRepository.findAll().forEach(products::add);
        return products;
    }

    public String productDelete(Long productId) {
        productRepository.deleteById(productId);
        return "Product deleted";
    }

    public ProductModel productEditData(Long productId) {
        ProductModel product = productRepository.findById(productId).get();
        return product;
    }

    public boolean productEditSave(ProductModel product) {
        try {
            productRepository.save(product);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public List<ProductModel> getHomeProduct() {
        List<ProductModel> products = new ArrayList<>();
        productRepository.findAll().forEach(products::add);
        return products;
    }

    public ProductModel getProductById(Long productId) {
        ProductModel product = productRepository.findById(productId).get();
        return product;
    }
}
