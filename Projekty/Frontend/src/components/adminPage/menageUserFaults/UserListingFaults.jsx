import React, { useEffect } from 'react';
import { Backdrop, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../../../features/userSlice/userSlice";
import { selectActiveFaults, fetchActiveFaults } from "../../../features/userFaultsSlice/userFaultSlice";
import ListFaults from "./ListFaults";
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const UserListingFaults = ({ info, index }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        //     dispatch(fetchActiveFaults(info.login))
    }, [])

    const [open, setOpen] = React.useState(false);
    const faults = useSelector(selectActiveFaults);
    console.log(faults)
    const handleClose = () => {
        dispatch(deleteUser(info.login));
        console.log(info.login)
        setOpen(false);
        window.location.reload(false);
    };
    let number = 0;
    function check(faultId, userID) {
        if (faultId === userID) {
            number = number + 1;
        }
    }
    function getNumberOf() {
        faults.map(fault => check(fault.flatsDTO.id, info.flatsDTO.id))
        return number;
        number = 0;
    }
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
                <td>{getNumberOf()}</td>
                <td><Button variant="contained" color="secondary" onClick={handleToggle} style={{ height: '3vh' }}>
                    Pokaż zgłoszenia
</Button></td>
            </tr>
            <Backdrop className={classes.backdrop} open={open}>
                <ListFaults user={info} faults={faults} btnHandlerBack={btnHandlerBack} />
            </Backdrop>
        </>

    );
};

export default UserListingFaults;