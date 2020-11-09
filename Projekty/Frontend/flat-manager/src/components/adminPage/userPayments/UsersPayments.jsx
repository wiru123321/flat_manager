import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import {selectUsers,fetchUsers} from "../../../features/userSlice/userSlice";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserPayments from "./UserPayments";
import { Table,Form,Col } from "react-bootstrap";

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

const UsersPayments =() => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const dispatch = useDispatch();
    
  useEffect(()=>{
      dispatch(fetchUsers());
  },[]);
  const users = useSelector(selectUsers);

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
     <Table striped bordered hover size="sm" responsive style={{height:"100%"}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Imie</th>
      <th>Nazwisko</th>
      <th>Wprowadź opłate za czynsz</th> 
      <th>Wprowadź opłate za wode</th>
      <th>Wprowadź opłate za śmieci</th>
    </tr>
  </thead>
  <tbody>
  {
      users.map((user,index)=><UserPayments user={user} index={index} option={true}/>)
  }
    
  </tbody>
</Table>
    </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div style={{ height: "100%", width: '95vw' }}>
     <Table striped bordered hover size="sm" responsive style={{height:"100%"}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Imie</th>
      <th>Nazwisko</th>
      <th>Wprowadź opłate za czynsz</th> 
      <th>Wprowadź opłate za wode</th>
      <th>Wprowadź opłate za śmieci</th>
    </tr>
  </thead>
  <tbody>
  {
      users.map((user,index)=><UserPayments user={user} index={index} option={false}/>)
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