import React, {useEffect} from 'react';
import { Table } from "react-bootstrap";
import {selectUsers,fetchUsers} from "../../../features/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserPayments = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);

    const users = useSelector(selectUsers);
  return (
    <div style={{ height: 400, width: '100%' }}>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Imie</th>
      <th>Nazwisko</th>
      <th>Czynsz</th>
      <th>Opłata za wode</th>
      <th>Opłata za śmieci</th>
    </tr>
  </thead> <tbody>
  {
      users.map((user,index)=><tr>
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.flatsDTO.userAccountDTO.rentCost} zł</td>
      <td>{user.flatsDTO.userAccountDTO.waterCost} zł</td>
      <td>{user.flatsDTO.userAccountDTO.rubbishCost} zł</td>
    </tr>)
  }
    
  </tbody>
</Table>
    </div>
  );
}

export default UserPayments;