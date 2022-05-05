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

    constructor(props) {
        super(props)
        this.state = {
            errEmail: false,
            errPassword: false,
            errSignup: false,
            errUserid: false,
            errUsername: false,
            messageErreur: "lul"
        }
    }

    validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    handleChangeUserid = (event) => {
        if (event.target.value.length < 2) {
            this.setState({
                errUserid: true
            })
        } else {
            this.setState({
                errUserid: false
            })
        }
    }

    handleChangeUsername = (event) => {
        if (event.target.value.length < 2) {
            this.setState({
                errUsername: true
            })
        } else {
            this.setState({
                errUsername: false
            })
        }
    }

    handleChangeEmail = (event) => {
        // console.log(event.target.value)
        if (!this.validateEmail(event.target.value)) {
            this.setState({
                errEmail: true
            })
        }
        else {
            this.setState({
                errEmail: false
            })
        }
    }

    handleChangePassword = (event) => {
        if (event.target.value.length < 6) {
            this.setState({
                errPassword: true
            })
        } else {
            this.setState({
                errPassword: false
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.errEmail || this.state.errPassword || this.state.errUserid || this.state.errUsername) {
            console.log("erreur detecté")
            return
        }


        const data = new FormData(event.currentTarget);

        const newUser = {
            login: data.get('email'),
            password: data.get('password'),
            username: data.get('username'),
            userid: data.get('userid'),
        }
        // console.log(newUser)

        this.createAccount(newUser).then(response => {
            console.log(response)
            this.props.goTo("SIGNIN")
        }).catch(e => {
            if (e.response.status === 430) {
                this.setState({
                    messageErreur: "userid already exists",
                    errUserid: true,
                    errSignup: true
                })
            } else if (e.response.status === 431) {
                this.setState({
                    messageErreur: "email already exists",
                    errEmail: true, 
                    errSignup: true
                })
            } else {
                this.setState({
                    messageErreur: "Can't reach the server",
                    errSignup: true
                })
            }
        })


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
                    {this.state.errSignup && <Typography component="h1" variant="h5" >
                        {this.state.messageErreur}
                    </Typography>}
                    <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={this.state.errUsername}
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    onChange={this.handleChangeUsername}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={this.state.errUserid}
                                    required
                                    fullWidth
                                    id="userid"
                                    label="User ID"
                                    name="userid"
                                    autoComplete="userid"
                                    onChange={this.handleChangeUserid}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={this.state.errEmail}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handleChangeEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={this.state.errPassword}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={this.handleChangePassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="acceptTerms" color="primary" />}
                                    label="You can steal and sell my data ಥ‿ಥ"
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
                                    Already have an account? Sign in (ノ͡° ͜ʖ ͡°)ノ︵┻┻
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