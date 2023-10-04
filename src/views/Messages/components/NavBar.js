import { AppBar, Avatar, Box, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'

const NavBar = () => {
    const theme= useTheme()
  return (
    <div>
      <AppBar position='static' sx={{background:theme.palette.secondary.main}}>
        <Toolbar>
                <Avatar sx={{height:'30px', width:'30px', background:'#e2e2e2'}} src="/assets/images/user.png" />
            <Typography sx={{ml:2}}>
                Mudasser Anayat
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
