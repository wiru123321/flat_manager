package com.projekt.inzynierka.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "announcements")
@Entity
public class Announcements {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private User user_admin;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private User user;

    @Column(nullable = false)
    private String adminMessage;

    @Column(nullable = false)
    private String userMessage;




    public Announcements() {
    }

    public Announcements(final Long id, final User user_admin,final User user,final String adminMessage,final String userMessage) {
        this.id = id;
        this.user_admin = user_admin;
        this.user = user;
        this.adminMessage = adminMessage;
        this.userMessage = userMessage;
    }
}
