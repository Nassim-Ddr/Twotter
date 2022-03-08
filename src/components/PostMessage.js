import { Box } from '@mui/material';
import React from 'react';

class PostMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: props.postData
        }
    }

    render() {
        return(
            <Box className="PostMessageContainer">
                CECEI EST UN MESSAGE
            </Box>
            
        );
    }
}

export default PostMessage;