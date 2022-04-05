import React from 'react';
import Post from './Post';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const postData = {
    userID: "@AA_Nassim",
    userName: "Nassim AHMED ALI",
    postTime: new Date(2022, 3, 4, 12, 32, 2),
    content: "Hellow there hope you re doing well ! Hellow there hope you re doing well ! Hellow there hope you re doing well ! Hellow there hope you re doing well !",
    score: 347
}

const postData2 = {
    userID: "@AA_Reda",
    userName: "Reda AHMED ALI",
    postTime: new Date(2022, 5, 24, 15, 2, 3),
    content: "Oi! Hellow there hope you re doing well !",
    score: 8222
}

const msgList = [postData, postData2, postData, postData2, postData]

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

                {msgList.map(msg => {
                    return  <Post userData={this.state.userData} postData={msg}/>
                })}
            </Box>
        );
    }
}

export default Home;