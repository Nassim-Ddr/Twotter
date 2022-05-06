import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Menu from './Menu';
import Home from './Home';
import Profile from './Profile'
import Search from './Search';

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

    logout = async () => {
        let str = "http://localhost:4000/api/user/logout"
        axios.post(str, {userid: this.state.userData.id}, { withCredentials: true }).then(response => {
            this.props.goTo("SIGNIN")
        }).catch(e => {
            console.log("Erreur de deconnection", e)
        })
        
    }

    changeTab = (tab) => {
        this.setState({
            content: tab
        })
    }

    goToProfile = async (userid) => {
        let str = "http://localhost:4000/api/user/"
        str = str.concat(userid)

        let res = await axios.get(str, { withCredentials: true })
        const tmp = {
            id:  res.data.userid,
            name: res.data.username, 
            ppic:"URL TO PIC"
        }

        str = 'http://localhost:4000/api/follow/fws/'
        str = str.concat(tmp.id)
        let res1 = await axios.get(str, { withCredentials: true })

        str = 'http://localhost:4000/api/follow/fwd/'
        str = str.concat(tmp.id)
        let res2 = await axios.get(str, { withCredentials: true })

        str = 'http://localhost:4000/api/post/'
        str = str.concat(userid)
        const res3 = await axios.get(str, { withCredentials: true })

        tmp.followers = res1.data
        tmp.followed = res2.data
        tmp.posts = res3.data.sort((a, b) => (a.postTime<b.postTime)?1: -1)

        // console.log(tmp)
        this.setState({
            content: "Profile", 
            otherUserData: tmp
        })
        // this.setState({})
    }


    addToFollowers = (userToAdd) => {
        let res = this.state.otherUserData
        res.followers.push(userToAdd)
        this.setState({
            followers: res
        })
    } 

    remFromFollowers = (userToDel) => {
        let res = this.state.otherUserData
        const index = res.followers.map(o => o.userid).indexOf(userToDel)
        res.followers.splice(index, 1)
        this.setState({
            followers: res
        })
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <Grid container>
                    <Grid item xs={12} md={2}>
                        <div className='sticky'>
                            <Menu changeTab={this.changeTab} logout={this.logout} userData={this.state.userData} goToProfile={this.goToProfile}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        {/* {this.state.content === "OtherProfile" && <Profile userData={this.state.userData} profileData={this.state.otherUserData} goToProfile={this.goToProfile}/>} */}
                        {this.state.content === "Profile" && <Profile userData={this.state.userData} profileData={this.state.otherUserData} goToProfile={this.goToProfile} remfollow={this.remFromFollowers} addfollow={this.addToFollowers}/>}
                        {this.state.content === "Search" && <Search userData={this.state.userData} goToProfile={this.goToProfile}/>}
                        {this.state.content === "Home" && <Home userData={this.state.userData} goToProfile={this.goToProfile}/>}
                    </Grid>
                </Grid>
            </Box>);
    }
}

export default LoggedIn