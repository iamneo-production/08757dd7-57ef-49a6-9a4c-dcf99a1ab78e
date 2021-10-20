package com.examly.springapp.Cart;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class CartModel {

    @Id
    private String cartItemId;

    private String userId;
    private String productName;
    private String quantity;
    private String price;

    public CartModel() {

    }

    public CartModel(String cartItemId, String userId, String productName, String quantity, String price) {
        super();
        this.cartItemId = cartItemId;
        this.userId = userId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public String getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(String cartItemId) {
        this.cartItemId = cartItemId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

}
