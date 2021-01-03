import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import { selectUsers, fetchUsers } from "../../../features/userSlice/userSlice";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import UserPayments from "./UserPayments";
import { Table } from "react-bootstrap";

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

const UsersPayments = () => {
  const classes = useStyles();
  const theme = useTheme();
  const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
  ];
  const [value, setValue] = React.useState(0);

  const now = new Date();
  const currentMonth = (now.getMonth() + 1).toString();
  const year = now.getFullYear();
  const dataToSubmit = year + "-" + currentMonth + "-01T00:00:01";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector(selectUsers);
  const [value1, setValue1] = useState();
  const [inputValue, setInputValue] = useState('');
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
          <Tab label="Wprowadź płatności mieszkańców." {...a11yProps(0)} />
          <Tab label="Potwierdź wpłaty mieszkańców." {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div style={{ height: "100%", width: '95vw' }}>
            <div style={{ width: '100%', textAlign: "center", marginBottom: "2vh" }}>
              <a
                style={{ width: "10%", fontWeight: "bold" }}
              >Okres rozliczeniowy: {monthNames[currentMonth - 1]} {year}</a>
            </div>
            <Grid container spacing={1} justify="center" alignContent="center" style={{ marginTop: '2vh', marginBottom: '2vh' }}>
              <Grid xs={3} item style={{ marginTop: "3vh", marginBottom: "3vh" }} justify="center">
              </Grid>
              <Grid xs={5} item >
                <Autocomplete
                  id="combo-box-demo"
                  value={value1}
                  onChange={newValue => {
                    setValue1(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  options={users}
                  getOptionLabel={(option) => option.surname}
                  style={{ width: 230 }}
                  renderInput={(params) => <TextField {...params} label="Wyszukaj po nazwisku" variant="outlined" />}
                />
              </Grid>
            </Grid>
            <Table striped bordered hover size="sm" responsive style={{ height: "100%", textAlign: "center" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Imie</th>
                  <th>Nazwisko</th>
                  <th>Zmień opłate za czynsz</th>
                  <th>Zmień opłate za wode</th>
                  <th>Zmień opłate za śmieci</th>
                  <th>Wystaw rachunek</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => <> {inputValue === '' ? <UserPayments user={user} index={index} option={true} dataToSubmit={dataToSubmit} /> : (user.surname === inputValue ? <UserPayments user={user} index={index} option={true} dataToSubmit={dataToSubmit} /> : null)} </>)
                }
              </tbody>
            </Table>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div style={{ height: "100%", width: '98vw' }}>
            <Grid container spacing={1} justify="center" alignContent="center" style={{ marginTop: '2vh', marginBottom: '2vh' }}>
              <Grid xs={3} item style={{ marginTop: "3vh", marginBottom: "3vh" }} justify="center">
              </Grid>
              <Grid xs={5} item >
                <Autocomplete
                  id="combo-box-demo"
                  value={value1}
                  onChange={newValue => {
                    setValue1(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  options={users}
                  getOptionLabel={(option) => option.surname}
                  style={{ width: 230 }}
                  renderInput={(params) => <TextField {...params} label="Wyszukaj po nazwisku" variant="outlined" />}
                />
              </Grid>
            </Grid>
            <Table striped bordered hover size="sm" responsive style={{ height: "100%", textAlign: "center" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Imie</th>
                  <th>Nazwisko</th>
                  <th>Potwierdz wpłate za czynsz</th>
                  <th>Potwierdz wpłate za wode</th>
                  <th>Potwierdz wpłate za śmieci</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => <> {inputValue === '' ? <UserPayments user={user} index={index} option={false} /> : (user.surname === inputValue ? <UserPayments user={user} index={index} option={false} /> : null)} </>)
                }

              </tbody>
            </Table>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default UsersPayments;