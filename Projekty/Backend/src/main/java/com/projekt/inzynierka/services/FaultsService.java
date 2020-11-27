package com.projekt.inzynierka.services;

import com.projekt.inzynierka.model.Faults;
import com.projekt.inzynierka.repositories.FaultsRepository;
import com.projekt.inzynierka.services.interfaces.FaultsSeviceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FaultsService implements FaultsSeviceInterface {

    private final FaultsRepository faultsRepository;
    private final FlatsService flatsService;

    @Autowired
    public FaultsService(FaultsRepository faultsRepository, FlatsService flatsService) {
        this.faultsRepository = faultsRepository;
        this.flatsService = flatsService;
    }

    @Override
    public Long addEntityToDB(Faults faults) {
        return faultsRepository.save(faults).getId();
    }

    @Override
    public Faults mapCreationModel(final Long id, final Faults faults, final Long flatsId) {
        return new Faults(id, faults, flatsService.getEntityById(flatsId));
    }
}
