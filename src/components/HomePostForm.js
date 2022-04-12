import { Avatar, Box } from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import '../style/PostForm.css';

class HomePostForm extends React.Component {

    text = "";

    handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        const newPost = {
            id: 3,
            userID: this.props.userData.id,
            userName: this.props.userData.name,
            postTime: Date.now(),
            content: data.get('text'),
            score: 0
        }

        this.props.addPost(newPost)
    }

    render() {
        return (
            <Box component="form" noValidate onSubmit={this.handleSubmit} className="PostFormContainer">
                <div className="PostFormHeaderContainer">
                    <div className="PostFormHeader">
                        <Avatar alt="AHMED ALI NASSIM" src="1.jpg" />
                        <div className='UserName'>{this.props.userData.name}</div>
                    </div>
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}> Post </Button>
                </div>
                <TextField id="text" name="text" label="New post" multiline rows={4} defaultValue="" fullWidth />
            </Box>
        );
    }

}

export default HomePostForm