import React from 'react';
import Post from './Post';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import HomePostForm from './HomePostForm';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userData: props.userData,
            msgList: []
        }
        

    }

    componentDidMount() {
        this.returnMsgList(this.props.userData.id)
    }

    setMsgList = (newMsgList) => {
        newMsgList.map (m => {
            m.score = m.upvotes.length - m.downvotes.length
        })
        this.setState({
            msgList: newMsgList.sort((a, b) => (a.postTime<b.postTime)?1: -1)
        })
    }

    returnMsgList = async (userid) => {
        let result = await this.getMsgList(userid)
        this.setMsgList(result.data)
    }

    getMsgList = async (userid) => {
        var str = 'http://localhost:4000/api/post/f/'
        str = str.concat(userid)
        let res = await axios.get(str, { withCredentials: true })
        return new Promise((resolve, reject) => {
            if (res.status === 200) resolve(res)
            else reject(res)
        })
    }

    addPost = (newPostData) => {
        let newList = [newPostData]
        newList = newList.concat(this.state.msgList)
        this.setState({
            msgList: newList
        })
        //INSERT TO BDD
    }

    render() {

        return (
            <Box sx={{ flexGrow: 1 }} className='mainContent'>
                <CssBaseline />
                <HomePostForm addPost={this.addPost} userData={this.state.userData} />

                {this.state.msgList.map(msg => {
                    return <Post key={msg._id} userData={this.state.userData} postData={msg}  goToProfile={this.props.goToProfile}/>
                })}
            </Box>
        );
    }
}

export default Home;