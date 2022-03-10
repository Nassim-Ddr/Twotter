import React from 'react';
import Post from './Post';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import '../style/Home.css';

const postData = {
    userID: "@AA_Nassim",
    userName: "Nassim AHMED ALI",
    postTime: new Date('2022-2-17T03:24:00'),
    content: "Hellow there hope you re doing well ! Hellow there hope you re doing well ! Hellow there hope you re doing well ! Hellow there hope you re doing well !",
    score: 347
}

const postData2 = {
    userID: "@AA_Reda",
    userName: "Reda AHMED ALI",
    postTime: new Date('2022-2-17T03:24:00'),
    content: "Oi! Hellow there hope you re doing well !",
    score: 8222
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData
        }
    }
    render() {
        return (
            //Post field + button
            //Messages
            <Box sx={{ flexGrow: 1 }}  className='mainContent'>
                <CssBaseline />
                <Post userData={this.state.userData} postData={postData}/>
                <Post userData={this.state.userData} postData={postData2}/>
            </Box>
        );
    }
}

export default Home;