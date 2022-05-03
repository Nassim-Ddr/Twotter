import { Box, CssBaseline, Grid } from '@mui/material';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTab from './ProfileTab';

import '../style/Profile.css'

const profileData = {
    id: "@AA_Nasssim",
    name: "AHMED ALI Nassim",
    ppic: "none",
    bio: "Dolor ex quis deserunt id ad id cillum sit eiusmod adipisicing laboris. Adipisicing fugiat proident adipisicing tempor magna culpa eu in reprehenderit aute occaecat nulla labore. Et occaecat officia laborum officia do eu adipisicing labore proident. Et ad magna velit aliqua adipisicing deserunt. Irure veniam fugiat reprehenderit dolore fugiat Lorem sit. Anim elit dolor eiusmod laborum ullamco Lorem tempor laborum sint excepteur. Nulla nostrud labore non aute esse commodo enim ad culpa reprehenderit consectetur veniam et do.",
}
class Profile extends React.Component {

    loadProfileData = () => {
        
    }

    render() {

        //Load profileData and save it in var
        return (
            <Box className='mainContent' sx={{ overflow: 'hidden' }}>
                <CssBaseline />
                <Grid item container>
                    <Grid item container className='ProfileContainer' direction={"column"} xs={12}>
                        <ProfileHeader profileData={this.props.profileData} userData={this.props.userData} />
                    </Grid>
                    <Grid item xs={12} className="Tabs">
                        <ProfileTab profileData={this.props.profileData} userData={this.props.userData} />
                    </Grid>

                </Grid>
            </Box>
        )
    }
}

export default Profile