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
        }
    }

    render() {

        return (
            <Box>
                <Button size="small" variant="contained" className={`${!this.props.currentUser ? "" : "Hide"}`}>
                    Reply
                </Button>
                <Button size="small" variant="contained" className={`${this.props.currentUser ? "" : "Hide"}`}>
                    Edit
                </Button>
                <Button size="small" variant="contained" color="error" className={`${this.props.currentUser ? "" : "Hide"}`}>
                    Delete
                </Button>
            </Box>
        );
    }

}

export default PostHeaderBtn;