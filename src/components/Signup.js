import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import axios from 'axios';

class Singup extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const newUser = {
            login: data.get('email'),
            password: data.get('password'),
            username: data.get('username'), 
            userid: data.get('userid'), 
        }
        console.log(newUser)

        this.createAccount(newUser).then(response => {
            console.log(response)
        }).catch(e => {
            console.log(e)
        })

        this.props.goTo("SIGNIN")
    }

    goToSignin = () => {
        this.props.goTo("SIGNIN")
    }

    createAccount = async (newUser) => {
        let res = await axios.put('http://localhost:4000/api/user', newUser, { withCredentials: true });
        // console.log(res)
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="userid"
                                    label="User ID"
                                    name="userid"
                                    autoComplete="userid"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="acceptTerms" color="primary" />}
                                    label="You can steal and sell my data UwU"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                {/* CHANGE THIS LATER FOR SWAPING STATE */}
                                <Link href="#" variant="body2" onClick={this.goToSignin}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default Singup