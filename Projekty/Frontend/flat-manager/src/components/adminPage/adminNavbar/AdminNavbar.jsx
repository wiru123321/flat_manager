import React from 'react';
import { useDispatch } from "react-redux";
import {Navbar,Nav,Form,FormControl,Button,Image} from "react-bootstrap"
import { logout } from "../../../features/authentication/authSlice";
import Logo from "../../../resources/logo.png";


const AdminNavbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
      };
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/adminPage"><Image src={Logo} width="70"
        height="70"
        style={{zIndex: "3"}}/></Navbar.Brand>
    <Nav className="mr-auto" style={{fontSize:"25px"}}>
      <Nav.Link href="#/addUserAcc">Utwórz konto mieszkańca</Nav.Link>
      <Nav.Link href="#/managerUserAcc">Zarządzaj kontem mieszkańca</Nav.Link>
      <Nav.Link href="#/usersPayments">Płatności mieszkańców</Nav.Link>
      <Nav.Link href="/adminPage">Zarządzaj zgłoszeniami mieszkańców</Nav.Link>
      <Nav.Link href="/adminPage">Zarządzaj tablicą ogłoszeń</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info" onClick={handleLogout} href="/login">Wyloguj</Button>
    </Form>
  </Navbar>
</>
    );
};

export default AdminNavbar;