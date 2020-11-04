package com.projekt.inzynierka.controllers;

import com.projekt.inzynierka.model.User;
import com.projekt.inzynierka.responses.User.UserCreation;
import com.projekt.inzynierka.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/a")
public class UserController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public UserController(final UserService userService,final PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/user")
    public ResponseEntity<?> addUserToDatabase(@RequestBody final UserCreation userCreation) {
        if (userService.checkIfUserWithLoginExists(userCreation.getLogin())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Existing login given.");
        }

        final User user = userService.mapCreationModel(null, userCreation);
        user.setPassword(passwordEncoder.encode(userCreation.getPassword()));
        return ResponseEntity.ok(userService.addEntityToDB(user));
    }
}
