import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import emailjs from 'emailjs-com';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}));


export default function ContactInformation () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('gmail', 'template_JfyNHSR3', e.target, 'user_aiYN67VokkqmZ6kxfpTQU')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className={classes.paper}>
            <Typography variant="h6" component="h6" gutterBottom>
                Get In Touch
            </Typography>
            
            <form onSubmit={sendEmail} className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    name="from_name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="from_email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Enter Your Subject"
                    name="email_subject"
                    autoComplete="text"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    name="html_message"
                    autoComplete="text"
                    autoFocus
                    placeholder="Enter Your Text"
                    multiline
                    rows={2}
                    rowsMax={4}
                />
                <Collapse in={open}>
                    <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                    Happy to connect you!
                    </Alert>
                </Collapse>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Send Mail
                </Button>
            </form>
        </div>
    );
};

