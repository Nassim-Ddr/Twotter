import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Menu from './Menu';
import Home from './Home';
import Profile from './Profile'


const userData = {
    id: "@AA_Nassim",
    name: "AHMED ALI Nassim",
    ppic: "URL TO PIC"
}

class LoggedIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            userData: userData
        }
    }

    render() {


        return (
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <Grid container direction="row" justifyContent="center" className='Grid'>
                    <Grid item xs={2} >
                        <div className='sticky'>
                            <Menu userData={this.state.userData} />
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        {this.state.content === "Profile" && <Profile userData={this.state.userData} />}
                        {this.state.content === "Search" && <h1>Search</h1>}
                        {this.state.content === "Home" && <Home userData={this.state.userData} />}
                    </Grid>
                </Grid>
            </Box>);
    }
}

export default LoggedIn