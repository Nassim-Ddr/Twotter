import { Box, Grid, Avatar, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import PRofileHeaderBtn from './ProfileHeaderBtn';

const ProfileHeader = (props) => {

    const [profileData, setProfileData] = useState(props.profileData)
    const [userData, setUserData] = useState(props.userData)

    return (
        <Grid container direction="column">
            <Grid item container direction="row">
                <Grid item xs={12} md={1}>
                    <div className='flex-column-center'>
                        <Avatar alt={profileData.name} src={profileData.ppic} sx={{ width: 50, height: 50 }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={11}>
                    <Box className='Info'>
                        <ListItemText primary={profileData.name} secondary={profileData.id} />
                        <PRofileHeaderBtn currentUser={userData.id === profileData.id ? "TRUE" : ""} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container  wrap="nowrap" className="BioContainer" >
                <Typography>{profileData.bio}</Typography>
            </Grid>
        </Grid>

    );
}

export default ProfileHeader