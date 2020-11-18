import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, fetchUsers } from "../../../features/userSlice/userSlice";
import { Table } from "react-bootstrap";
import UserListing from "./UserListing";

const ManageUserAcc = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector(selectUsers);
  const onClickHandler = (event) => {
    console.log(event.targer.value)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "3vh" }}>
        <a style={{ fontSize: "25px", fontWeight: "bold" }}>Wybierz które konto chcesz usunąć</a>
      </div>
      <Table striped bordered hover size="sm" style={{ marginTop: "3vh" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Mail</th>
            <th>Numer telefonu</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => <UserListing info={user} index={index} />)
          }
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUserAcc;