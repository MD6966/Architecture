import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { StyledRoot } from './styles'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';
import { getNews } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';
const NewsPage = () => {
    const [news, setNews] = useState()
    const [loading, setLoading] = useState()
    const [delLoading, setDelLoading] = React.useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
    return (
        <>
            <StyledRoot>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: -8 }}>
                    <Stack>
                        <img src="/assets/images/log.png" />
                        <Typography
                            variant='h3'
                            sx={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                mt: -6
                            }}
                        >
                            Architecture
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 7 }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        size='small'
                        sx={{ background: '#e2e2e2', width: '500px', }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Box sx={{ padding: '30px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography variant='h3' fontWeight="bold" fontFamily="Bebas Neue" letterSpacing="1px">
                            All News
                        </Typography>

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

                                </Card>
                            </Grid>

                        ))

                        }
                    </Grid>

                </Box>
            </StyledRoot>
        </>
    )
}

export default NewsPage