package com.projekt.inzynierka.repositories;

import com.projekt.inzynierka.model.UserAccount;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepsitory extends CrudRepository<UserAccount, Long> {

}
