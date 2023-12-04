import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material'
import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const StyledFooter = styled(Box)(({ theme }) => ({
  minHeight: '25vh',
  background: theme.palette.primary.main,
  padding: theme.spacing(3),

}))
const StyledRoot = styled(Box)(({ theme }) => ({
  display: "flex", justifyContent: "center", alignItems: "center",
  width: "100%", height: "auto"
}))
const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginRight: 10,
  color: '#1e1e1e'
}))

const Footer = () => {

  return (
    <StyledFooter>
      <StyledRoot>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <StyledTypo>
              Work
            </StyledTypo>
            <StyledTypo>
              Terms of Use
            </StyledTypo>
            <StyledTypo>
              Privacy Policy
            </StyledTypo>
            <StyledTypo>
              Cookie Policy
            </StyledTypo>
            <StyledTypo>
              RSS
            </StyledTypo>
            <StyledTypo>
              Contact Us
            </StyledTypo>
          </Box>
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Box>
              <img src="/assets/images/log.png" style={{ height: '100px' }} />
            </Box>
            <Box sx={{ mt: 1.5, ml: -1 }}>
              <Typography sx={{ color: '#1e1e1e' }}>&copy; All rights reserved. Architecture 2020-2023 </Typography>
              <Typography sx={{ color: '#1e1e1e' }}>ISSN 0719-8884 </Typography>
              <Typography sx={{ color: '#1e1e1e' }}>All images are &copy; each office/photographer mentioned </Typography>

            </Box>
          </Box>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
            <Facebook sx={{ mr: 2, cursor: 'pointer' }} />
            <Twitter sx={{ mr: 2, cursor: 'pointer' }} />
            <Pinterest sx={{ mr: 2, cursor: 'pointer' }} />
            <Instagram sx={{ mr: 2, cursor: 'pointer' }} />
            <YouTube sx={{ mr: 2, cursor: 'pointer' }} />
            <LinkedIn sx={{ mr: 2, cursor: 'pointer' }} />

          </Box>
        </Box>
      </StyledRoot>
    </StyledFooter >
  )
}

export default Footer
