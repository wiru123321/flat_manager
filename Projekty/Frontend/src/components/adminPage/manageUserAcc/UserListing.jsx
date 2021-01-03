import React from 'react';
import { Backdrop, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserInfoManager from "./UserInfoManager";
import { useDispatch } from "react-redux"
import { deleteUser } from "../../../features/userSlice/userSlice";
import { useAlert } from "react-alert";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const UserListing = ({ info, index }) => {
  const alert = useAlert();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    dispatch(deleteUser(info.login, alert));
    console.log(info.login)
    setOpen(false);
    window.location.reload(false);
  };
  const btnHandlerBack = () => {
    console.log(info.login)
    setOpen(false);
  }
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <tr style={{ width: "100%" }}>
        <td style={{ width: "3%" }}>{index + 1}</td>
        <td>{info.name}</td>
        <td>{info.surname}</td>
        <td>{info.email} </td>
        <td>{info.phoneNumber}</td>
        <td><Button variant="contained" color="secondary" onClick={handleToggle} style={{ height: '3vh' }}>
          Usuń
</Button></td>
      </tr>
      <Backdrop className={classes.backdrop} open={open}>
        <UserInfoManager btnHandler={handleClose} user={info} btnHandlerBack={btnHandlerBack} />
      </Backdrop>
    </>

  );
};

export default UserListing;