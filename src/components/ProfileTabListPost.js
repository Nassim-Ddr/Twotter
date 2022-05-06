import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";

class ProfileTabListPost extends React.Component {


    render() {
        return (
            // <h1>te</h1>
            <Box className="TabContainer">
                {this.props.profileData.posts.map(msg => {
                    msg.score = msg.upvotes.length - msg.downvotes.length
                    return <Post key={msg._id} userData={this.props.userData} postData={msg} goToProfile={this.props.goToProfile}/>
                })}
            </Box>
        );
    }
}

export default ProfileTabListPost