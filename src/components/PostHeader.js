import { Box } from '@mui/material';
import React from 'react';

class PostHeader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData
        }
    } 

    render() {
        return (
            <Box className="">

            </Box>
        ); 
    }

}

export default PostHeader;