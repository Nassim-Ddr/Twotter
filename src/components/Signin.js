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

    constructor(props) {
        super(props)
        this.state = {
            errEmail: false,
            errPassword: false,
            errLogin: false
        }
    }

    validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

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

        if (this.state.errEmail || this.state.errPassword) {
            console.log("erreur detecté")
            return
        }

        const data = new FormData(event.currentTarget);

        this.checkUser(data.get('email'), data.get('password')).then(response => {
            console.log(response)
            this.props.setUserData(response.data)
            this.props.goTo("LOGGEDIN")
        }).catch(e => {
            console.log("LOGIN/PWD INCORRECTE")
            this.setState({
                errLogin:true
            })
        })


    };

    goToSignUP = () => {
        this.props.goTo("SIGNUP")
    }

    checkUser = async (login, pwd) => {
        var str = 'http://localhost:4000/api/user/login'
        let res = await axios.post(str, { login: login, password: pwd }, { withCredentials: true });
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

                    {this.state.errLogin && <Typography component="h1" variant="h5" >
                        Erreur d'authentification
                    </Typography>}
                    <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            error={this.state.errEmail}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleChangeEmail}
                        />
                        <TextField
                            error={this.state.errPassword}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleChangePassword}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="I can't remember ಥ‿ಥ"
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
                                    Forgot password? Sad ಥ‿ಥ
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={this.goToSignUP}>
                                    {"join the cult (☞ﾟ∀ﾟ)☞"}
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