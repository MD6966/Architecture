import React, { useRef, useState, useEffect } from 'react';
import { StyledChat } from '../styles';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, TextField, Toolbar, Typography, useTheme } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Texts from './Texts';
import EmojiPicker from 'emoji-picker-react';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MenuIcon from '@mui/icons-material/Menu';
import Pusher from 'pusher-js'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { sendChat } from '../../../store/actions/chatActions';
const ListData = ['Add a friend', 'Create Group', 'Block Contact', 'Unblock', 'Report', 'Unsend Message', 'Edit Message', 'Forward Messages', 'Sharing post'];

const Chat = (props) => {
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
  const audioRef = useRef(null);
  const dispatch = useDispatch()
  const allMessages = []
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

    const channel = pusher.subscribe("message-16");
    console.log(channel);
    channel.bind("new", function (data) {
      console.log(JSON.stringify(data), '++++++++++++++');
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

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      if (audioBlob) {
        sendMessage(props.selectedUser.id, audioBlob);
      }

      // Reset audioChunks and recordingTime
      setAudioChunks([]);
      setRecordingTime(0);
    }
  };

  const handleRecordButtonClick = () => {
    setIsRecording(true);
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
    formData.append('userId', userId)
    console.log(userId)
    dispatch(sendChat(formData)).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
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
                  <ListItem button key={index}>
                    {val}
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
      <Box style={{ background: "white", height: "100vh", overflowY: 'auto' }}>
        {userMessages.map((message, index) => (
          <Texts key={index} val={message.text} isSent={true} />
        ))}
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
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {isRecording && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',

                justifyContent: 'center',
                alignItems: 'center'

              }}
            >
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

        {isEmojiPickerOpen && (
          <EmojiPicker onEmojiClick={handleEmojiSelect} />
        )}
      </Box>
    </StyledChat>
  );
};

export default Chat;
