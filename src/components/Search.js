import { Box, CssBaseline } from "@mui/material";
import React from "react";

import SearchForm from './SearchForm'
import Post from './Post'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msgList: []
        }
    }

    setMsgList = (newMsgList) => {
        this.setState({
            msgList: newMsgList
        })
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }} className='mainContent'>
                <CssBaseline />
                <SearchForm setMsgList={this.setMsgList} userData={this.props.userData}/>
                
                {this.state.msgList.map(msg => {
                    msg.score = msg.upvotes.length - msg.downvotes.length
                    return <Post key={msg._id} userData={this.props.userData} postData={msg}  goToProfile={this.props.goToProfile}/>
                })}
            </Box>
        )
    }
}

export default Search;