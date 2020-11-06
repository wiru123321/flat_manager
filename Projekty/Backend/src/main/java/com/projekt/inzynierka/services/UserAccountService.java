package com.projekt.inzynierka.services;

import com.projekt.inzynierka.model.UserAccount;
import com.projekt.inzynierka.repositories.UserAccountRepository;
import com.projekt.inzynierka.responses.UserAccountDTO;
import org.springframework.stereotype.Service;

@Service
public class UserAccountService implements com.projekt.inzynierka.services.interfaces.UserAccountServiceInterface {
    private final UserAccountRepository userAccountRepository;

    public UserAccountService(final UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    @Override
    public Long addEntityToDB(final UserAccount userAccount) {
        return userAccountRepository.save(userAccount).getId();
    }

    @Override
    public UserAccount mapRestModel(final Long id, final UserAccountDTO userAccount) {
        return new UserAccount(id, userAccount.getRentCost(), userAccount.getUserRentPayment(), userAccount.getRentCost(), userAccount.getUserRubbishPayment(),userAccount.getWaterCost(),userAccount.getUserWaterCost(),userAccount.getPaymentDate(),userAccount.getUserPaymentDate(),userAccount.getIsActive());
    }
    @Override
    public UserAccount getEntityById(final Long id) {
        return userAccountRepository.findById(id).get();
    }
}
