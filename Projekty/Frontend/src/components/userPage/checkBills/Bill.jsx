import React from 'react';
import { Container, Grid, Paper } from "@material-ui/core";

const Bill = ({ name, value }) => {
    return (
        <Grid
            container
            justify="center"
        >
            <Container style={{ marginTop: "5vh" }}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                >
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        style={{ width: "27vw" }}>
                        <Grid item xs={12}>
                            <p style={{ fontSize: "30px" }}>{name}</p>
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        style={{ width: "27vw" }}>
                        <Grid item xs={12}>
                            <p style={{ fontSize: "30px" }}>{value} zł</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Bill;