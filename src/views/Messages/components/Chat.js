import React from 'react'
import { StyledChat } from '../styles'
import { AppBar, Badge, Box, Button, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Texts from './Texts';
const Chat = () => {
    const theme = useTheme()
  return (
    <StyledChat>
         <AppBar position='static' sx={{background:theme.palette.secondary.main}}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography fontWeight="bold" variant='h6'>
                    Joh Doe
                </Typography>
                <FiberManualRecordIcon sx={{fontSize:'15px', ml:1, color:'#88EF01'}} />
                </Box>
                <Box>
                    <MoreHorizIcon sx={{mr:1}} />
                </Box>
            </Toolbar>
         </AppBar>
         <Texts isSent={true} val="This is My message"/>
         <Texts val="This is My message"/>
        
         <Box
         sx={{
           position:'fixed',
           top:'auto',
           bottom:0,
            }}
         >
            <TextField fullWidth sx={{mb:1, ml:1, width:'500px'}} placeholder='Start Writting Here........'/>
            <Button variant='contained' className='bg-[#3E3A57]' sx={{height:'55px'}}>Send</Button>
         </Box>
    </StyledChat>
  )
}

export default Chat
