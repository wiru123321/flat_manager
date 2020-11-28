import { Paper } from '@material-ui/core';
import React from 'react';
import {
    Button, Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    ThemeProvider
} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from "react-redux"
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { blue, green, } from '@material-ui/core/colors';
import { updateUserFault } from "../../../features/userFaultsSlice/userFaultSlice";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: blue,
    },
});

const ListFaults = ({ user, faults, btnHandlerBack }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const toggleButton = (fault) => {
        dispatch(updateUserFault(fault.id, fault));
        window.location.reload(false);
    }
    return (
        <Paper style={{ width: "40%", height: "50%" }}>
            {faults.map((fault, index) => <>{
                fault.flatsDTO.id == user.flatsDTO.id ?
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{fault.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ alignItems: 'center', justifyContent: "center" }}>
                            <Typography>
                                <a>{fault.describe}<br />
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" color="primary" className={classes.margin} onClick={() => toggleButton(fault)}>
                                            Theme Provider
        </Button>
                                    </ThemeProvider></a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion> : null
            }</>)}
            <ThemeProvider theme={theme}>
                <Button onClick={btnHandlerBack} variant="contained" color="secondary" style={{ marginTop: "2vh" }}>Powrót</Button>
            </ThemeProvider>
        </Paper>
    );
};

export default ListFaults;