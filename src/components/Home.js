import React from 'react';
import Post from './Post';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import '../style/Home.css';

class Home extends React.Component {
    // I LL PROBABLY NEED TO ADD A STATE FOR MSG LIST
    render() {
        return (
            //Post field + button
            //Messages
            <Box sx={{ flexGrow: 1 }}  className='mainContent'>
                <CssBaseline />
                <h1>test</h1>
            </Box>
        );
    }
}

export default Home;