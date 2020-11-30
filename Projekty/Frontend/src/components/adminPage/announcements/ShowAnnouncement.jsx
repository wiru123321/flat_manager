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
import { useDispatch } from "react-redux";
import { deleteAnnouncement } from "../../../features/announcementsSlice/announcementsSlice";
import { useAlert } from "react-alert";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const ShowAnnouncement = ({ title, content, data, index, ifUser }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const classes = useStyles();
    console.log(data)
    const newData = data.split("T", 1);
    const handleClick = () => {
        dispatch(deleteAnnouncement(index, alert));
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    title={<AnnouncementIcon />}
                    subheader={newData}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', alignContent: "center" }}>
                {
                    ifUser ? null :
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                            onClick={handleClick}
                        >
                            Delete
                        </Button>
                }
            </CardActions>
        </Card>
    );
}
export default ShowAnnouncement;