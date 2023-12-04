import React, { useRef, useState, useEffect } from 'react';
import { StyledChat } from '../styles';
import { AppBar, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, IconButton, List, ListItem, ListItemText, TextField, Toolbar, Typography, useTheme } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Texts from './Texts';
import EmojiPicker from 'emoji-picker-react';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MenuIcon from '@mui/icons-material/Menu';
<<<<<<< Updated upstream
import Pusher from 'pusher-js'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleChat, sendChat, sendMessageAction } from '../../../store/actions/chatActions';
import { indexMessages, storeMessage } from '../../../store/actions/messageActions';
const ListData = ['Add a friend', 'Create Group', 'Block Contact', 'Unblock', 'Report', 'Unsend Message', 'Edit Message', 'Forward Messages', 'Sharing post'];
=======

>>>>>>> Stashed changes

const ListData = ['Add a friend', 'Create Group', 'Block Contact', 'Unblock', 'Report', 'Unsend Message', 'Edit Message', 'Forward Messages', 'Sharing post'];
const dummyUsers = [
  { id: 'user1', name: 'User 1', avatar: 'user1-avatar-url' },
  { id: 'user2', name: 'User 2', avatar: 'user2-avatar-url' },
  { id: 'user3', name: 'User 3', avatar: 'user3-avatar-url' },
  { id: 'user4', name: 'User 4', avatar: 'user4-avatar-url' },
];
const Chat = (props) => {
<<<<<<< Updated upstream
  // console.log(props.convId, "Convvv")
=======
  const [groupUsers, setGroupUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
>>>>>>> Stashed changes
  const [users, setUsers] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [recordingTime, setRecordingTime] = useState(0);
  const [messages, setMessages] = useState([])
  const [chat, setChat] = React.useState([])
  const userId = useSelector((state)=>state.admin.user.id)
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  // console.log(userId)
  const getIndexMessages = () => {
    dispatch(indexMessages(props.convId)).then((result) => {
      setMessages(result.data.payload.messages.data)
      console.log(result.data.payload.messages.data, "Index Messages")
    }).catch((err) => {
      console.log(err)
    });
  }
  useEffect(() => {
    getIndexMessages()
    const intervalId = setInterval(() => {
      getIndexMessages();
    }, 2000);
    return () => clearInterval(intervalId);
  }, [props.convId])
  // const getChat = () => {
  //   dispatch(getSingleChat(props.userId)).then((result) => {
  //     console.log(result)
  //   }).catch((err) => {
  //     console.log(err)
  //   });
  // }
  // React.useEffect(()=> {
  // getChat()
  // }, [])
  const audioRef = useRef(null);
<<<<<<< Updated upstream
  const dispatch = useDispatch()
  const allMessages = []
=======
  const [isCreateGroupDialogOpen, setCreateGroupDialogOpen] = useState(false);
  const [groupTitle, setGroupTitle] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isAddFriendDialogOpen, setAddFriendDialogOpen] = useState(false);
  const [isBlockContactDialogOpen, setBlockContactDialogOpen] = useState(false);
  const [isUnblockDialogOpen, setUnblockDialogOpen] = useState(false);
  const [isReportDialogOpen, setReportDialogOpen] = useState(false);
  const [isUnsendMessageDialogOpen, setUnsendMessageDialogOpen] = useState(false);
  const [isEditMessageDialogOpen, setEditMessageDialogOpen] = useState(false);
  const [isForwardMessagesDialogOpen, setForwardMessagesDialogOpen] = useState(false);
  const [isSharingPostDialogOpen, setSharingPostDialogOpen] = useState(false);

>>>>>>> Stashed changes
  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording]);
  useEffect(()=> {
    Pusher.logToConsole = true;

    const pusher = new Pusher("66a996d7c63fe6a9fac5", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe(`message-44`);
    // console.log(channel);
    channel.bind("new", (data) => {
      // console.log(JSON.stringify(data), '++++++++++++++');
      console.log(data, "This is Data binding here...........")
    })
  },[])
  // console.log(messages, '+++++++++++++++')
  const startRecording = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const recorder = new MediaRecorder(stream);
          recorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              setAudioChunks((chunks) => [...chunks, event.data]);
            }
          };

          recorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            sendMessage(props.selectedUser.id, audioBlob);
            setAudioChunks([]);
            setRecordingTime(0);
          };

          recorder.start();
          setMediaRecorder(recorder);

          const interval = setInterval(() => {
            setRecordingTime((time) => time + 1);
          }, 1000);

          return () => {
            recorder.stop();
            clearInterval(interval);
          };
        })
        .catch((error) => {
          console.error('Error accessing microphone:', error);
        });
    }
  };
  const handleRecordButtonClick = () => {
    setIsRecording(true);
  };
  const stopRecording = () => {
    if (mediaRecorder) {
      setIsRecording(false);
<<<<<<< Updated upstream
=======
      mediaRecorder.stop();


      // Convert the audio chunks to a Blob
>>>>>>> Stashed changes
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      if (audioBlob) {
        sendMessage(props.selectedUser.id, audioBlob);
      }

      // Reset audioChunks and recordingTime
      setAudioChunks([]);
      setRecordingTime(0);
    }
  };

  const handleEmojiButtonClick = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  const handleEmojiSelect = (emoji) => {
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
    const formData = new FormData()
    formData.append('text', message)
    formData.append('coversation_id', props.convId)
    formData.append('type', 'text')
    // console.log(userId)
    dispatch(storeMessage(formData)).then((result) => {
      getIndexMessages()
      // console.log(result, "Store Message")
    }).catch((err) => {
      console.log(err)
    });
    setNewMessage('');
  };
  const handleListItemClick = (item) => {
    if (item === 'Create Group') {
      openCreateGroupDialog();
    } else if (item === 'Add a friend') {
      openAddFriendDialog();
    } else if (item === 'Block Contact') {
      openBlockContactDialog();
    } else if (item === 'Unblock') {
      openUnblockDialog();
    } else if (item === 'Report') {
      openReportDialog();
    } else if (item === 'Unsend Message') {
      openUnsendMessageDialog();
    } else if (item === 'Edit Message') {
      openEditMessageDialog();
    } else if (item === 'Forward Messages') {
      openForwardMessagesDialog();
    } else if (item === 'Sharing post') {
      openSharingPostDialog();
    }
  };
  const theme = useTheme();

