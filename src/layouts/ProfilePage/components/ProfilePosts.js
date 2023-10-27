import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Stack, TextField, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getAllPosts } from '../../../store/actions/userActions'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import moment from 'moment';
import CommentIcon from '@mui/icons-material/Comment';
import { CloseOutlined } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
const StyledRoot = styled(Box)(({theme})=> ({
    minHeight:'50vh',
    // background:'#e2e2e2',
    position:'relative'
}))
const commentsData = [
    {name:'John Doe', comment:'This is the Good imagee adfhjaskdfh asdfklasdhflkasdhfkasdf hdsflksdhjasdlkfjasldf hdflkasdjhfasdhjflkasdhfkjlasd', time:'2h ago'},
    {name:'Alice Doe', comment:'image', time:'2mo ago'},
    {name:'Caprie', comment:'This is the Good', time:'2d ago'},
    {name:'Catie', comment:'This is image', time:'2w ago'},
    {name:'Steves', comment:'I like this image', time:'2min ago'},
    {name:'John Abraham', comment:'This type', time:'23h ago'},

]
const ProfilePosts = () => {
    const [posts, setPosts] = React.useState([])
    const [postData, setPostData] = React.useState([]) 
    const [open, setOpen] = React.useState(false)
    const [likes, setLikes] = React.useState({});
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
        navigate("/user/view-post",{state:data})
    }
    const handleopen = (val) => {
        setPostData(val)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setPostData([])
    }
    // console.log(postData)
    const handleLikeClick = (postId) => {
        // Toggle the like state for the post
        setLikes((prevLikes) => ({
          ...prevLikes,
          [postId]: !prevLikes[postId],
        }));
    
        // You can also send an API request to update the like count on the server here.
      };
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
            <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleLikeClick(val.id)}
                  >
                    <FavoriteIcon color={likes[val.id] ? 'error' : 'inherit'} />
                  </IconButton>
                <IconButton
                onClick={()=>handleopen(val)}
                >
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
        <Dialog open={open}
        onClose={handleClose}
        sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "1200px",
              },
            },
          }}
        >
            {/* <DialogTitle>
                <IconButton sx={{float:'right'}}>
                    <CloseOutlined sx={{fontSize:'2rem'}} />
                </IconButton>
            </DialogTitle> */}
         <DialogContent>
    <Box sx={{ display: 'flex', position: 'relative', }}>
      <Box sx={{
        width: '35%',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {postData && postData.image && (
          <img
            src={`${process.env.REACT_APP_URL}${postData.image}`}
            alt="Post Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
       
      </Box>
      <Box sx={{ ml: 2, borderLeft: '1px dashed grey', width:'75%', position: 'relative' }}>
      <Box 
      sx=
      {{display:'flex', 
      background:'#fff', 
      position: 'absolute', bottom: 0, right: 0, left: 0
      }}>
                <TextField
                sx={{ml:1}}
                  placeholder="Add comment"
                  variant="outlined"
                  size="small"
                //   value={comment}
                //   onChange={handleCommentChange}
                  fullWidth
                  />
                <IconButton
                //   disabled={!comment}
                  //   onClick={handleSendComment}
                  >
                  <SendIcon />
                </IconButton>
        </Box>
        <Toolbar>
            <Typography variant='h4' fontWeight="bold" >
                {postData.title}
                </Typography> 
                <Box sx={{ml:'auto'}}>
          <IconButton onClick={handleClose}>
            <CloseOutlined sx={{fontSize:'1.75rem'}} />
          </IconButton>
        </Box>
        </Toolbar>
        <Divider />
        <Box sx={{
            maxHeight:'50vh',
            overflowY:'scroll'
        }}>
        {
            commentsData.map((val)=> {
                return(
                <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary={
                    <Typography >
                        <Typography display="inline" fontWeight="bold"> {val.name} &nbsp;</Typography>
                        {val.comment}
                    </Typography>
                  } secondary={val.time} />
                </ListItem>
              </List>

)
})
}
</Box>
      </Box>
    </Box>
  </DialogContent>
        </Dialog>
    </StyledRoot>
  )
}

export default ProfilePosts
