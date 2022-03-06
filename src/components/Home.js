import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Menu from './Menu'

class Home extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <Grid container  direction="row" justifyContent="center" className='Grid'>
                    <Grid item className='GridItem' xs={2}>
                        <Menu />
                    </Grid>
                    <Grid item className='GridItem 'xs={10}>
                        <div className='blue'>THIS IS THE MAIN CONTENT OF THE PAGE (Mur or Profile)</div>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Home