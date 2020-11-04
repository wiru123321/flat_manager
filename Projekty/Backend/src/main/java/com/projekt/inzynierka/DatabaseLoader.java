package com.projekt.inzynierka;


import com.projekt.inzynierka.model.Role;
import com.projekt.inzynierka.model.User;
import com.projekt.inzynierka.repositories.RoleRepository;
import com.projekt.inzynierka.repositories.UserRepository;
import com.projekt.inzynierka.services.RoleService;
import com.projekt.inzynierka.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


@Component
public class DatabaseLoader implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    private final RoleService roleService;
    private final UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Value("${spring.datasource.username}")
    private String dataBase;

    @Autowired
    public DatabaseLoader(
                          final RoleRepository roleRepository,final UserRepository userRepository,
                          final RoleService roleService, final UserService userService) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;


        this.roleService = roleService;
        this.userService = userService;
    }

    @Override
    public void run(final String... strings) throws Exception {

        if (dataBase.equals("postgres")) {
            Path path = Paths.get("./DataBase/Roles.txt");
            List<String> stringList = Files.readAllLines(path);
            for (final String name : stringList) {
                roleRepository.save(new Role(null, name));
            }
            stringList.clear();


            userRepository.save(new User(null, "admin123", passwordEncoder.encode("apassword123"), "admin@email.com", "Jan", "Kowalski", "513238338", roleRepository.findByName("ADMIN")));
            userRepository.save(new User(null, "user123", passwordEncoder.encode("upassword123"), "user@email.com", "Andrzej", "Wywrot", "713782393", roleRepository.findByName("EMPLOYEE")));
        }
    }
}
