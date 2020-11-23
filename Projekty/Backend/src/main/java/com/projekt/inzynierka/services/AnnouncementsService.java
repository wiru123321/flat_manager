package com.projekt.inzynierka.services;

import com.projekt.inzynierka.model.Announcements;
import com.projekt.inzynierka.repositories.AnnouncementsRepository;
import org.springframework.stereotype.Service;

@Service
public class AnnouncementsService implements com.projekt.inzynierka.services.interfaces.AnnouncementsSeviceInterface {
    private final AnnouncementsRepository announcementsRepository;

    public AnnouncementsService(final AnnouncementsRepository announcementsRepository) {
        this.announcementsRepository = announcementsRepository;
    }

    @Override
    public Long addEntityToDB(final Announcements announcements) {
        return announcementsRepository.save(announcements).getId();
    }
}
