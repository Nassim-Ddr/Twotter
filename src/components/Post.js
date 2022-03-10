import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import PostScore from './PostScore'
import PostHeader from './PostHeader';
import PostMessage from './PostMessage';


import '../style/Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: props.userData, 
            postData: props.postData
        }
    }

    render() {
        return (
            <Grid container className='PostContainer'>
                <Grid item xs={2} md={1}>
                    <PostScore score={this.state.postData.score}/>
                </Grid>
                <Grid container direction='column' item xs={10} md={11} className="ContentContainer">
                    <Grid item>
                        <PostHeader userData={this.state.userData} postData={this.state.postData}/>
                    </Grid>
                    <Grid item>
                        <PostMessage postData={this.state.postData}/>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default Post;