import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DashboardUser from '../DashboardUser';
// import UserDashboardChart from './UserDashboardChart'; // You'll create this component

const Chart = () => {
    // Static data for post views and profile views
    const postViews = 1500;
    const profileViews = 800;

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                User Dashboard
            </Typography>
            <Grid container spacing={2}>
                {/* Post Views Grid */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Post Views
                        </Typography>
                        <Typography variant="h3" color="primary">
                            {postViews}
                        </Typography>
                    </Paper>
                </Grid>

                {/* Profile Views Grid */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Profile Views
                        </Typography>
                        <Typography variant="h3" color="primary">
                            {profileViews}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Charts */}
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Post Views Chart
                        </Typography>
                        <DashboardUser views={postViews} label="Post Views" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Profile Views Chart
                        </Typography>
                        <DashboardUser views={profileViews} label="Profile Views" />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Chart;
