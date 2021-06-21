import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { 
    Grid, Typography, Button, TextField, makeStyles, FormControl, FormControlLabel, Checkbox, Link } from '@material-ui/core';


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
    inputfield: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    bottom: {
        marginTop: theme.spacing(1),
    },
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
                        className={classes.inputfield} 
                        id="txt-user-id" 
                        variant="outlined"
                        label="아이디" />
                    <TextField 
                        className={classes.inputfield} 
                        id="txt-password" 
                        variant="outlined"
                        label="비밀번호" 
                        type="Password" 
                        autoComplete="current-password" />
                    <FormControlLabel 
                        control={<Checkbox value="remember" color="primary"></Checkbox>}
                        label="Remember me"
                        />
                    <Button 
                        variant="contained"
                        color="primary"
                        >
                        로그인
                    </Button>
                    <Grid container>
                        <Grid className={classes.bottom} item>
                            <Link 
                                href="#" 
                                variant="body2"
                                onClick={() => {
                                    console.log('Find password click!');
                                }}
                                >
                                비밀번호가 기억나지 않으세요?
                            </Link>
                        </Grid>
                        <Grid className={classes.bottom} item>
                            <Link 
                                href="#" 
                                variant="body2"
                                onClick={() =>{
                                    console.log('Create account click!');
                                }}
                                >
                                회원이 아직 아니시라고요?
                            </Link>
                        </Grid>
                    </Grid>
                </FormControl>
            </div>
        </Container>
    );
}