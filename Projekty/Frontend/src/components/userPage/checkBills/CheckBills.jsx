import React, { useEffect } from 'react';
import { fetchUser, selectUserInfo } from "../../../features/userInformationSlice/userInformationSlice";
import { useDispatch, useSelector } from "react-redux"
import { Container, Grid } from "@material-ui/core";
import Bill from "./Bill";
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';

const CheckBills = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserInfo);
    useEffect(() => {
        dispatch(fetchUser());
    }, []);
    return (
        <>
            <div style={{ width: '98vw', textAlign: 'center', marginTop: '10vh' }}>
                <p style={{ fontWeight: 'bold', fontSize: '30px' }}>
                    Opłaty mieszkańca
                </p>
            </div>
            {user.flatsDTO ?
                <Container style={{ height: "50.6vh", margin: "0", padding: "0", minWidth: "98vw", textAlign: "center", marginTop: "15vh" }}>
                    <Grid container spacing={3} >
                        <Grid item md={4} xs={12} style={{ marginTop: "5vh" }}>
                            <InvertColorsIcon style={{ fontSize: 70 }} />
                            <Bill name="Opłata za wode" value={user.flatsDTO.userAccountDTO.waterCost} />
                        </Grid>
                        <Grid item md={4} xs={12} style={{ marginTop: "5vh" }}>
                            <HomeIcon style={{ fontSize: 70 }} />
                            <Bill name="Opłata za czynsz" value={user.flatsDTO.userAccountDTO.rentCost} />
                        </Grid>
                        <Grid item md={4} xs={12} style={{ marginTop: "5vh" }}>
                            <DeleteIcon style={{ fontSize: 70 }} />
                            <Bill name="Opłata za śmieci" value={user.flatsDTO.userAccountDTO.rubbishCost} />
                        </Grid>
                    </Grid>
                </Container> :
                null
            }
        </>
    );
};

export default CheckBills;