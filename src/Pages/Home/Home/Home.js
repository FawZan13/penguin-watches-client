import { Box } from '@mui/system';
import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <Box color="secondary" style={{ backgroundColor: 'black', }}>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </Box >
    );
};

export default Home;