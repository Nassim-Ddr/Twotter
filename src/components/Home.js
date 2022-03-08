import React from 'react';
import Post from './Post';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import '../style/Home.css';

const userData = {

}

const postData = {
    
}

class Home extends React.Component {
    // I LL PROBABLY NEED TO ADD A STATE FOR MSG LIST
    render() {
        return (
            //Post field + button
            //Messages
            <Box sx={{ flexGrow: 1 }}  className='mainContent'>
                <CssBaseline />
                <Post />
            </Box>
        );
    }
}

export default Home;