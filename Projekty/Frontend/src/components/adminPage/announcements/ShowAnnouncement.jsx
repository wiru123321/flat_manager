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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const ShowAnnouncement = ({ title, content, data }) => {
    const classes = useStyles();
    console.log(data)
    const newData = data.split("T", 1);
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
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>

            </CardActions>
        </Card>
    );
}
export default ShowAnnouncement;