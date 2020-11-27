import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddUserFault from "./AddUserFault";
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { useDispatch, useSelector } from "react-redux";
import { fetchActiveFaults, selectActiveFaults } from "../../../features/userFaultsSlice/userFaultSlice";
import ShowFaults from "./ShowFaults";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100vw",
    },
}));

const Announcements = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        dispatch(fetchActiveFaults())
    }, [])
    const ActiveFaults = useSelector(selectActiveFaults);

    console.log(ActiveFaults);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Dodaj zgłoszenie" {...a11yProps(0)} />
                    <Tab label="Oczekujące zgłoszenia" {...a11yProps(1)} />
                    <Tab label="Rozpatrzone zgłoszenia" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div style={{ height: "100%", width: '100%' }}>
                        <AddUserFault />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "4vh", height: "100%" }}>
                        <Grid container spacing={3}>
                            {
                                ActiveFaults.map((ActiveFault, index) =>
                                    <>
                                        <Grid item xs={4} key={index}>
                                            <ShowFaults faults={ActiveFault} />
                                        </Grid>
                                    </>)
                            }
                        </Grid>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div style={{ height: "100%", width: '100%' }}>
                        <AddUserFault faults={ActiveFaults} />
                    </div>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

export default Announcements;