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



class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData
        }
    }

    handleProfile = (event) => {
        event.preventDefault();
        this.props.changeTab("Profile")
    };
    
    handleSearch = (event) => {
        event.preventDefault();
        this.props.changeTab("Search")
    };
    
    handleHome = (event) => {
        event.preventDefault();
        this.props.changeTab("Home")
    };

    render() {
        return (
            <Box className='Menu'>
                <nav aria-label="Profile Search Home">
                    <List className='HorizontalList'>
                        <MenuProfileItemList logout={this.props.logout} userData ={this.state.userData}/>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton onClick={this.handleProfile}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={this.handleSearch}>
                                <ListItemIcon>
                                    <SearchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Search" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={this.handleHome}>
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