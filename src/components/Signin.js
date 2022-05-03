import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import axios from 'axios';

class Signin extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        this.checkUser(data.get('email'), data.get('password') ).then(response => {
            this.props.setUserData(response.data)
            this.props.goTo("LOGGEDIN")
        }).catch(e => {
            console.log("LOGIN/PWD INCORRECTE")
        })

        
    };

    goToSignUP = () => {
        this.props.goTo("SIGNUP")
    }

    checkUser = async (login, pwd) => {
        var str = 'http://localhost:4000/api/user/login'
        let res = await axios.post(str, {login: login, password: pwd}, { withCredentials: true });
        return new Promise((resolve, reject) => {
            if (res.status === 200) resolve(res)
            else reject(res)
        })
    }

    getUserData = async (login) => {
        var str = 'http://localhost:4000/api/user/'
        str = str.concat(login)
        let res = await axios.get(str, { withCredentials: true })
        return new Promise((resolve, reject) => {
            if (res.status === 200) resolve(res)
            else reject(res)
        })
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className='flex-column-center'>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={this.goToSignUP}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default Signin;