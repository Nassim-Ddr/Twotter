import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";

import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";

const postData2 = {
    _id: "Ubunga",
    userID: "@AA_Reda",
    userName: "Reda AHMED ALI",
    postTime: new Date(2022, 5, 24, 15, 2, 3),
    content: "Oi! Hellow there hope you re doing well !",
    score: 8222,
    upvotes: [],
    downvotes: []
}

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