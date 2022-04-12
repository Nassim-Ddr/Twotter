import React from 'react';
import Post from './Post';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import HomePostForm from './HomePostForm';

const postData = {
    id: 1,
    userID: "@AA_Nassim",
    userName: "Nassim AHMED ALI",
    postTime: new Date(2022, 3, 4, 12, 32, 2),
    content: "Hellow there hope you re doing well ! Hellow there hope you re doing well ! Hellow there hope you re doing well ! Hellow there hope you re doing well !",
    score: 347
}

const postData2 = {
    id: 2, 
    userID: "@AA_Reda",
    userName: "Reda AHMED ALI",
    postTime: new Date(2022, 5, 24, 15, 2, 3),
    content: "Oi! Hellow there hope you re doing well !",
    score: 8222
}

const msgList = [postData, postData2]

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData,
            msgList: [postData, postData2]
        }
    }

    addPost = (newPostData) => {
        const newList = this.state.msgList.concat(newPostData)
        console.log("lul : ", newList)
        this.setState({
            msgList: newList
        })
        //INSERT TO BDD
    }

    i = 0
    getI() {
        this.i += 1
        return this.i;
    }

    render() {
        
        return (
            <Box sx={{ flexGrow: 1 }}  className='mainContent'>
                <CssBaseline />
                <HomePostForm addPost={this.addPost} userData={this.state.userData}/>
                
                {this.state.msgList.map(msg => {
                    return  <Post key={this.getI()} userData={this.state.userData} postData={msg}/>
                })}
            </Box>
        );
    }
}

export default Home;