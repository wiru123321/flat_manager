package com.projekt.inzynierka;


import com.projekt.inzynierka.model.*;
import com.projekt.inzynierka.repositories.*;
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
import java.time.LocalDateTime;
import java.util.List;


@Component
public class DatabaseLoader implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final FlatsRepository flatsRepository;
    private final AdressRepository adressRepository;
    private final UserAccountRepository userAccountRepository;

    
    private final RoleService roleService;
    private final UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Value("${spring.datasource.username}")
    private String dataBase;

    @Autowired
    public DatabaseLoader(
            final RoleRepository roleRepository, final UserRepository userRepository,
            FlatsRepository flatsRepository, AdressRepository adressRepository, UserAccountRepository userAccountRepository, final RoleService roleService, final UserService userService) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.flatsRepository = flatsRepository;
        this.adressRepository = adressRepository;
        this.userAccountRepository = userAccountRepository;


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

            Long id = adressRepository.save(new Adress(null,"Kato","Kato","Kato","Kato")).getId();
            Long idAcc = userAccountRepository.save(new UserAccount(null,5,5,5,5,5,5, LocalDateTime.of(2020, 3, 20, 0, 0),LocalDateTime.of(2020, 3, 20, 0, 0),true)).getId();

            Long idFlat = flatsRepository.save(new Flats(null,5,5,5,5,true,true,adressRepository.findById(id).get(),userAccountRepository.findById(idAcc).get())).getId();

            Long id1 = adressRepository.save(new Adress(null,"Katowice","44111","Gaer","5")).getId();
            Long idAcc1 = userAccountRepository.save(new UserAccount(null,365,365,55,0,120,120, LocalDateTime.of(2020, 3, 20, 0, 0),LocalDateTime.of(2020, 3, 20, 0, 0),true)).getId();

            Long idFlat1 = flatsRepository.save(new Flats(null,55,3,2,3,true,true,adressRepository.findById(id1).get(),userAccountRepository.findById(idAcc1).get())).getId();

            userRepository.save(new User(null, "admin123", passwordEncoder.encode("apassword123"), "admin@email.com", "Jan", "Kowalski", "513238338", roleRepository.findByName("ADMIN"),flatsRepository.findById(idFlat).get()));
            userRepository.save(new User(null, "1812", passwordEncoder.encode("122"), "admin4@email.com", "Adam", "Adamski", "513238358", roleRepository.findByName("EMPLOYEE"),flatsRepository.findById(idFlat).get()));
            userRepository.save(new User(null, "1123", passwordEncoder.encode("1223"), "admin43@email.com", "JanAaa", "KowalskiAaa", "514238358", roleRepository.findByName("EMPLOYEE"),flatsRepository.findById(idFlat1).get()));

        }
    }
}

