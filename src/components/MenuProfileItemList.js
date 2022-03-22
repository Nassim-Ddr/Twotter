import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ProfileItemList(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [userData] = React.useState(props.userData);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar alt={userData.name} src={userData.ppic} />
                </ListItemAvatar>
                <ListItemText primary={userData.name} secondary={userData.id} />
            </ListItemButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </ListItem>

    );
}