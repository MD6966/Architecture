import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const UserList = () => {
  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItem sx={{'&:hover':{background:'#e2e2e2', cursor:'pointer'}}}>
        <ListItemAvatar>
          <Avatar src="/assets/images/user.png" />
        </ListItemAvatar>
        <ListItemText primary="John Doe" secondary="Just Now" />
      </ListItem>
      <ListItem sx={{'&:hover':{background:'#e2e2e2', cursor:'pointer'}}}>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Steve Jobs" secondary="23 minutes ago" />
      </ListItem>
      <ListItem sx={{'&:hover':{background:'#e2e2e2', cursor:'pointer'}}}>
        <ListItemAvatar>
          <Avatar src="/assets/images/admin.png" />
        </ListItemAvatar>
        <ListItemText primary="" secondary="July 20, 2014" />
      </ListItem>
    </List>
    </div>
  )
}

export default UserList
