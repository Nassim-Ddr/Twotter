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
    //USe profiledata to load posts

    constructor(props) {
        super(props)
        this.state = {
            profileData: props.profileData,
            msgList: []
        }

        
    }

    componentDidMount() {
        this.getMsgList(this.props.profileData.id)
    }

    getMsgList = async (userid) => {
        var str = 'http://localhost:4000/api/post/'
        str = str.concat(userid)
        const res = await axios.get(str, { withCredentials: true })
        
        let resdata = res.data
        resdata.map(m => {
            m.score = m.upvotes.length - m.downvotes.length
        })
        
        this.setState({
            msgList: resdata.sort((a, b) => (a.postTime<b.postTime)?1: -1)
        })
    }

    render() {
        return (
            // <h1>te</h1>
            <Box className="TabContainer">
                {this.state.msgList.map(msg => {
                    return <Post key={msg._id} userData={this.props.userData} postData={msg} goToProfile={this.props.goToProfile}/>
                })}
            </Box>
        );
    }
}

export default ProfileTabListPost