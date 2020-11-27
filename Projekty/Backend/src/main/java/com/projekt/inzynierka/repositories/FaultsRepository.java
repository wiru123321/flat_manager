package com.projekt.inzynierka.repositories;

import com.projekt.inzynierka.model.Faults;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FaultsRepository extends CrudRepository<Faults, Long> {

    List<Faults> findByIsActiveAndAndFlats_Id(Boolean active, Long id);

    List<Faults> findAllByIsActive(Boolean isActive);

}
