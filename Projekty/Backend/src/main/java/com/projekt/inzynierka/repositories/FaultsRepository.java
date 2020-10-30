package com.projekt.inzynierka.repositories;

import com.projekt.inzynierka.model.Faults;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaultsRepository extends CrudRepository<Faults, Long> {

}
