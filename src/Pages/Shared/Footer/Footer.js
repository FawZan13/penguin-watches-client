import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Box sx={{ xs: 3, sm: 10, backgroundColor: 'info.main' }} py={{ xs: 5, sm: 10 }} style={{ color: 'white' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h5">
                                Penguin Watch
                            </Typography>
                            <Typography variant="h6" sx={{ my: 2, fontSize: 12 }}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                                sed diam nonumy eirmod tempor invidunt ut<br />
                                labore et dolore magna aliquyam erat
                            </Typography>
                            <Box sx={{ mt: 4, display: 'flex' }}>
                                <a target="_blank" href="https://www.facebook.com/groups/homeitacademy"><img width="40px" src="https://i.ibb.co/tBqmy0Q/icons8-facebook-64.png" alt="" /></a>
                                <img style={{ marginLeft: '7px' }} width="40px" src="https://i.ibb.co/Cmgjr5R/icons8-youtube-48.png" alt="" />
                                <img style={{ marginLeft: '7px' }} width="40px" src="https://i.ibb.co/mXgwJgF/icons8-linkedin-64.png" alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2} >
                            <Box sx={{ mb: 2 }}>COMPANY</Box>
                            <Box >
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">About Us</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Services</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Features & Staff</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Our Pricing</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Latest News</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Box sx={{ mb: 2 }}>SUPPORT</Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">FAQS</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Terms & Conditions</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Features & Staff</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Contact</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">24/7 Days</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Box sx={{ mb: 2 }}>RESOURCES</Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Customers</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Whitepaper</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Dev API</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">Media Coverage</Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} href="/" color="inherit">GDPR</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer >
    );
};

export default Footer;