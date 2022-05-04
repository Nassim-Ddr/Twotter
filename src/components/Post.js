import React from 'react';
import Grid from '@mui/material/Grid';
import PostScore from './PostScore'
import PostHeader from './PostHeader';
import PostMessage from './PostMessage';
import axios from 'axios';

import '../style/Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: props.userData,
            postData: props.postData,
            isReply: props.isReply
        }
    }

    upvote = () => {
        var newPostData = this.state.postData
        
        const indexUp = newPostData.upvotes.indexOf(this.props.userData.id)
        const indexDown = newPostData.downvotes.indexOf(this.props.userData.id)
        if (indexUp > -1) {
            newPostData.upvotes.splice(indexUp, 1)
            newPostData.score = newPostData.score - 1
           
            this.saveVote("/up/", this.props.userData.id, this.state.postData._id, 1)
            .then(response => {
                // console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        }
        else if (indexDown > -1)
        {
            newPostData.downvotes.splice(indexDown, 1)
            newPostData.upvotes.push(this.props.userData.id)
            newPostData.score = newPostData.score + 2
            
            this.saveVote("/up/", this.props.userData.id, this.state.postData._id, 2)
            .then(response => {
                // console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        }
        else {
            newPostData.upvotes.push(this.props.userData.id)
            newPostData.score = newPostData.score + 1
            
            this.saveVote("/up/", this.props.userData.id, this.state.postData._id, 2)
            .then(response => {
                // console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        }

        this.setState({
            postData : newPostData
        })
    }

    downvote = () => {
        var newPostData = this.state.postData
        
        const indexUp = newPostData.upvotes.indexOf(this.props.userData.id)
        const indexDown = newPostData.downvotes.indexOf(this.props.userData.id)
        if (indexUp > -1) {
            newPostData.upvotes.splice(indexUp, 1)
            newPostData.downvotes.push(this.props.userData.id)
            newPostData.score = newPostData.score - 2

            this.saveVote("/dw/", this.props.userData.id, this.state.postData._id, 2)
            .then(response => {
                // console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        }
        else if (indexDown > -1)
        {
            newPostData.downvotes.splice(indexDown, 1)
            newPostData.score = newPostData.score + 1

            this.saveVote("/dw/", this.props.userData.id, this.state.postData._id, 1)
            .then(response => {
                // console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        }
        else {
            newPostData.downvotes.push(this.props.userData.id)
            newPostData.score = newPostData.score - 1

            this.saveVote("/dw/", this.props.userData.id, this.state.postData._id, 2)
            .then(response => {
                // console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        }

        this.setState({
            postData : newPostData
        })
    }

    saveVote = async (type, userid, postid, action) => {
        //Type is /up/ or /dw/ (upvote and downvote)
        let str = 'http://localhost:4000/api/post'
        str = str.concat(type)
        let res = await axios.post(str, {userid:userid, postid:postid, action:action}, { withCredentials: true })
        //console.log(res)
    }
    
    render() {
        var ud = 0
        const indexUp = this.state.postData.upvotes.indexOf(this.props.userData.id) 
        if (indexUp > - 1) ud = 1
        else {
            const indexDown = this.state.postData.downvotes.indexOf(this.props.userData.id)
            if (indexDown > - 1) ud = 2
        }

        return (
            <Grid container className="MainPostContainer">
                <Grid item container  className='PostContainer' > {/*MAKE THIS REVERSE ROW IF SMALL */}
                    <Grid item xs={2} md={1}>
                        <PostScore score={this.state.postData.score} upvote={this.upvote} downvote={this.downvote} ud={ud}/>
                    </Grid>
                    <Grid container direction='column' item xs={10} md={11} className="ContentContainer">
                        <Grid item>
                            <PostHeader userData={this.state.userData} postData={this.state.postData}  goToProfile={this.props.goToProfile}/>
                        </Grid>
                        <Grid item>
                            <PostMessage postData={this.state.postData} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Post;