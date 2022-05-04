import React from "react";
import { Box, ListItemButton, Avatar } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

class ProfileTabListFollower extends React.Component {
    render() {
        return (
            <Box className="TabContainer">
                {this.props.peopleList.map(user => {
                    return (
                        <Box key={user.userid}>
                            <ListItemButton key={user.userid} onClick={()=> {this.props.goToProfile(user.userid)}}>
                                <ListItemAvatar>
                                    <Avatar alt={user.username} src={user.ppic} />
                                </ListItemAvatar>
                                <ListItemText primary={user.username} secondary={user.userid} />
                            </ListItemButton>
                        </Box>
                    )
                })}
            </Box>
        )
    }

}

export default ProfileTabListFollower