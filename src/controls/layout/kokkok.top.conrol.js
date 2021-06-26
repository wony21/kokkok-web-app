import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import imgLogo from '../../KokKok_LOGO.png';
import { 
    Container, CssBaseline, Grid, Typography, Button, TextField, makeStyles, 
    FormControl, FormControlLabel, Checkbox, Link, CircularProgress, Box, AppBar, IconButton, Toolbar } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,    
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TopControl() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}