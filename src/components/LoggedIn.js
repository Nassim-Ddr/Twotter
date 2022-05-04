import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Menu from './Menu';
import Home from './Home';
import Profile from './Profile'

import axios from 'axios';

class LoggedIn extends React.Component {

    constructor(props) {
        super(props);
        const tmp = {
            id:  props.userData.userid,
            name: props.userData.username, 
            ppic:"URL TO PIC"
        }
        this.state = {
            content: props.content,
            userData: tmp, 
            otherUserData: {}
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

    goToProfile = async (userid) => {
        if (userid === this.state.userData.id) {
            
            this.changeTab("Profile")
            return
        }

        let str = "http://localhost:4000/api/user/"
        str = str.concat(userid)

        let res = await axios.get(str, { withCredentials: true })
        const tmp = {
            id:  res.data.userid,
            name: res.data.username, 
            ppic:"URL TO PIC"
        }

        this.setState({
            content: "OtherProfile", 
            otherUserData: tmp
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
                        {this.state.content === "OtherProfile" && <Profile userData={this.state.userData} profileData={this.state.otherUserData} goToProfile={this.goToProfile}/>}
                        {this.state.content === "Profile" && <Profile userData={this.state.userData} profileData={this.state.userData} goToProfile={this.goToProfile}/>}
                        {this.state.content === "Search" && <h1>Search</h1>}
                        {this.state.content === "Home" && <Home userData={this.state.userData} goToProfile={this.goToProfile}/>}
                    </Grid>
                </Grid>
            </Box>);
    }
}

export default LoggedIn