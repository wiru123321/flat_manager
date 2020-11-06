package com.projekt.inzynierka.services;

import com.projekt.inzynierka.model.Flats;
import com.projekt.inzynierka.repositories.FlatsRepository;
import com.projekt.inzynierka.responses.FlatsDTO;
import com.projekt.inzynierka.services.interfaces.FlatsServiceInterface;
import org.springframework.stereotype.Service;

@Service
public class FlatsService implements FlatsServiceInterface {
    final private FlatsRepository flatsRepository;
    final private AdressService adressService;
    final private UserAccountService userAccountService;

    public FlatsService(FlatsRepository flatsRepository, AdressService adressService, UserAccountService userAccountService) {
        this.flatsRepository = flatsRepository;
        this.adressService = adressService;
        this.userAccountService = userAccountService;
    }
    @Override
    public Long addEntityToDB(final Flats flats) {
        return flatsRepository.save(flats).getId();
    }

    @Override
    public Flats mapRestModel(final Long id, final FlatsDTO flatsDTO,final Long adressId,final Long userAccountId) {
        return new Flats(id,flatsDTO,adressService.getEntityById(adressId),userAccountService.getEntityById(userAccountId));
    }

    @Override
    public Flats getEntityById(final Long id) {
        return flatsRepository.findById(id).get();
    }

}
