package com.projekt.inzynierka.controllers;

import com.projekt.inzynierka.model.Announcements;
import com.projekt.inzynierka.services.AnnouncementsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AnnouncementsController {

    private final AnnouncementsService announcementsService;

    public AnnouncementsController(AnnouncementsService announcementsService) {
        this.announcementsService = announcementsService;
    }


    @RequestMapping(method = RequestMethod.POST, value = "/a/addAnnouncement")
    public ResponseEntity<?> addUserToDatabase(@RequestBody final Announcements announcements) {
        return ResponseEntity.ok(announcementsService.addEntityToDB(announcements));
    }
}
