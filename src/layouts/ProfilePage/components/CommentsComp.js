import React, {useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, updateComments } from '../../../store/actions/commentsActions';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2/src/sweetalert2.js'
const CommentsComp = (props) => {
  const user = useSelector((state)=>state.admin.user)
  const [editDialog, setEditDialog] = useState(false)
  const [comment, setComment] = useState('') 
  const [id, setId] = useState('')
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()
  const {enqueueSnackbar} = useSnackbar()
  // console.log(user)
    const {val} = props
    // console.log(val)
    const timestamp = val.created_at
    const date = new Date(timestamp);
    const currentDate = new Date();
    const timeDifference = currentDate - date;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    let formattedTime;

    if (days > 0) {
      formattedTime = `${days} d ago`;
    } else if (hours > 0) {
      formattedTime = `${hours} h ago`;
    } else if (minutes > 0) {
      formattedTime = `${minutes} min ago`;
    } else {
      formattedTime = `${seconds} sec ago`;
    }
    const handleChange = (e) => {
      setComment(e.target.value)
    }
    const handleEditDialog = (val) => {
      setEditDialog(true)
      setComment(val.comment)
      setId(val.id)
      // console.log(val)
    }
    const handleSubmit = (e) => {
      setLoading(true)
      e.preventDefault()
      dispatch(updateComments(comment, id)).then((result) => {
        enqueueSnackbar(result.data.message, {
          variant:'success'
        })
        setLoading(false)
        setEditDialog(false)
        props.getComments(props.postData)
        
      }).catch((err) => {
        console.log(err)
      });
    }
    const handleDelete = (val) => {
      
      // console.log(val.id)
      // confirmAlert({
      //   title: 'Delete?',
      //   message: 'Are you sure to want to delete this comment ?',
      //   buttons:[
      //     {
      //       label: 'Yes',
      //       onClick: ()=>{
      //         dispatch(deleteComment(val.id))
      //       }
      //     },
      //    {
      //     label: 'No',
      //    }
    
      //   ],
      //   containerProps : {
      //     style:{
      //       zIndex :9999999999
      //     }
      //   }
      // })
    }
  return (
    <>
    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText primary={
        <Typography >
            <Typography display="inline" fontWeight="bold"> {val.user?.name} &nbsp;</Typography>
            {val.comment}
        </Typography>
      } secondary={
        <Typography sx={{fontSize:'13px', color:'#878787'}}>
          {formattedTime}
          {
            val.user.id == user.id &&
            <>
          <Typography sx={{display:'inline', fontSize:'13px', 
          ml:2, color:'#000', fontWeight:'bold', cursor:'pointer'}}
          onClick={()=>handleEditDialog(val)}
          >
            Edit
          </Typography>
          <Typography sx={{display:'inline', fontSize:'13px', 
          ml:2, color:'#000', fontWeight:'bold', cursor:'pointer'}}
          onClick={()=> handleDelete(val)}
          >
            Delete
          </Typography>
            </>
        }
        </Typography>
      } />
    </ListItem>
  </List>
  <Dialog open={editDialog} onClose={()=>setEditDialog(false)} fullWidth>
      <DialogTitle>
        Edit Comment
      </DialogTitle>
      <DialogContent>
        <TextField fullWidth label="Comment" name="comment" value={comment} onChange={handleChange}/>
      </DialogContent>
      <DialogActions>
        <Button variant={loading ? 'disabled' : 'outlined'} onClick={handleSubmit}>
          {loading ? 'Please wait...' : 'Update'}
        </Button>
      </DialogActions>
  </Dialog>
          </>
  )
}

export default CommentsComp
