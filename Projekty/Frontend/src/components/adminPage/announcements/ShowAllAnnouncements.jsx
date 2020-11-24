import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnouncements, selectAnnouncement } from "../../../features/announcementsSlice/announcementsSlice";
import ShowAllAnnouncement from "./ShowAnnouncement";

const ShowAllAnnouncements = ({ ifUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAnnouncements());
    }, [])
    const announcements = useSelector(selectAnnouncement);
    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "4vh", height: "100%" }}>
            <Grid container spacing={3}>
                {
                    announcements.map((announcement, index) => <>
                        <Grid item xs={4} key={index}>
                            <ShowAllAnnouncement title={announcement.title} content={announcement.adminMessage} data={announcement.data} index={announcement.index} ifUser={ifUser} />
                        </Grid> </>)
                }

            </Grid>
        </Container>
    );
};

export default ShowAllAnnouncements;