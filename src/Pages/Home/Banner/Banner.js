import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';


const Banner = () => {

    return (
        <Box sx={{ pb: 4, pt: 4, px: 3 }} style={{ backgroundColor: '#D9F5FF' }} >
            <Grid container spacing={2}>
                <Grid item style={{ textAlign: 'left' }} xs={12} md={6}>
                    <Box sx={{ mx: 3, mt: 2, py: 5, px: 5 }}>
                        <Typography style={{ marginBottom: '10px', marginTop: '45px' }} variant="h3">
                            <span style={{ color: 'blue' }}>Penguin</span> Watches
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 18 }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took
                        </Typography>
                        {/* <Button variant="contained" style={{ backgroundColor: '' }}>Browse Course</Button> */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <img style={{ width: '100%' }} src="https://img.freepik.com/free-psd/high-angle-modern-blue-smartwatch-with-screen-mock-up_23-2148787559.jpg?size=626&ext=jpg&ga=GA1.1.1892570056.1643690568" alt="" />
                </Grid>

            </Grid >
        </Box>
    );
};

export default Banner;