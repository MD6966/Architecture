import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddNews from './AddNews';
import { useDispatch } from 'react-redux';
import { delNews, getNews } from '../../../../store/actions/userActions';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router';
import { enqueueSnackbar } from 'notistack';
import DeleteIcon from '@mui/icons-material/Delete';
const ManageNews = () => {
    const [open, setOpen] = React.useState(false)
    const dispatch = useDispatch()
    const [news, setNews] = useState()
    const [loading, setLoading] = useState()
    const [delLoading, setDelLoading] = React.useState(false)
    const navigate = useNavigate()
    const getN = () => {
        dispatch(getNews())
            .then((result) => {
                console.log(result, 'ss');
                setLoading(false);

                setNews(result.data.payload);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    React.useEffect(() => {
        getN()
    }, [])
    const handleDelete = (id) => {
        setDelLoading(true)
        confirmAlert({
            title: 'Delete?',
            message: 'Are you sure to want to delete this event ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        dispatch(delNews(id)).then((result) => {
                            setDelLoading(false)
                            enqueueSnackbar(result.data.message, {
                                variant: 'success'
                            })
                            getN()
                        }).catch((err) => {
                            setDelLoading(false)
                            console.log(err)
                        });
                    }
                },
                {
                    label: 'No',
                }

            ]
        })
    }
    const handleEdit = (data) => {
        navigate('/admin/edit-news', { state: data })
    }
    return (
        <Box sx={{ padding: '30px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <Typography variant='h3' fontWeight="bold" fontFamily="Bebas Neue" letterSpacing="1px">
                    All News
                </Typography>
                <Button variant='outlined'
                    onClick={() => setOpen(true)}
                    sx={{ borderRadius: 0 }}
                    endIcon={
                        <AddCircleOutlineIcon />
                    }
                >
                    Add New News
                </Button>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Grid container sx={{ mt: 4 }} spacing={3}>
                {news?.map((val, ind) => (
                    // console.log(val)

                    <Grid key={ind} item xs={12} md={6} lg={6}>

                        <Card sx={{ maxWidth: '500px' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={val.banner_image}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {val.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {val.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {val.author}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box sx={{ mt: 2 }}>
                                    <Button variant='outlined' sx={{ mr: 2 }}
                                        onClick={() => handleEdit(val)}
                                    >
                                        Edit
                                    </Button>
                                    <Button color='error' variant={delLoading ? 'disabled' : 'outlined'}
                                        onClick={() => handleDelete(val.id)}
                                        endIcon={
                                            <DeleteIcon color="error" />
                                        }
                                    >
                                        {delLoading ? 'Please Wait...' : 'Delete'}
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                ))

                }
            </Grid>
            <AddNews open={open} close={() => setOpen(false)} createSuccess={getN} />
        </Box>
    )
}

export default ManageNews