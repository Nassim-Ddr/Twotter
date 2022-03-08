import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Menu from './Menu';
import Home from './Home';

const userData = {
    id: "@AA_Nassim",
    name: "AHMED ALI Nassim", 
    ppic: "URL TO PIC"
}

class LoggedIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            userData : userData
        }
    }

    render() {


        return (
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <Grid container direction="row" justifyContent="center" className='Grid'>
                    <Grid item className='GridItem' xs={2} >
                        <Menu userData={this.state.userData}/>
                    </Grid>
                    <Grid item className='GridItem ' xs={10}>
                        {this.state.content === "Profile" && <h1>Profile</h1>}
                        {this.state.content === "Search" && <h1>Search</h1>}
                        {this.state.content === "Home" && <Home userData={this.state.userData} />}
                    </Grid>
                </Grid>
            </Box>);
        // if (this.state.content === "Profile")
        //     return (
        //         <Box sx={{ flexGrow: 1 }}>
        //             <CssBaseline />
        //             <Grid container direction="row" justifyContent="center" className='Grid'>
        //                 <Grid item className='GridItem' xs={2}>
        //                     <Menu />
        //                 </Grid>
        //                 <Grid item className='GridItem ' xs={10}>
        //                     <h1>Profile</h1>
        //                 </Grid>
        //             </Grid>
        //         </Box>
        //     );

        // else if (this.state.content === "Search")
        //     return (
        //         <Box sx={{ flexGrow: 1 }}>
        //             <CssBaseline />
        //             <Grid container direction="row" justifyContent="center" className='Grid'>
        //                 <Grid item className='GridItem' xs={2}>
        //                     <Menu />
        //                 </Grid>
        //                 <Grid item className='GridItem ' xs={10}>
        //                     <h1>Search</h1>
        //                 </Grid>
        //             </Grid>
        //         </Box>
        //     );
        // else return (
        //     <Box sx={{ flexGrow: 1 }}>
        //         <CssBaseline />
        //         <Grid container direction="row" justifyContent="center" className='Grid'>
        //             <Grid item className='GridItem' xs={2}>
        //                 <Menu />
        //             </Grid>
        //             <Grid item className='GridItem ' xs={10}>
        //                 <Home />
        //             </Grid>
        //         </Grid>
        //     </Box>
        // );
    }
}

export default LoggedIn