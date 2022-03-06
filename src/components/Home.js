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
                    <Grid item className='GridItem' xs={2} md={4}>
                        <Menu />
                    </Grid>
                    <Grid item className='GridItem 'xs={10} md={8}>
                        <div className='blue'>THIS IS THE MAIN CONTENT OF THE PAGE (Mur or Profile)</div>
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