import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";

const postData2 = {
    userID: "@AA_Reda",
    userName: "Reda AHMED ALI",
    postTime: new Date(2022, 5, 24, 15, 2, 3),
    content: "Oi! Hellow there hope you re doing well !",
    score: 8222, 
    upvotes: [], 
    downvotes: []
}

class ProfileTabListPost extends React.Component {
    //USe profiledata to load posts
    
    render() {
        return(
            // <h1>te</h1>
            <Box className="TabContainer">
                <Post userData={this.props.userData} postData={postData2}/>
                <Post userData={this.props.userData} postData={postData2}/>
                <Post userData={this.props.userData} postData={postData2}/>
                {/* <Post userData={this.props.userData} postData={postData2}/> */}
            </Box>
        );
    }
}

export default ProfileTabListPost