import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GradeIcon from '@material-ui/icons/Grade';
import CreateIcon from '@material-ui/icons/Create';



export const mainListItems = (
    <div>
        
    </div>
);

export const secondaryListItems = (
    <div>
        <ListItem button component={Link} to="/home">
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
            <ListItemIcon>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button component={Link} to="/portfolio">
            <ListItemIcon>
                <GradeIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button component={Link} to="/blog">
            <ListItemIcon>
                <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
            <ListItemIcon>
                <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItem>
    </div>
);