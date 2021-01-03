import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, fetchUsers } from "../../../features/userSlice/userSlice";
import { Table } from "react-bootstrap";
import { TextField, Grid } from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete';
import UserListing from "./UserListing";

const ManageUserAcc = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector(selectUsers);
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState('');
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "3vh" }}>
        <p style={{ fontSize: "25px", fontWeight: "bold" }}>Wybierz które konto chcesz usunąć</p>
      </div>
      <Grid container spacing={1} justify="center" alignContent="center" style={{ marginTop: '2vh' }}>
        <Grid xs={3} item style={{ marginTop: "3vh", marginBottom: "3vh" }} justify="center">
        </Grid>
        <Grid xs={5} item >
          <Autocomplete
            id="combo-box-demo"
            value={value}
            onChange={newValue => {
              setValue(newValue);
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
      <Table striped bordered hover size="sm" style={{ marginTop: "3vh" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Mail</th>
            <th>Numer telefonu</th>
            <th>Akcja</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => <> {inputValue == '' ? < UserListing info={user} index={index} /> : (user.surname == inputValue ? < UserListing info={user} index={index} /> : null)} </>)
          }
        </tbody>
      </Table>
    </div >
  );
};

export default ManageUserAcc;