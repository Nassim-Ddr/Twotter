import { Avatar, Box } from '@mui/material';
import React from 'react';

import PostHeaderBtn from './PostHeaderBtn';

class PostHeader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData, 
            postData : props.postData
        }
    } 

    render() {
        return (
            <Box className="PostHeaderContainer">
                <Avatar alt="AHMED ALI NASSIM" src="1.jpg"/>
                <div className='UserName'> AHMED ALI Nassim</div>
                <div className="PostTime">10 min ago</div>
                <PostHeaderBtn currentUser="SOSIG"/>
            </Box>
        ); 
    }

}

export default PostHeader;