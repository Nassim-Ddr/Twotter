import React from 'react'

import { Button } from '@mui/material';
import { Box } from '@mui/material';

class PostHeaderBtn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            setReplying: props.setReplying,
            setDeleting: props.setDeleting,
            setEditon: props.setEditing,
            currentUser: props.currentUser
        }
    }

    render() {

        return (
            <Box>
                <Button size="small" variant="contained" className={`${!this.state.currentUser ? "" : "Hide"}`}>
                    Reply
                </Button>
                <Button size="small" variant="contained" className={`${this.state.currentUser ? "" : "Hide"}`}>
                    Edit
                </Button>
                <Button size="small" variant="contained" color="error" className={`${this.state.currentUser ? "" : "Hide"}`}>
                    Delete
                </Button>
            </Box>
        );
    }

}

export default PostHeaderBtn;