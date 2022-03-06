import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

class Home extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container  direction="column" justifyContent="center" spacing={2} className='Grid'>
                    <Grid item className='GridItem'>
                        <div className='Item'>xs=8</div>
                    </Grid>
                    <Grid item className='GridItem'>
                        <div className='Item'>xs=4</div>
                    </Grid>
                    <Grid item className='GridItem'>
                        <div className='Item'>xs=4</div>
                    </Grid>
                    <Grid item className='GridItem'>
                        <div className='Item'>xs=8</div>
                    </Grid>
                </Grid>
            </Box>
            // <Container component="main">
            //     <CssBaseline />
            //     <Box className='flex-column-center'>
            //         <Box>
            //             <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            //                 <div className='Item'>qsdsqd</div>
            //                 <div className='Item'>qsdsqd</div>
            //                 <div className='Item'>qsdsqd</div>
            //                 <div className='Item'>qsdsqd</div>
            //                 <div className='Item'>qsdsqd</div>

            //                 <Grid item className='GridItem'>
            //                     <div className='Item'>qsdsqd</div>
            //                 </Grid>
            //                 <Grid item className='GridItem'>
            //                     <div className='Item'>qsdsqd</div>
            //                 </Grid>
            //                 <Grid item className='GridItem'>
            //                     <div className='Item'>qsdsqd</div>
            //                 </Grid>
            //                 <Grid item className='GridItem'>
            //                     <div className='Item'>qsdsqd</div>
            //                 </Grid>
            //                 <Grid item className='GridItem'>
            //                     <div className='Item'>qsdsqd</div>
            //                 </Grid>
            //             </Grid>
            //         </Box>
            //     </Box>
            // </Container>
        );
    }
}

export default Home