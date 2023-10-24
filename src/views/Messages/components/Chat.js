
import React, { useState } from 'react'
import { StyledChat } from '../styles'
import { AppBar, Badge, Box, Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Texts from './Texts';
import EmojiPicker from 'emoji-picker-react';

const Chat = (props) => {
  const [users, setUsers] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleEmojiButtonClick = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  // const handleEmojiSelect = (emoji,) => {
  //   console.log(emoji); 
  //   setSelectedEmoji(emoji.emoji);
  //   setIsEmojiPickerOpen(false);
  // };

  const handleEmojiSelect = (emoji) => {
    // Add the selected emoji to the text field
    setNewMessage((prevMessage) => prevMessage + emoji.emoji);
    setIsEmojiPickerOpen(false);
  };


  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const sendMessage = (userId, message) => {
    setUsers((prevUsers) => ({
      ...prevUsers,
      [userId]: [...(prevUsers[userId] || []), { text: message }],
    }));
    setNewMessage('');
  };

  const theme = useTheme();

  const userMessages = users[props.selectedUser.id] || [];

  return (
    <StyledChat>
      <AppBar position='static' sx={{ background: theme.palette.secondary.main, width: "100%" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontWeight="bold" variant='h6'>
              {props.selectedUser.name}
            </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '15px', ml: 1, color: '#88EF01' }} />
          </Box>
          <Box>
            <IconButton onClick={handleDrawerOpen} sx={{ color: "white" }}>
              <MoreHorizIcon />
            </IconButton>
            <Drawer
              open={isDrawerOpen}
              anchor="right"
              onClose={handleDrawerClose}
            >
              <List>
                <ListItem button>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Chats" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <MoreHorizIcon />
                  </ListItemIcon>
                  <ListItemText primary="More" />
                </ListItem>
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
      <Box style={{ background: "white", height: "100vh" }}>
        {userMessages.map((message, index) => (
          <Texts key={index} val={message.text} />
        ))}
        <Box
          sx={{
            position: 'fixed',
            top: 'auto',
            bottom: 0,
          }}
        >
          <TextField
            fullWidth
            sx={{ mb: 1, ml: 1, width: '500px' }}
            placeholder='Start Writing Here........'
            value={newMessage + selectedEmoji}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button
            variant='contained'
            className='bg-[#3E3A57]'
            sx={{ height: '55px' }}
            onClick={() => {
              sendMessage(props.selectedUser.id, newMessage + selectedEmoji);
            }}
          >
            Send
          </Button>
          <Button
            variant='contained'
            className='bg-[#3E3A57]'
            sx={{ height: '55px' }}
            value={selectedEmoji}
            onClick={handleEmojiButtonClick}
            
          >

            😃
          </Button>
          {isEmojiPickerOpen && (
          <EmojiPicker onEmojiClick={handleEmojiSelect} />
          )}
        </Box>
      </Box>
    </StyledChat>
  );
};

export default Chat;
