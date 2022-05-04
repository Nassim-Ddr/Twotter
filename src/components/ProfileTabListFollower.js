import React from "react";
import { Box, ListItemButton, Avatar } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

class ProfileTabListFollower extends React.Component {

    handleClick = (event) => {
        this.props.goToProfile(this.props.postData.userID)
    };

    render() {
        return (
            <Box className="TabContainer">
                {this.props.peopleList.map(msg => {
                    return (
                        <Box>
                            <ListItemButton onClick={this.handleClick}>
                                <ListItemAvatar>
                                    <Avatar alt={this.props.postData.userName} src={this.props.postData.ppic} />
                                </ListItemAvatar>
                                <ListItemText primary={this.props.postData.userName} secondary={this.props.postData.userID} />
                            </ListItemButton>
                        </Box>
                    )
                })}
            </Box>
        )
    }

}

export default ProfileTabListFollower