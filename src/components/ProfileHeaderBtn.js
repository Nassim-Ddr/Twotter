import React from 'react'

import { Button } from '@mui/material';
import { Box } from '@mui/material';

import axios from 'axios';

class ProfileHeaderBtn extends React.Component {

    follow = async () => {
        let str = 'http://localhost:4000/api/follow/'
        axios.put(str, {userid: this.props.userData.id, follow: this.props.profileData.id}, { withCredentials: true }).then((response) => {
            // console.log(response)
            const m = {
                userid: this.props.userData.id, 
                username: this.props.userData.name, 
                ppic: this.props.userData.ppic
            }
            this.props.addfollow(m)
        }).catch(e => {
            console.log(e)
        })
        
    }

    unfollow = async () => {
        let str = 'http://localhost:4000/api/follow/'
        //WTF IDK WHY I NEED TO WRAP THIS INSIDE A DATA OBJ
        axios.delete(str, {data: {userid: this.props.userData.id, follow: this.props.profileData.id}}, { withCredentials: true }).then((response) => {
            // console.log(response)
            this.props.remfollow(this.props.userData.id)
        }).catch(e => {
            console.log(e)
        })
        
    }

    render() {
        // console.log(this.props.userData)
        return (
            <Box>
                <Button size="small" variant="contained" className={`${(!this.props.currentUser && !this.props.following) ? "" : "Hide"}`} onClick={this.follow}>
                    Follow
                </Button>
                <Button size="small" variant="contained" className={`${(!this.props.currentUser && this.props.following) ? "" : "Hide"}`} onClick={this.unfollow}>
                    unfollow
                </Button>
                <Button size="small" variant="contained" className={`${this.props.currentUser ? "" : "Hide"}`}>
                    Edit Profile
                </Button>
            </Box>
        );
    }

}

export default ProfileHeaderBtn;