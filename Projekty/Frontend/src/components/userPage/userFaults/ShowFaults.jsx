import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteUserFault } from "../../../features/userFaultsSlice/userFaultSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const ShowFaults = ({ faults, showBtn }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const btnHandler = (id) => {
        dispatch(deleteUserFault(id));
        window.location.reload(false);
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    title={<AnnouncementIcon />}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {faults.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {faults.describe}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', alignContent: "center" }}>
                {showBtn ? <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => btnHandler(faults.id)}
                >
                    Usuń
                        </Button> : null}

            </CardActions>
        </Card>
    );
}
export default ShowFaults;