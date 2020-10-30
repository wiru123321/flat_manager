package com.projekt.inzynierka.responses;

import com.projekt.inzynierka.responses.User.UserDTO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class AnnouncementsDTO {
    private Long id;
    private UserDTO user_adminDTO;
    private UserDTO userDTO;
    private String adminMessage;
    private String userMessage;

    public AnnouncementsDTO(final AnnouncementsDTO announcements, final UserDTO user_adminDTO,final UserDTO userDTO) {
        this.id = announcements.getId();
        this.user_adminDTO = user_adminDTO;
        this.userDTO = userDTO;
        this.adminMessage = announcements.getAdminMessage();
        this.userMessage = announcements.getUserMessage();
    }

    public AnnouncementsDTO(final Long id, final UserDTO user_adminDTO, final UserDTO userDTO, final String adminMessage, final String userMessage) {
        this.id = id;
        this.user_adminDTO = user_adminDTO;
        this.userDTO = userDTO;
        this.adminMessage = adminMessage;
        this.userMessage = userMessage;
    }
}
