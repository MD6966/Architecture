import React from 'react';
import { StyledBox, StyledRoot } from './Style';
import { Grid } from '@mui/material';

const DashboardUser = () => {
    return (
        <>
            <StyledRoot>
                <Grid container spacing={2}>
                    <Grid item
                        xs={12}
                        md={8}
                        lg={4}>
                        <StyledBox>
                            Total Profile View
                        </StyledBox>


                    </Grid>
                    <Grid item
                        xs={12}
                        md={8}
                        lg={4}>
                        <StyledBox>
                            Total Post View's
                        </StyledBox>

                    </Grid>
                    <Grid item
                        xs={12}
                        md={8}
                        lg={4}>
                        <StyledBox>
                            Total Comments
                        </StyledBox>

                    </Grid>
                    <Grid item
                        xs={12}
                        md={8}
                        lg={4}>
                        <StyledBox>
                            Total Video's Views
                        </StyledBox>

                    </Grid>
                    <Grid item
                        xs={12}
                        md={8}
                        lg={4}>
                        <StyledBox>
                            Total Project Views
                        </StyledBox>

                    </Grid>
                    <Grid item
                        xs={12}
                        md={8}
                        lg={4}>
                        <StyledBox>
                            Total Posts and Project Likes
                        </StyledBox>

                    </Grid>
                </Grid>


            </StyledRoot>
        </>

    );
};

export default DashboardUser;