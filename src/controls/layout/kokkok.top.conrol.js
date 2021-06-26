import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import imgLogo from '../../KokKok_LOGO.png';
import { 
    Container, CssBaseline, Grid, Typography, Button, TextField, makeStyles, 
    FormControl, FormControlLabel, Checkbox, Link, CircularProgress, Box, AppBar, IconButton, Toolbar } from '@material-ui/core';
import { green, red, deepOrange } from '@material-ui/core/colors';
import styles from './kokkok.top.control.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 0,
        paddingRight: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: deepOrange[500],
    }
}));

export default function TopControl() {
    const classes = useStyles();
    
    return (
        <React.Fragment id="fragment">
            {/* <CssBaseline /> */}
            <AppBar id="appbar" position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        사고싶은거 콕콕
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}