import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Form, Button, Image } from "react-bootstrap"
import { logout } from "../../../features/authentication/authSlice";
import { selectActiveFaults, fetchActiveFaults } from "../../../features/userFaultsSlice/userFaultSlice";
import { fetchAnnouncements, selectAnnouncement } from "../../../features/announcementsSlice/announcementsSlice";
import { Badge } from "@material-ui/core"
import Logo from "../../../resources/logo.png";
import ErrorIcon from '@material-ui/icons/Error';


const AdminNavbar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(fetchActiveFaults());
    dispatch(fetchAnnouncements());
  }, []);
  const faults = useSelector(selectActiveFaults);
  const announcements = useSelector(selectAnnouncement);
  let number = 0;
  function add() {
    number = number + 1;
  }
  function getNumberOf() {
    faults.map(fault => add())
    return number;
    number = 0;
  }
  let numberAnnouncements = 0;
  function addAnnouncements() {
    numberAnnouncements = numberAnnouncements + 1;
  }
  function getNumberAnnouncementsOf() {
    announcements.map(announcement => addAnnouncements())
    return numberAnnouncements;
    numberAnnouncements = 0;
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#/addUserAcc"><Image src={Logo} width="70"
          height="70"
          style={{ zIndex: "3" }} /></Navbar.Brand>
        <Nav className="mr-auto" style={{ fontSize: "17px" }}>
          <Nav.Link href="#/addUserAcc" >Utwórz konto mieszkańca</Nav.Link>
          <Nav.Link href="#/managerUserAcc" >Zarządzaj kontem mieszkańca</Nav.Link>
          <Nav.Link href="#/usersPayments">Płatności mieszkańców</Nav.Link>
          <Nav.Link href="#/manageUserFaults" >
            <Badge badgeContent={getNumberOf()} color="primary">Zarządzaj zgłoszeniami mieszkańców<ErrorIcon />
            </Badge></Nav.Link>
          <Nav.Link href="#/annoucements" ><Badge badgeContent={getNumberAnnouncementsOf()} color="primary">Zarządzaj tablicą ogłoszeń<ErrorIcon />
          </Badge></Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-info" onClick={handleLogout} href="/login">Wyloguj</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default AdminNavbar;