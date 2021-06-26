import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { 
    Container, CssBaseline, Grid, Typography, Button, TextField, makeStyles, 
    FormControl, FormControlLabel, Checkbox, Link, CircularProgress, Box } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    container: {
        width: '100%'
    },

    menu_grid: {
        
    }
    
}));   

export default function TopControl() {
    const classes = useStyles();
    
    return (
        <Box>
            <CssBaseline />
            <Grid container>
                <Grid item>
                    <TextField id="standard-search" label="KOKKOK" type="search" />
                </Grid>
                <Grid item>
                    <AccountCircleIcon style={{fontSize:32, color:red}}></AccountCircleIcon>  
                </Grid>
            </Grid>
        </Box>
    );
}