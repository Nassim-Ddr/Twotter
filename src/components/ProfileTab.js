import { Box, Tabs, Tab, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProfileTabListPost from './ProfileTabListPost';
import ProfileTabListFollower from './ProfileTabListFollower';


const followers = {

}

const followed = {

}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProfileTab = (props) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(props.followers)
  console.log(props.followed)

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Posts" />
          <Tab label="Following" />
          <Tab label="Followers" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileTabListPost userData={props.userData} profileData={props.profileData} goToProfile={this.props.goToProfile}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileTabListFollower peopleList={props.followed} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileTabListFollower peopleList={props.followers} />
      </TabPanel>
    </Box>
  );
}

export default ProfileTab