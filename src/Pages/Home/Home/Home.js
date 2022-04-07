import { Box } from '@mui/system';
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <Box>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <About></About>
        </Box >
    );
};

export default Home;