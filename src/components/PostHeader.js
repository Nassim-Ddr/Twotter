import { Avatar, Box } from '@mui/material';
import React from 'react';

import PostHeaderBtn from './PostHeaderBtn';

class PostHeader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData,
            postData: props.postData
        }
    }

    render() {
        return (
            <Box className="PostHeaderContainer">
                    <Avatar alt="AHMED ALI NASSIM" src="1.jpg" />
                    <div className='UserName'>{this.state.postData.userName}</div>
                    <div className="PostTime">{this.state.postData.postTime - new Date()}</div>
                    <div className='BtnContainer'>
                        <PostHeaderBtn currentUser={this.state.userData.id === this.state.postData.userID ? "TRUE" : ""} />
                    </div>
            </Box>
        );
    }

}

export default PostHeader;