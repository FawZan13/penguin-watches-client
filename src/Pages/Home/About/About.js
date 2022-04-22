import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ py: 5 }}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6} data-aos="fade-right">
                    <Typography sx={{ fontWeight: 500, color: 'info.main' }} variant="h4" gutterBottom>
                        About us
                    </Typography>
                    <Typography sx={{ fontWeight: 400, py: 5 }} variant="h5" gutterBottom>
                        We are one of the top watch brand of the world.<br />
                        Our watches are of very unique design and <br />
                        functionalities.We don't compromise in terms of quality.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-left">
                    <img style={{ width: '100%', height: '400px' }} src="https://i.ibb.co/18Rh6jX/o-YWU2s-Py-400x400.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;