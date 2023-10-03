import { Box, styled } from "@mui/material";

export const StyledRoot = styled(Box)(({theme})=> ({
    minHeight:'100vh',
    padding:theme.spacing(2)
}))

export const StyledContent = styled(Box)(({theme})=>({
    padding:theme.spacing(4),
    minHeight:'50vh'
}))