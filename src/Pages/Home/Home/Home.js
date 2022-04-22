import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    return (
        <Box>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <About></About>
            <Footer></Footer>
        </Box >
    );
};

export default Home;