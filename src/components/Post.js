import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: props.userID,
            postID: props.postID, 
            time: props.time,
            score: props.score, 
            msg: props.msg
        }
    }
    
    render() {

    }
}