import { Avatar, Box } from '@mui/material';
import React from 'react';

import PostHeaderBtn from './PostHeaderBtn';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import { CommentPostedTime } from '../utils/Time'

class PostHeader extends React.Component {

    handleClick = (event) => {
        this.props.goToProfile(this.props.postData.userID)
    };

    render() {
        return (
            <Box className="PostHeaderContainer">
                {/* <Avatar alt="AHMED ALI NASSIM" src="1.jpg" />
                <div className='UserName'>{this.state.postData.userName}</div> */}
                <ListItemButton onClick={this.handleClick}>
                    <ListItemAvatar>
                        <Avatar alt={this.props.postData.userName} src={this.props.postData.ppic} />
                    </ListItemAvatar>
                    <ListItemText primary={this.props.postData.userName} secondary={this.props.postData.userID} />
                </ListItemButton>
                <div className="PostTime">
                    {CommentPostedTime(new Date() - this.props.postData.postTime) + " ago"}
                </div>
                <div className='BtnContainer'>
                    <PostHeaderBtn currentUser={this.props.userData.id === this.props.postData.userID ? "TRUE" : ""} />
                </div>
            </Box>
        );
    }

}

export default PostHeader;