import React, { useState } from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../Landing/Footer'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router';
import { getNews } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';

const News = () => {
    const thumbnailImages = [
        '/assets/images/img1.webp',
        '/assets/images/img2.webp',
        '/assets/images/img3.jpg',
        '/assets/images/img4.jpg',
        '/assets/images/comp1.jpg',

    ];
    const newsData = [
        {
            image: '/assets/images/img1.webp',
            title: 'Cotswolds House / Oliver Leech Architects',
        },
        {
            image: '/assets/images/img2.webp',
            title: 'NEOM Showcases Its Designs for the Line at the 2023 Venice Architecture Biennale',
        },
        {
            image: '/assets/images/img3.jpg',
            title: 'NOEMA Bar and Restaurant / K-Studio + Lambs and Lions',
        },



    ];
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
            <Header />
            <Box margin={15}>
                {news?.map((val, ind) => (
                    <Grid container>

                        <Grid lg={8} spacing={5}>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>Architecture News</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', gap: '20px' }}>
                                <Typography sx={{ fontSize: '22px', fontWeight: 'semibold' }}>{val.title} <br /><span style={{ color: 'gray', fontSize: '16px', fontStyle: 'italic' }}>about 3 hours ago</span></Typography>
                                <Typography sx={{ fontSize: '20px' }}>{val.author}</Typography>
                                <Box sx={{ width: "100%", }}>
                                    <img src={val.banner_image} alt="abc" style={{ height: '60vh', width: '100%', objectFit: 'cover' }} />

                                </Box>
                                <Typography sx={{ fontSize: '20px' }}>{val.description}</Typography>
                                <Box display="flex" justifyContent="flex-start" alignItems="center" marginTop="20px" sx={{ width: '180px', height: '170px' }}>

                                    <img
                                        // key={index}
                                        src={val.images}
                                        alt='news images'
                                        style={{ objectFit: 'cover', width: '100%', height: '100%', marginRight: '20px' }}
                                    />

                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button style={{ color: 'white', backgroundColor: 'blue', fontWeight: '600', padding: '10px 20px' }}>Save this article</Button>
                                    <Button sx={{ fontWeight: '600', fontSize: '18px' }}>Read more <KeyboardDoubleArrowRightIcon /></Button>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid lg={4}>
                            <Container>
                                <Box sx={{ height: '300px', width: '100%', backgroundColor: '#F2F3F5' }}>

                                </Box>
                                <Box sx={{ marginTop: '30px' }}>
                                    <Typography sx={{ fontSize: '22px', fontWeight: '600' }}>IN ALLIANCE WITH ARCHITONIC</Typography>
                                    <Typography sx={{ fontSize: '19px' }}>Check the Latest Arcitechture News</Typography>
                                    <Typography sx={{ fontSize: '22px', fontWeight: '600', marginTop: '30px' }}>MOST VISITED</Typography>

                                    <Box
                                       
                                        sx={{
                                            display: 'flex',
                                            gap: '20px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: '20px',
                                        }}
                                    >
                                        <Box sx={{ width: '150px', height: '150px' }}>
                                            <img
                                                src={val.banner_image}
                                                alt='banner_image'
                                            style={{ height: '100%', width: '120%', objectFit: 'cover' }}
                                                />
                                        </Box>
                                        <Box sx={{ width: '70%', lineHeight: '30px' }}>
                                            <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>{val.title}</Typography>
                                        </Box>
                                    </Box>

                                    <Typography sx={{ fontSize: '22px', fontWeight: '600', marginTop: '30px' }}>MOST VISITED Products</Typography>
                                   
                                        <Box
                                           
                                            sx={{
                                                display: 'flex',
                                                gap: '20px',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: '20px',
                                            }}
                                        >
                                            <Box sx={{ width: '150px', height: '150px' }}>
                                                <img
                                                    src={val.banner_image}
                                                    alt='banner_image'
                                                    style={{ height: '100%', width: '120%', objectFit: 'cover' }}
                                                />
                                            </Box>
                                            <Box sx={{ width: '70%', lineHeight: '30px' }}>
                                                <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>{val.title}</Typography>
                                            </Box>
                                        </Box>
                                   
                                </Box>
                            </Container>
                        </Grid>
                    </Grid>
                ))}
                {/* {news?.map((val, ind) => (
                        
                    )} */}


            </Box>
            <Footer />
        </>
    )
}

export default News