<<<<<<< Updated upstream
  // const userMessages = users[props.selectedUser.id] || [];
=======
  const userMessages = users[props.selectedUser.id] || [];
  const openCreateGroupDialog = () => {
    setCreateGroupDialogOpen(true);
  };
>>>>>>> Stashed changes

  const closeCreateGroupDialog = () => {
    setCreateGroupDialogOpen(false);
  };

  const openAddFriendDialog = () => {
    setAddFriendDialogOpen(true);
  };

  const closeAddFriendDialog = () => {
    setAddFriendDialogOpen(false);
  };

  const openBlockContactDialog = () => {
    setBlockContactDialogOpen(true);
  };

  const closeBlockContactDialog = () => {
    setBlockContactDialogOpen(false);
  };

  const openUnblockDialog = () => {
    setUnblockDialogOpen(true);
  };

  const closeUnblockDialog = () => {
    setUnblockDialogOpen(false);
  };

  const openReportDialog = () => {
    setReportDialogOpen(true);
  };

  const closeReportDialog = () => {
    setReportDialogOpen(false);
  };

  const openUnsendMessageDialog = () => {
    setUnsendMessageDialogOpen(true);
  };

  const closeUnsendMessageDialog = () => {
    setUnsendMessageDialogOpen(false);
  };

  const openEditMessageDialog = () => {
    setEditMessageDialogOpen(true);
  };

  const closeEditMessageDialog = () => {
    setEditMessageDialogOpen(false);
  };

  const openForwardMessagesDialog = () => {
    setForwardMessagesDialogOpen(true);
  };

  const closeForwardMessagesDialog = () => {
    setForwardMessagesDialogOpen(false);
  };

  const openSharingPostDialog = () => {
    setSharingPostDialogOpen(true);
  };

  const closeSharingPostDialog = () => {
    setSharingPostDialogOpen(false);
  };

  const handleAddFriend = () => {
    closeAddFriendDialog();
  };

  const handleBlockContact = () => {

  };

  const handleUnblockContact = () => {

  };

  const handleReport = () => {

  };

  const handleUnsendMessage = () => {

  };

  const handleEditMessage = () => {

  };

  const handleForwardMessages = () => {

  };

  const handleSharePost = () => {

  };

  const handleCreateGroup = () => {
    console.log('Group Title:', groupTitle);
    console.log('Selected Users:', selectedUsers);

    // Close the dialog
    closeCreateGroupDialog();
  };



  const handleAddUser = () => {
    if (selectedUser) {

      setGroupUsers((prevUsers) => [...prevUsers, selectedUser]);

      setSelectedUsers([]);
      setSelectedUser(null);

      closeCreateGroupDialog();
    }
  };
  return (
    <StyledChat>
      <AppBar position='static' sx={{ background: theme.palette.secondary.main, width: "100%" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontWeight="bold" variant='h6'>
              {props.selectedUser ? 
              props.selectedUser.participants[0].messageable.name :
              'Loading..'  
            }
            </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '15px', ml: 1, color: '#88EF01' }} />
          </Box>
          <Box>
            <IconButton onClick={handleDrawerOpen} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              open={isDrawerOpen}
              anchor="right"
              onClose={handleDrawerClose}
              PaperProps={{
                style: {
                  width: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '50px',
                  alignItems: 'center',
                },
              }}
            >
              <List>
                {ListData.map((val, index) => (
                  <ListItem button key={index} onClick={() => handleListItemClick(val)}>
                    {val}
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Dialog open={isCreateGroupDialogOpen} onClose={closeCreateGroupDialog}>
              <DialogTitle>Create Group</DialogTitle>
              <DialogContent>
                <div className="flex">
                  <div className="w-1/2 p-4 border-r border-gray-300">
                    <div>
                      <Typography variant="subtitle1">Select Members:</Typography>
                      <List>
                        {dummyUsers.map((user) => (
                          <ListItem
                            button
                            key={user.id}
                            selected={selectedUsers.includes(user.id)}
                            onClick={() => {
                              if (selectedUsers.includes(user.id)) {
                                setSelectedUsers((prevSelected) =>
                                  prevSelected.filter((id) => id !== user.id)
                                );
                              } else {
                                setSelectedUsers((prevSelected) => [...prevSelected, user.id]);
                              }
                            }}
                          >
                            <ListItemText>{user.name}</ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  </div>
                  <div className="w-1/2 p-4">
                    <div>
                      <TextField
                        label="Group Title"
                        fullWidth
                        value={groupTitle}
                        onChange={(e) => setGroupTitle(e.target.value)}
                        variant="outlined"
                      />
                      <Button onClick={handleAddUser}>Add User</Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeCreateGroupDialog}>Cancel</Button>
                <Button onClick={handleCreateGroup} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Create
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={isAddFriendDialogOpen} onClose={closeAddFriendDialog}>
              <DialogTitle>Add a Friend</DialogTitle>
              <DialogContent>
                <TextField
                  label="Friend's Username"
                  fullWidth
                  variant="outlined"

                />
                <TextField
                  label="Friend's Email"
                  fullWidth
                  variant="outlined"

                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeAddFriendDialog}>Cancel</Button>
                <Button onClick={handleAddFriend} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Add
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={isBlockContactDialogOpen} onClose={closeBlockContactDialog}>
              <DialogTitle>Block Contact</DialogTitle>
              <DialogContent sx={{ padding: '16px' }}>
                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Are you sure you want to block this contact?
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Blocking this contact will prevent them from sending you messages and seeing your profile.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeBlockContactDialog}>Cancel</Button>
                <Button onClick={handleBlockContact} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Block
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={isUnblockDialogOpen} onClose={closeUnblockDialog}>
              <DialogTitle>Unblock Contact</DialogTitle>
              <DialogContent sx={{ padding: '16px' }}>
                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Are you sure you want to unblock this contact?
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unblock this contact to allow them to send you messages and see your profile again.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeUnblockDialog}>Cancel</Button>
                <Button onClick={handleUnblockContact} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Unblock
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={isReportDialogOpen} onClose={closeReportDialog}>
              <DialogTitle>Report</DialogTitle>
              <DialogContent sx={{ padding: '16px' }}>
                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Report this contact for inappropriate behavior or content.
                </Typography>
                <TextField
                  label="Reason for Report"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ marginY: 2 }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeReportDialog}>Cancel</Button>
                <Button onClick={handleReport} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Submit Report
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={isUnsendMessageDialogOpen} onClose={closeUnsendMessageDialog}>
              <DialogTitle>Unsend Message</DialogTitle>
              <DialogContent sx={{ padding: '16px' }}>
                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Are you sure you want to unsend this message?
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Please note that once a message is unsent, it will be removed from the chat for all participants.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeUnsendMessageDialog}>Cancel</Button>
                <Button onClick={handleUnsendMessage} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Unsend
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={isEditMessageDialogOpen} onClose={closeEditMessageDialog}>
              <DialogTitle>Edit Message</DialogTitle>
              what should i put inn the dailogue content which make it beautifull dailogue box
              <DialogActions>
                <Button onClick={closeEditMessageDialog}>Cancel</Button>
                <Button onClick={handleEditMessage} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Save Changes
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={isForwardMessagesDialogOpen} onClose={closeForwardMessagesDialog}>
              <DialogTitle>Forward Messages</DialogTitle>
              <DialogContent>
                <Typography variant="h6" style={{ marginBottom: 16 }}>
                  Select Messages to Forward
                </Typography>
                <div style={{ maxHeight: 300, overflowY: 'auto', border: '1px solid #ccc', borderRadius: 4 }}>
                  <div style={{ padding: 16, borderBottom: '1px solid #eee' }}>
                    <Typography variant="body1" style={{ marginBottom: 8 }}>
                      Sample Message 1
                    </Typography>
                    <Checkbox color="primary" />
                  </div>
                  <div style={{ padding: 16, borderBottom: '1px solid #eee' }}>
                    <Typography variant="body1" style={{ marginBottom: 8 }}>
                      Sample Message 2
                    </Typography>
                    <Checkbox color="primary" />
                  </div>
                  <div style={{ padding: 16 }}>
                    <Typography variant="body1" style={{ marginBottom: 8 }}>
                      Sample Message 3
                    </Typography>
                    <Checkbox color="primary" />
                  </div>
                </div>
              </DialogContent>

              <DialogActions>
                <Button onClick={closeForwardMessagesDialog}>Cancel</Button>
                <Button onClick={handleForwardMessages} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Forward
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={isSharingPostDialogOpen} onClose={closeSharingPostDialog}>
              <DialogTitle>Share Post</DialogTitle>
              <DialogContent>
                <TextField
                  fullWidth
                  label="Share your post"
                  variant="outlined"
                  multiline
                  rows={4}

                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeSharingPostDialog}>Cancel</Button>
                <Button onClick={handleSharePost} style={{ backgroundColor: 'gray', color: 'white' }}>
                  Share
                </Button>
              </DialogActions>
            </Dialog>

          </Box>
        </Toolbar>
      </AppBar>
