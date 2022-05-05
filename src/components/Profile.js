import { Box, CssBaseline, Grid } from '@mui/material';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTab from './ProfileTab';

import '../style/Profile.css'

class Profile extends React.Component {

    

    render() {
        let b = 0
        if (this.props.profileData.followers.some(f => f.userid === this.props.userData.id)) {
            b = 1
        }
        // console.log(b)
        return (
            <Box className='mainContent' sx={{ overflow: 'hidden' }}>
                <CssBaseline />
                <Grid item container>
                    <Grid item container className='ProfileContainer' direction={"column"} xs={12}>
                        <ProfileHeader profileData={this.props.profileData} userData={this.props.userData} following={b} remfollow={this.props.remfollow} addfollow={this.props.addfollow} />
                    </Grid>
                    <Grid item xs={12} className="Tabs">
                        <ProfileTab profileData={this.props.profileData} userData={this.props.userData} goToProfile={this.props.goToProfile}/>
                    </Grid>

                </Grid>
            </Box>
        )
    }
}

export default Profile