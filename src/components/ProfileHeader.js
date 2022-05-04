import { Box, Grid, Avatar, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import ProfileHeaderBtn from './ProfileHeaderBtn';

const ProfileHeader = (props) => {

    return (
        <Grid container direction="column">
            <Grid item container direction="row">
                <Grid item xs={12} md={1}>
                    <div className='flex-column-center'>
                        <Avatar alt={props.profileData.name} src={props.profileData.ppic} sx={{ width: 50, height: 50 }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={11}>
                    <Box className='Info'>
                        <ListItemText primary={props.profileData.name} secondary={props.profileData.id} />
                        <ProfileHeaderBtn currentUser={props.userData.id === props.profileData.id ? "TRUE" : ""} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container  wrap="nowrap" className="BioContainer" >
                <p>{props.profileData.bio}</p>
            </Grid>
        </Grid>

    );
}

export default ProfileHeader