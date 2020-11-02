import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Avatar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { secondaryListItems } from '../Dashboard/Listltems';

import img from '../../Image/Fahim.jpg';
import imgFahim from '../../Image/FahimAbout.jpg';
import Content from './Content';

function Copyright() {
    return (
        <Typography variant="body3" color="textSecondary" align="center">
        {'©'}
        <Link color="inherit" href="/"> </Link>{' '}
        {new Date().getFullYear()}
        {''}
        </Typography>
    );
    }

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        backgroundColor: '#fff',
        color: '#000'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#f0f0f0'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: '100vh',
    },
    large: {
        width: 50,
        hidth: 20,
    },
    textAlign: {
        textAlign: 'center',
    },
    img: {
        width: 475,
        height: 630,
        '&:hover': {
            display: 'block',
            padding: 10,
            background: 'linear-gradient(to right, #009fff, #ec2f4b)',
            borderRadius: '5px',
            boxShadow: '0px 70px 100px -10px rgba(0, 0, 0, 0.4)',
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
        }
    }
}));

export default function About() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Fahim Hasan's World
                    </Typography>
                    <IconButton color="inherit">
                        <Link href=" https://github.com/Fahim1556
                        " target="_blank">
                            <GitHubIcon />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://www.linkedin.com/in/fahim-hasan-76b9b9152/
                        " target="_blank">
                            <LinkedInIcon />
                        </Link>
                    </IconButton>
                    
                   
                    <IconButton color="inherit">
                        <Link href="https://www.facebook.com/profile.php?id=100012732690054" target="_blank">
                            <FacebookIcon />
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider/>
                    <Avatar alt="Remy Sharp" src={img} className={classes.large} />
                <Divider />
                    <List>{secondaryListItems}</List>
                <Divider />
                <Box className={classes.textAlign} pt={40}>
                    <Copyright />
                </Box>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img className={classes.img} src={imgFahim} alt="myImage"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h3" component="h2" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" gutterBottom>
                            My intellectual curiosity drives me to be a lifelong learner.As a curious tech learner,I am currently exploring Web technology having the experience of the Software Service industry. <br/><br/>
                            I have the ability to adapt to any type of team environment,I am team oriented and get along with others when working in a group setting . I also have the ability work independently while staying on schedule and meeting those tight deadlines.
                        </Typography>
                        <Content />
                    </Grid>
                </Grid>
                </Container>
            </main>
        </div>
        
    );
};

