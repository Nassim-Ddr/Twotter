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
                <Button variant="contained" className={`${!this.state.currentUser ? "" : "display--none"}`}>
                    Reply
                </Button>
                <Button variant="contained" className={`${this.state.currentUser ? "" : "display--none"}`}>
                    Edit
                </Button>
                <Button variant="contained" color="error" className={`${this.state.currentUser ? "" : "display--none"}`}>
                    Delete
                </Button>
            </Box>
        );
    }

}

export default PostHeaderBtn;