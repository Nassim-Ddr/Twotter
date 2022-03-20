import { Box, CssBaseline, Grid } from '@mui/material';
import React from 'react';

import '../style/Profile.css'

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData, 
            profileData: props.profileData
        }
    }

    render() {
        return (
            <Box className='red'>
                <CssBaseline />
                <Grid container>

                </Grid>
            </Box>
        )
    }
}

export default Profile