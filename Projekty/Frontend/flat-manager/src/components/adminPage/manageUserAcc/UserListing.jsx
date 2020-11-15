import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import UserInfoManager from "./UserInfoManager";
import {useDispatch} from "react-redux"
import {deleteUser} from "../../../features/userSlice/userSlice";

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const UserListing = ({info,index}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    dispatch(deleteUser(info.login));
    console.log(info.login)
    setOpen(false);
    window.location.reload(false);
  };
  const btnHandlerBack = () =>{
    console.log(info.login)
    setOpen(false);
  }
  const handleToggle = () => {
    setOpen(!open);
  };
    return (
        <>
        <tr style={{width:"100%"}} onClick={handleToggle}>
        <td style={{width:"3%"}}>{index+1}</td>
        <td>{info.name}</td>
        <td>{info.surname}</td>
        <td>{info.email} </td>
        <td>{info.phoneNumber}</td>
        </tr>
        <Backdrop className={classes.backdrop} open={open}>
        <UserInfoManager btnHandler={handleClose} user={info} btnHandlerBack={btnHandlerBack}/>
      </Backdrop>
        </>

    );
};

export default UserListing;