import { Download } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'
import { getAllBlocks } from '../../../store/actions/userActions'
import { useNavigate } from 'react-router'
const StyledRoot = styled(Box)(({ theme }) => ({
    padding: theme.spacing(5)
}))
const StyledCard = styled(Card)(({ theme }) => ({

}))

const Blocks = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false)
    const [blocks, setBlocks] = React.useState([])

    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const getBlocks = () => {

        dispatch(getAllBlocks()).then((result) => {
            setLoading(false)
            setBlocks(result.data.payload)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        });
    }

    React.useEffect(() => {
        getBlocks()
    }, [])
    const handleBlock = (data) => {
        navigate('/block-page', { state: { blockData: data } });
    }

    return (
        <StyledRoot>
            {/* <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                    <StyledCard>
                        <CardMedia
                            component="img"
                            src="/assets/images/block1.png"
                            sx={{ height: '190px' }}
                            onClick={handleBlock}
                        />
                        <CardContent>
                            <Typography variant='h6' color="#777" fontWeight="bold">
                                Block
                            </Typography>
                        </CardContent>
                        <Divider />
                        <Box sx={{ height: '30px', px: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>
                                This is the description
                            </Typography>
                            <Download />
                        </Box>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <StyledCard>
                        <CardMedia
                            component="img"
                            src="/assets/images/block2.jpg"
                            sx={{ height: '190px' }}
                        />
                        <CardContent>
                            <Typography variant='h6' color="#777" fontWeight="bold">
                                Block
                            </Typography>
                        </CardContent>
                        <Divider />
                        <Box sx={{ height: '30px', px: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>
                                This is the description
                            </Typography>
                            <Download />
                        </Box>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <StyledCard>
                        <CardMedia
                            component="img"
                            src="/assets/images/block1.png"
                            sx={{ height: '190px' }}
                        />
                        <CardContent>
                            <Typography variant='h6' color="#777" fontWeight="bold">
                                Block
                            </Typography>
                        </CardContent>
                        <Divider />
                        <Box sx={{ height: '30px', px: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>
                                This is the description
                            </Typography>
                            <Download />
                        </Box>
                    </StyledCard>
                </Grid>
            </Grid> */}
            <Grid container sx={{ mt: 4 }} spacing={3}>

                {blocks.map((val, ind) => {
                    // console.log(val)
                    return (
                        <Grid onClick={() => handleBlock(val)} item xs={12} md={6} lg={6}>

                            <Card sx={{ maxWidth: '500px' }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={val.imgs}
                                    title="green iguana"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {val.description}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'blue' }} >
                                        <span style={{ color: 'black', fontWeight: 600 }}>  Tags:</span>   {val.tags}</Typography>
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </Grid>
                    )
                })

                }
            </Grid>

        </StyledRoot>
    )
}

export default Blocks
