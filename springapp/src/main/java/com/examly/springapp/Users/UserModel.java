package com.examly.springapp.Users;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Users")
public class UserModel {

    @Id
    private String email;

    private String username;
    private String mobilenumber;
    private String password;
    private boolean active;
    private String role;

    public UserModel() {

    }

    public UserModel(String email, String username, String mobilenumber, String password, boolean active, String role) {
        super();
        this.email = email;
        this.username = username;
        this.mobilenumber = mobilenumber;
        this.password = password;
        this.active = active;
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMobilenumber() {
        return mobilenumber;
    }

    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
