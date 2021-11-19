import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField required sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Email" type="email" name="email" onChange={handleOnChange} variant="standard" />
                        <TextField
                            required
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">Dont't have an account?Please Register</Button></NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created: {user.email}</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://i.ibb.co/fSV2rX3/undraw-Login-re-4vu2.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;