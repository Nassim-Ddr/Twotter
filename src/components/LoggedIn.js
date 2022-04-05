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

    logout = () => {
        this.props.goTo("SIGNIN")
    }

    changeTab = (tab) => {
        this.setState({
            content: tab
        })
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <Grid container>
                    <Grid item xs={12} md={2}>
                        <div className='sticky'>
                            <Menu changeTab={this.changeTab} logout={this.logout} userData={this.state.userData} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        {/* <div className={(this.state.content === "Profile") ? "" : "Hide"}>
                            <Profile userData={this.state.userData} />
                        </div>
                        <div className={(this.state.content === "Search") ? "" : "Hide"}>
                            <h1>Search</h1>
                        </div>
                        <div className={(this.state.content === "Home") ? "" : "Hide"}>
                            <Home userData={this.state.userData} />
                        </div> */}
                        {this.state.content === "Profile" && <Profile userData={this.state.userData} />}
                        {this.state.content === "Search" && <h1>Search</h1>}
                        {this.state.content === "Home" && <Home userData={this.state.userData} />}
                    </Grid>
                </Grid>
            </Box>);
    }
}

export default LoggedIn