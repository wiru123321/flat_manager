import React from 'react';
import { useSelector } from 'react-redux';
import {selectAll} from "../../../features/addUserSlice/addUserSlice";
import {Grid, Paper} from "@material-ui/core";
import SummaryText from "./SummaryText";

const FormSummary = () => {
    const user = useSelector(selectAll);
    const {
        firstname,
        lastname,
        email,
        login,
        phoneNumber,
        password,
        role,
        area,
        flor,
        peopleInFlat,
        rooms,
        isBalcony,
        town,
        postalCode,
        street,
        number,     
    } = user
    return (
        <Grid container justify="center">
            <Paper style={{width:"50vw",height:"50vh",marginTop:"3vh"}} elevation={8}>
                <Grid direction="column" container justify="center" alignItems="center" spacing={1}>
                        <Grid item xs={12}>
                            <a style={{fontWeight:"bold",fontSize:"25px"}}>Imie i nazwisko: </a>
                            <SummaryText content={firstname}/>
                            <SummaryText content={lastname}/>
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Mail: </a>
                        <SummaryText content={email}/>
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Numer telefonu: </a>
                        <SummaryText content={phoneNumber}/>
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Login: </a>
                        <SummaryText content={login}/>
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Hasło: </a>
                        <SummaryText content={password}/>
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Rola użytkownika: </a>
                        <SummaryText content={role}/>
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Powierzchnia mieszkania: </a>
                        <SummaryText content={area}/>
                        <a style={{fontSize:"25px"}}> m^2 </a>
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Piętro: </a>
                        <SummaryText content={flor}/>
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Ilość pokoi: </a>
                        <SummaryText content={rooms}/>
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Liczba ludzi w mieszkaniu: </a>
                        <SummaryText content={peopleInFlat}/>
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Czy mieszkanie posiada balkon: </a>
                        {isBalcony? <a style={{fontSize:"25px"}}>Tak</a>:<a style={{fontSize:"25px"}}>Nie</a>}
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Miasto: </a>
                        <SummaryText content={town}/>
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Kod pocztowy: </a>
                        <SummaryText content={postalCode}/>
                        </Grid>
                        <Grid item xs={12} >
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Ulica: </a>
                        <SummaryText content={street}/>
                        <a style={{fontWeight:"bold",fontSize:"25px"}}>Numer mieszkania: </a>
                        <SummaryText content={number}/>
                        </Grid>
                </Grid>
            
            </Paper>
        </Grid>
    );
};

export default FormSummary;