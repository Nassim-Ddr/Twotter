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
        //Grid two columns
            //Column 1 : scor
            //Column 2 : 
                //Grid 2 rows : 
                    //Row 1 : Header (Profile pic, time, Buttons)
                    //Row 2 : MEssage
    }
}

export default Post;