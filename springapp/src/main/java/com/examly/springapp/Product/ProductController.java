package com.examly.springapp.Product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/admin/addProduct")
    public String productSave(@RequestBody ProductModel product) {
        return productService.productSave(product);
    }

    @GetMapping("/admin/getProducts")
    public List<ProductModel> getProduct() {
        return productService.getProduct();
    }

    @GetMapping("/admin/delete/{productId}")
    public String productDelete(@PathVariable Long productId) {
        return productService.productDelete(productId);
    }

    @GetMapping("/admin/productEdit/{productId}")
    public ProductModel productEditData(@PathVariable Long productId) {
        return productService.productEditData(productId);
    }

    @PutMapping("/admin/productEdit")
    public boolean productEditSave(@RequestBody ProductModel product) {
        return productService.productEditSave(product);
    }

    @GetMapping("/home")
    public List<ProductModel> getHomeProduct() {
        return productService.getHomeProduct();
    }

    @GetMapping("/getProduct/{productId}")
    public ProductModel getProductById(@PathVariable Long productId) {
        return productService.getProductById(productId);
    }

}
