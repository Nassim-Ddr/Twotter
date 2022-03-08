import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';




class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: props.userID,
            postID: props.postID,
            time: props.time,
            score: props.score,
            msg: props.msg
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
            <Grid container direction='row'>
                <Grid item xs={1}>
                    {/* SCORE COMPONENT */}
                </Grid>
                <Grid container direction='column' item xs={11}>
                    <Grid item>
                        {/* HEADER */}
                    </Grid>
                    <Grid item>
                        {/* MESSAGE */}
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default Post;