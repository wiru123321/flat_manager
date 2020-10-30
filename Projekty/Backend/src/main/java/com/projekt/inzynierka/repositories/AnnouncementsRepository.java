package com.projekt.inzynierka.repositories;

import com.projekt.inzynierka.model.Announcements;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnouncementsRepository extends CrudRepository<Announcements, Long> {

}
