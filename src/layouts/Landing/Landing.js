import { AppBar, Toolbar  ,Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Outlet } from 'react-router-dom/dist'
import Body from './Body'
import NavBarLinks from './NavBarLinks'
import Page from '../../components/page/page'
import Nav from '../../components/AppBar/Header'
import Footer from './Footer'
import MainSection from '../../views/Landing/MainSection'
const useStyles = makeStyles((theme) => ({
    root:{
      minHeight:'70vh'
    }
}))
const Landing = () => {
    const classes = useStyles()
  return (
    <Page
    title="Welcome To Website"
    >
      <Nav />
        <Box className={classes.root}>
          <MainSection />
        </Box>
        <Footer /> 
    </Page>
  )
}

export default Landing
