package com.examly.springapp.Product;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductModel, Long> {

}
