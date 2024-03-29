import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://penguin-watches-server-g6go.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, my: 5, color: 'info.main', textAlign: 'center' }} variant="h4" component="div">
                    Our Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product key={product.name} product={product}></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Explore;