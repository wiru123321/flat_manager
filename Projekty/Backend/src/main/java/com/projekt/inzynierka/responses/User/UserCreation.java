package com.projekt.inzynierka.responses.User;

import com.projekt.inzynierka.model.User;
import com.projekt.inzynierka.responses.RoleDTO;
import lombok.Data;

@Data
public class UserCreation {
    private String login;
    private String email;
    private String password;
    private String name;
    private String surname;
    private String phoneNumber;
    private RoleDTO roleDTO;

    public UserCreation(){

    }

    public UserCreation(final User user, final RoleDTO roleDTO) {
        this.login = user.getLogin();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.phoneNumber = user.getPhoneNumber();
        this.roleDTO = roleDTO;
    }

    public UserCreation(final String login, final String password, final String email, final String name, final String surname, final String phoneNumber, final RoleDTO roleDTO) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.roleDTO = roleDTO;
    }
}