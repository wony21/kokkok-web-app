import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { 
    Typography, Button, TextField, makeStyles, FormControl, FormControlLabel, Checkbox } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    container: {
        width: '100%'
    },
    paper:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    avatar:{
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
    },
    txtid: {
        width: '100%',
    },
    txtpw: {
        width: '100%',
    }
}));   

export default function Login() {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <avatar className={classes.avatar}>
                    <AccountCircleIcon style={{fontSize: 72}}/>
                </avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <FormControl className={classes.form}>
                    <TextField 
                        className={classes.txtid} 
                        id="txt-user-id" 
                        label="아이디" />
                    <TextField 
                        className={classes.txtpw} 
                        id="txt-password" 
                        label="Password" 
                        type="Password" 
                        autoComplete="current-password" />
                    <FormControlLabel 
                        control={<Checkbox value="remember" color="primary"></Checkbox>}
                        label="Remember me"
                        />
                    <Button 
                        variant="contained">
                        로그인
                    </Button>
                </FormControl>
            </div>
        </Container>
    );
}