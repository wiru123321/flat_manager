import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, fetchUsers } from "../../../features/userSlice/userSlice";
import { fetchActiveFaults, selectActiveFaults } from "../../../features/userFaultsSlice/userFaultSlice";
import { Table } from "react-bootstrap";
import UserListingFaults from "./UserListingFaults";
import { Card, Accordion } from "react-bootstrap"

const ManageUserFaults = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchActiveFaults());
    }, []);
    const users = useSelector(selectUsers);

    const handleLoad = () => {
        //users.map(user => dispatch(fetchActiveFaults(user.login)))
    }
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ marginTop: "3vh" }}>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>Zgłoszenia mieszkańców</p>
            </div>
            <Table striped bordered hover size="sm" style={{ marginTop: "3vh" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Mail</th>
                        <th>Numer telefonu</th>
                        <th>Zgłoszenia</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <> {handleLoad(user.login)} <UserListingFaults info={user} index={index} /></>)
                    }
                </tbody>


            </Table>
        </div>
    );
};

export default ManageUserFaults;