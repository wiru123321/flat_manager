package com.projekt.inzynierka.controllers;

import com.projekt.inzynierka.model.Faults;
import com.projekt.inzynierka.model.Flats;
import com.projekt.inzynierka.services.FaultsService;
import com.projekt.inzynierka.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class FaultsController {

    private final FaultsService faultsService;
    private final UserService userService;

    @Autowired
    public FaultsController(FaultsService faultsService, UserService userService) {
        this.faultsService = faultsService;
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/u/addFault/{login}")
    public ResponseEntity<?> addFaultToDatabase(@PathVariable final String login,@RequestBody final Faults userFault) {
        final Flats flats = userService.getEntityByLogin(login).getFlats();
        final Faults newFault = faultsService.mapCreationModel(null,userFault,flats.getId());
        return ResponseEntity.ok(faultsService.addEntityToDB(newFault));
    }
}
