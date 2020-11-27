package com.projekt.inzynierka.services;

import com.projekt.inzynierka.model.Faults;
import com.projekt.inzynierka.model.Flats;
import com.projekt.inzynierka.repositories.FaultsRepository;
import com.projekt.inzynierka.responses.FaultsDTO;
import com.projekt.inzynierka.responses.FlatsDTO;
import com.projekt.inzynierka.services.interfaces.FaultsSeviceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    public List<FaultsDTO> getAllActiveFaultsDTOs(Long id) {
        final ArrayList<Faults> faultsArrayList = new ArrayList<>(faultsRepository.findByIsActiveAndAndFlats_Id(true,id));
        return this.mapRestList(faultsArrayList,flatsService.getEntityById(id));
    }

    private List<FaultsDTO> mapRestList(final List<Faults> faultsArrayList, final Flats flats) {
        final ArrayList<FaultsDTO> faultsDTOArrayList = new ArrayList<>();
        faultsArrayList.forEach((faults) -> {
            final FlatsDTO flatsDTO = new FlatsDTO(flats);
            final FaultsDTO faultsDTO = new FaultsDTO(faults,flatsDTO);
            faultsDTOArrayList.add(faultsDTO);
        });
        return faultsDTOArrayList;
    }
}
