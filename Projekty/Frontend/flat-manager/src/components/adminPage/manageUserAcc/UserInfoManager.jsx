import React from 'react';
import { Paper,Button,Grid } from '@material-ui/core';


const UserInfoManager = ({btnHandler,user}) => {
    return (
        <Paper style={{width:"30%",height:"40%"}}>
            <Grid container spacing={1} justify="center" alignContent="center">
            <Grid xs={12} item style={{marginTop:"3vh",marginBottom:"3vh"}}>
            <a style={{fontWeight:"bold",fontSize:"25px"}}>Czy na pewno chcesz usunąc to konto?</a>
            </Grid>
            <Grid xs={7} item justify="center" alignContent="center">
                <a>{user.name}</a>
            </Grid>
            <Grid xs={7} item justify="center" alignContent="center">
            <a>{user.surname}</a>
            </Grid>
            <Grid xs={12} item>
            <Button onClick={btnHandler} variant="contained" color="secondary">Usuń konto miszkańca</Button>
            </Grid>
            </Grid>
        </Paper>
    );
};

export default UserInfoManager;