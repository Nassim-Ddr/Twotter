import React from 'react'

import { Button } from '@mui/material';
import { Box } from '@mui/material';

class ProfileHeaderBtn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            setFollow: props.setDeleting,
            setEditon: props.setEditing,
            currentUser: props.currentUser
        }
    }

    render() {

        return (
            <Box>
                <Button size="small" variant="contained" className={`${!this.state.currentUser ? "" : "Hide"}`}>
                    Follow
                </Button>
                <Button size="small" variant="contained" className={`${this.state.currentUser ? "" : "Hide"}`}>
                    Edit Profile
                </Button>
            </Box>
        );
    }

}

export default ProfileHeaderBtn;