<<<<<<< Updated upstream
      <Box  ref={messagesContainerRef} sx={{ background: "white", height: "100vh", overflowY: 'auto', pb:25 }}>
        {
          messages.map((msg, ind)=> {
            // console.log(msg)
            return(
              <Texts key={ind} val={msg.body} isSent={msg.participation.messageable_id == userId ? true : false} />
            )
          })
        }
      </Box>
      <Box
        sx={{
          width: '100%',
          position: 'fixed',
          top: 'auto',
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          // justifyContent: 'space-between',

        }}
      >
=======
      <Box style={{ background: "white", height: "calc(100vh - 55px)", overflowY: 'auto' }}>
        {userMessages.map((message, index) => (
          <Texts key={index} val={message.text} />
        ))}
      </Box>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', bottom: 0, zIndex: 1 }}>
>>>>>>> Stashed changes
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {isRecording && (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p>Recording: {recordingTime} seconds</p>
            </div>
          )}
          <KeyboardVoiceIcon
            sx={{ fontSize: '40px', cursor: 'pointer' }}
            onClick={isRecording ? stopRecording : handleRecordButtonClick}
          >
            {isRecording ? 'Stop' : 'Record'}
          </KeyboardVoiceIcon>
        </div>
<<<<<<< Updated upstream
        <TextField
          fullWidth
          sx={{
            mb: 1,
            width: '50%',
            background: 'white',

          }}
          placeholder="Start Writing Here........"
          value={newMessage + selectedEmoji}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          disabled={newMessage.length < 1}
          variant='contained'
          className='bg-[#3E3A57]'
          sx={{ height: '55px', mb:1 }}
          onClick={() => {
            if (newMessage.trim() || selectedEmoji) {
              sendMessage(props.selectedUser.id, newMessage + selectedEmoji);
            }
          }}
        >
          Send
        </Button>
        <Button
        
          variant='contained'
          className='bg-[#3E3A57]'
          sx={{ height: '55px', mb:1 }}
          value={selectedEmoji}
          onClick={handleEmojiButtonClick}
        >
          😃
        </Button>

=======
        <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
          <TextField
            fullWidth
            sx={{
              mb: 1,
              ml: 1,
              height: '37px',
              width: '47rem',
              background: 'white',
            }}
            placeholder="Start Writing Here........"
            value={newMessage + selectedEmoji}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button
            variant='contained'
            className='bg-[#3E3A57]'
            sx={{ height: '55px' }}
            onClick={() => {
              if (newMessage.trim() || selectedEmoji) {
                sendMessage(props.selectedUser.id, newMessage + selectedEmoji);
              }
            }}
          >
            Send
          </Button>
          <Button
            variant='contained'
            className='bg-[#3E3A57]'
            sx={{ height: '55px' }}
            onClick={handleEmojiButtonClick}
          >
            😃
          </Button>
        </div>
>>>>>>> Stashed changes
        {isEmojiPickerOpen && (
          <div style={{ position: 'absolute', bottom: '55px' }}>
            <EmojiPicker onEmojiClick={handleEmojiSelect} />
          </div>
        )}
      </div>

    </StyledChat>
  );
};

export default Chat;
