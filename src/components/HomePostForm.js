import { Avatar, Box } from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import '../style/PostForm.css';
import axios from "axios";

class HomePostForm extends React.Component {

    text = "";

    handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        
        const newPost = {
            userID: this.props.userData.id,
            userName: this.props.userData.name,
            content: data.get('text'),
            postTime: Date.now(),
            upvotes: [], 
            downvotes: [],
            score: 0
        }
        
        document.getElementById('text').value = ""

        this.addPostDB(newPost).then(response => {
            console.log(response)
            newPost._id = response.data.id
            // console.log(newPost)
            this.props.addPost(newPost)
        }).catch(e => {
            console.log(e)
        })
    }

    addPostDB = async (post) => {
        const str = "http://localhost:4000/api/post/"
        let res = await axios.put(str, post, { withCredentials: true })
        return res
    }

    render() {
        return (
            <Box component="form" noValidate onSubmit={this.handleSubmit} className="PostFormContainer">
                <div className="PostFormHeaderContainer">
                    <div className={this.props.userData.name}>
                        <Avatar alt={this.props.userData.name} src="1.jpg" />
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