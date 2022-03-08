import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'

import MenuProfileItemList from './MenuProfileItemList';

import '../style/Menu.css';

const handleProfile = (event) => {
    event.preventDefault();
    console.log("PROFILE");
};

const handleSearch = (event) => {
    event.preventDefault();
    console.log("SEARCH");
};

const handleHome = (event) => {
    event.preventDefault();
    console.log("HOME");
};

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData
        }
    }

    render() {
        return (
            <Box className='Menu'>
                <nav aria-label="main mailbox folders">
                    <List>
                        <MenuProfileItemList userData ={this.state.userData}/>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleProfile}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleSearch}>
                                <ListItemIcon>
                                    <SearchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Search" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleHome}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
            </Box>
        );
    }
}

export default Menu;