import { Box, CssBaseline, Grid } from '@mui/material';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTab from './ProfileTab';

import '../style/Profile.css'
import axios from 'axios';

class Profile extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            followers: [], 
            followed: [], 
            info: {}
        }
    }

    componentDidMount() {
        this.loadProfileData()
    }

    loadProfileData = async () => {
        console.log("I AM CALLED")

        let str = 'http://localhost:4000/api/follow/fws/'
        str = str.concat(this.props.profileData.id)
        let res1 = await axios.get(str, { withCredentials: true })

        str = 'http://localhost:4000/api/follow/fwd/'
        str = str.concat(this.props.profileData.id)
        let res2 = await axios.get(str, { withCredentials: true })
        
        this.setState({
            followers: res1.data, 
            followed: res2.data
        })
    }

    addToFollowers = (userToAdd) => {
        let res = this.state.followers
        res.push(userToAdd)
        this.setState({
            followers: res
        })
    } 

    remFromFollowers = (userToDel) => {
        let res = this.state.followers
        const index = res.map(o => o.userid).indexOf(userToDel)
        res.splice(index, 1)
        this.setState({
            followers: res
        })
    }

    render() {

        // console.log(this.props.profileData)
        // console.log(this.state.followed)
        // console.log(this.state.followers)
        // this.loadProfileData()
        // console.log(this.props.userData)
        let b = 0
        if (this.state.followers.some(f => f.userid === this.props.userData.id)) {
            b = 1
        }
        // console.log(b)
        return (
            <Box className='mainContent' sx={{ overflow: 'hidden' }}>
                <CssBaseline />
                <Grid item container>
                    <Grid item container className='ProfileContainer' direction={"column"} xs={12}>
                        <ProfileHeader profileData={this.props.profileData} userData={this.props.userData} following={b} remfollow={this.remFromFollowers} addfollow={this.addToFollowers} loadProfileData={this.loadProfileData}/>
                    </Grid>
                    <Grid item xs={12} className="Tabs">
                        <ProfileTab profileData={this.props.profileData} userData={this.props.userData} followers={this.state.followers} followed={this.state.followed} goToProfile={this.props.goToProfile}/>
                    </Grid>

                </Grid>
            </Box>
        )
    }
}

export default Profile