import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Chat from './Chat';
import { Grid } from '@mui/material';
const users = [
  { id: 1, name: 'John Doe', lastActive: 'Just Now' },
  { id: 2, name: 'Steve Jobs', lastActive: '23 minutes ago' },
  { id: 3, name: 'Admin', lastActive: 'July 20, 2014' },
];
const userMessages = {
  1: [
    { id: 1, text: 'Hello, how are you?' },
    { id: 2, text: 'I am doing great, thanks!' },
  ],
  2: [
    { id: 1, text: 'Testing is happening!✔' },
    { id: 2, text: 'Sab Sai Chal rah ha.....😎?' },
  ],
  3: [
    { id: 3, text: 'Blaaa Blaaaa🤣!' },
    { id: 2, text: 'Sab OKkkkkk ha?🤦‍♀️' },
  ],
};


const UserList = () => {
  const [userMessage, setUserMessage] = useState([])
  const [selectedUser, setSelectedUser] = useState(users.find(user => user.id === 1));
 

  useEffect(() => {
    setSelectedUser(users.find(user => user.id === 1));
    const initialUserMessages = {};
    users.forEach(user => {
      initialUserMessages[user.id] = [];
    });
    setUserMessage(initialUserMessages);
  }, []);
 
  const addMessage = (message) => {
    setUserMessage(prevUserMessages => {
      const userMessagesCopy = { ...prevUserMessages };
      userMessagesCopy[selectedUser.id].push({ id: Date.now(), text: message });
      return userMessagesCopy;
    });
  };

  return (
    <Grid container>
      <Grid item lg={4}>
        <List sx={{ width: '100%', maxWidth: 500 }}>
          {users.map((user) => (
            <ListItem
              key={user.id}
              sx={{
                '&:hover': { background: '#e2e2e2', cursor: 'pointer' },
                backgroundColor: selectedUser?.id === user.id ? '#e2e2e2' : 'inherit',
              }}
              onClick={() => setSelectedUser(user)}
            >
              <ListItemAvatar>
                <Avatar src="/assets/images/user.png" />
              </ListItemAvatar>
              <ListItemText primary={user.name} secondary={user.lastActive} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item lg={8}>
        <Chat selectedUser={selectedUser} userMessages={userMessages[selectedUser.id] || []} addMessage={addMessage} />
      </Grid>
    </Grid>
  );
};

export default UserList;
