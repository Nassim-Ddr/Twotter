import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData
        }
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}

export default Profile