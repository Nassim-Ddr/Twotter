import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import PostScore from './PostScore'
import PostHeader from './PostHeader';
import PostMessage from './PostMessage';
import Divider from '@mui/material/Divider';


import '../style/Post.css'


const replyData = {
    userID: "@SOS",
    userName: "Nassim SOS ALI",
    postTime: new Date(2022, 3, 4, 12, 32, 2),
    content: "SOOOOOOOOOOOOOOOOOOOOOOOS",
    score: 347
}

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: props.userData,
            postData: props.postData,
            isReply: props.isReply
        }
    }

    render() {
        console.log("isReply : ", this.state.isReply)
        return (
            <Grid container className="MainPostContainer">
                <Grid item container className='PostContainer'>
                    <Grid item xs={2} md={1}>
                        <PostScore score={this.state.postData.score} />
                    </Grid>
                    <Grid container direction='column' item xs={10} md={11} className="ContentContainer">
                        <Grid item>
                            <PostHeader userData={this.state.userData} postData={this.state.postData} />
                        </Grid>
                        <Grid item>
                            <PostMessage postData={this.state.postData} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* {!this.state.isReply &&
                    <Grid item container directon="row">
                        <Grid item container xs={1} className="Devider ">
                            <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2.5 }} />
                        </Grid>

                        <Grid item container className="ReplyContainer" xs={11}>
                            <Post userData={this.state.userData} postData={replyData} isReply={true} />
                            <Post userData={this.state.userData} postData={replyData} isReply={true} />
                        </Grid>
                    </Grid>
                } */}
            </Grid>
        );
    }
}

export default Post;