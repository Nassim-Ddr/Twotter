import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import PostScore from './PostScore'

import '../style/Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: props.userData, 
            commentData: props.commentData
        }
    }

    render() {
        //Grid two columns
        //Column 1 : scor
        //Column 2 : 
        //Grid 2 rows : 
        //Row 1 : Header (Profile pic, time, Buttons)
        //Row 2 : MEssage
        return (
            <Grid container className='PostContainer'>
                <Grid item xs={1}>
                    {/* SCORE COMPONENT */}
                    <PostScore score="30"/>
                </Grid>
                <Grid container direction='column' item xs={11} className="ContentContainer">
                    <Grid item>
                        {/* HEADER */}
                        HEADER OF THE MSG
                    </Grid>
                    <Grid item>
                        {/* MESSAGE */}
                        MESSAGE
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default Post;