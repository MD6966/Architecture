import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Chat from './Chat';
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getAllChatUsers } from '../../../store/actions/chatActions';
import { Add } from '@mui/icons-material';
import { conversationIndex, storeConversation } from '../../../store/actions/conversationActions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ThreeDots } from 'react-loader-spinner';
import { useSnackbar } from 'notistack';
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
  const [user, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState("");
  const [open, setopen] = useState(false)
  const [conversations, setConversations] = useState([])
  const dispatch = useDispatch()
  const {enqueueSnackbar} = useSnackbar()
  const getConversations = () => {
    dispatch(conversationIndex()).then((result) => {
      console.log(result, "Getting Conversations")
    }).catch((err) => {
      console.log(err)
    });
  } 
  const getUsers = () => {
    dispatch(getAllChatUsers()).then((result) => {
      setUsers(result.data.payload)
      setSelectedUser(result.data.payload[0])
    }).catch((err) => {
      console.log(err)
    });
  }
  useEffect(()=> {
    getUsers()
    getConversations()
  }, [])
  useEffect(() => {
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
  const handleConvversation = (id) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('userId', id)
    dispatch(storeConversation(formData)).then((result) => {
      setLoading(false)
      enqueueSnackbar(result.data.message, {
        variant:'success'
      })
      setopen(false)
    }).catch((err) => {
      setLoading(false)
      console.log(err)
    });

  }
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (option) => {
    console.log(`Selected option: ${option}`);
    handleMenuClose();
  };
  return (
    <Grid container>
      <Grid item lg={4} md={4} sm={4} xs={4}>
        <Box sx={{px:2, my:2}}>
          <Button
          onClick={()=>setopen(true)}
          fullWidth 
          variant='contained'
          className='bg-[#fff]'
          sx={{color:'#000', 
          '&:hover': {background:'#e2e2e2'}}}
          startIcon={
            <Add />
          }>
            Create New Conversation
          </Button>
            </Box>
        <List sx={{ width: '100%', maxWidth: 500 }}>
          {user.map((user) => (
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
              <IconButton
               onClick={(e) => {
                e.stopPropagation();
                handleMenuOpen(e);
              }}
              >
                <MoreHorizIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleMenuClick('Delete')}>Delete</MenuItem>
            <MenuItem onClick={() => handleMenuClick('Archive')}>Archive</MenuItem>
          </Menu>
        <Typography variant='h5' sx={{color:'#bcbcbc', textAlign:'center', mt:5}}>
          No Conversation Available. 
        </Typography>
       
      </Grid>
      <Dialog fullWidth open={open} onClose={()=>setopen(false)}>
          <DialogTitle>
            {loading ? 'Please Wait...' : "Select User"}
          </DialogTitle>
          <Divider />
          <DialogContent>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
              loading ? 
              <ThreeDots 
              height="100" 
              width="100" 
              radius="9"
              color="#3e50ce" 
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
              />
              :
              user.map((val, ind)=> {
                return(
                  <>
                  
                  <ListItem alignItems="flex-start" sx={{cursor:'pointer', '&:hover': {background:'#e2e2e2'}}}
                  onClick={()=>handleConvversation(val.id)}
                  >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/assets/images/user.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={val.name}/>
                          </ListItem>
                        <Divider variant="inset" component="li" />
                  </>
                )
              })
            }
      
    </List>
          </DialogContent>
      </Dialog>
      <Grid item lg={8} md={8} sm={8} xs={8}>
        <Chat selectedUser={selectedUser} userMessages={userMessages[selectedUser.id] || []} addMessage={addMessage} />
      </Grid>
    </Grid>
  );
};

export default UserList;
