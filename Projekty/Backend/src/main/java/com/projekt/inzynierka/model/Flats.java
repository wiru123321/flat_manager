package com.projekt.inzynierka.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "flats")
@Entity
public class Flats {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer area;

    @Column(nullable = false)
    private Integer flor;

    @Column(nullable = false)
    private Integer peopleInFlat;

    @Column(nullable = false)
    private Integer rooms;

    @Column(nullable = false)
    private Boolean isBalcony;

    @Column(nullable = false)
    private Boolean isActive;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private Adress adress;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private UserAccount userAccount;

    public Flats() {
    }

    public Flats(final Long id, final Integer area,final Integer flor,final Integer peopleInFlat,final Integer rooms,final Boolean isBalcony,final Boolean isActive,final Adress adress,final UserAccount userAccount
    ) {
        this.id = id;
        this.area = area;
        this.flor = flor;
        this.peopleInFlat = peopleInFlat;
        this.rooms = rooms;
        this.isBalcony = isBalcony;
        this.isActive = isActive;
        this.adress = adress;
        this.userAccount=userAccount;
    }
}
