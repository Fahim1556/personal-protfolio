import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    paperHight: {
        height: 150,
        display: 'row',
    },
    bigIconSize: {
        width: 70,
        height: 70,
        padding: '5px',
        border: '1px solid #000'
    },
    paper: {
        display: 'flex',
    },
    paddingTop: {
        paddingTop: '5px',
    },
    divPaddingTop: {
        paddingTop: '35px',
    }
}));

function ImportantData() {
    const classes = useStyles();
    return (
        <div className={classes.divPaddingTop}>
            <div className={classes.paperHight}>
                <Paper className={classes.paper} elevation={3}>
                    <IconButton>
                        <PhoneIcon className={classes.bigIconSize}/>
                    </IconButton>
                    <div >
                        <Typography className={classes.paddingTop} component="h6" variant="h6">
                            Phone
                        </Typography>
                        <Typography component="p" variant="body2">
                            +8801303616505 <br/>
                            +8801751360994
                        </Typography>
                    </div>
                </Paper>
            </div>
            <div className={classes.paperHight}>
                <Paper className={classes.paper} elevation={3}>
                    <IconButton>
                        <EmailIcon className={classes.bigIconSize}/>
                    </IconButton>
                    <div>
                        <Typography className={classes.paddingTop} component="h6" variant="h6">
                            Email
                        </Typography>
                        <Typography component="p" variant="body2">
                            fahimhasanthebest@gmail.com<br/>
                            fahim15-1556@diu.edu.bd
                        </Typography>
                    </div>
                </Paper>
            </div>
            <div className={classes.paperHight}>
                <Paper className={classes.paper} elevation={3}>
                    <IconButton>
                        <LocationOnIcon className={classes.bigIconSize}/>
                    </IconButton>
                    <div>
                        <Typography className={classes.paddingTop} component="h6" variant="h6">
                            Location
                        </Typography>
                        <Typography component="p" variant="body2">
                            Ashulia, Savar, Dhaka - 1344
                        </Typography>
                    </div>
                </Paper>
            </div> 
        </div>
    )
}

export default ImportantData
