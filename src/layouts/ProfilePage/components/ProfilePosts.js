import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogContent, Grid, IconButton, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getAllPosts } from '../../../store/actions/userActions'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import moment from 'moment';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CommentIcon from '@mui/icons-material/Comment';
const StyledRoot = styled(Box)(({theme})=> ({
    minHeight:'50vh',
    // background:'#e2e2e2',
    position:'relative'
}))
const ProfilePosts = () => {
    const [posts, setPosts] = React.useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getPosts = () => {
        dispatch(getAllPosts()).then((result) => {
            setPosts(result.data.payload)
        }).catch((err) => {
            console.log(err)
        });
    }
    React.useEffect(()=> {
        getPosts()
    },[])

    const handlePostClick = (data) => {
        // console.log(data)
        navigate("/user/view-post",{state:data})
    }
  return (
    <StyledRoot sx={{px:15, mb:5}}>
     <Grid container spacing={2}>
            {
                posts.map((val)=> {
                    const formattedDate = moment(val.created_at).format("MMMM D, YYYY");
                    return(
            <Grid item
            xs={12}
            md={6}
            lg={4}
            >
            <Card 
            sx={{cursor:'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              background:'#e2e2e2'
            }
        }}
            >
            {/* <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={val.title}
                subheader={formattedDate}
            /> */}
            <CardMedia
                onClick={()=>handlePostClick(val)}
                component="img"
                style={{ height: '300px', }}
                maxHeight="194"
                image={`${process.env.REACT_APP_URL}${val.image}`}
                alt="Image"
            />
            <CardContent
            onClick={()=>handlePostClick(val)}
             style={{
                // height: '70px',
                overflow: 'hidden',
              }}
            >
                <Typography variant="body2" color="text.secondary"
                 style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                    {val.title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
            </CardActions>
                <CardActions>
                    <Stack>
                <Typography sx={{color:'#878787', fontWeight:'bold'}}>0 likes</Typography>
                <Typography sx={{color:'#878787', fontWeight:'bold'}}>0 comments</Typography>
                    </Stack>
                </CardActions>
            </Card>
            </Grid>
                    )
                })
            }
        </Grid>
        <Dialog open={true}  maxWidth="xl">
            <DialogContent>
                dassad
            </DialogContent>
        </Dialog>
    </StyledRoot>
  )
}

export default ProfilePosts
