import { Container } from '@material-ui/core';
import React from 'react';
import ShowAllAnnouncements from "../../adminPage/announcements/ShowAllAnnouncements";

const UserAnnouncements = () => {
    return (
        <Container style={{ height: "100%", width: '98vw', minWidth: "100vw" }}>
            <ShowAllAnnouncements ifUser={true} />
        </Container>
    );
};

export default UserAnnouncements;