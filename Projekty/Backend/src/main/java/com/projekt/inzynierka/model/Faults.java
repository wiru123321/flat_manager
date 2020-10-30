package com.projekt.inzynierka.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "faults")
@Entity
public class Faults {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private Flats flats;

    @Column(nullable = false)
    private String describe;

    @Column(nullable = false)
    private Boolean isActive;




    public Faults() {
    }

    public Faults(final Long id,final Flats flats,final String describe,final Boolean isActive) {
        this.id = id;
        this.flats = flats;
        this.describe = describe;
        this.isActive = isActive;
    }
}
