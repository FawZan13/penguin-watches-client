import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Product from '../Product/Product';

const Products = () => {
    const products = [
        {
            "img": "https://i.ibb.co/0F2YDp0/white-smartwatch-background-1412-32.jpg",
            "name": "Yukino",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "img": "https://i.ibb.co/0F2YDp0/white-smartwatch-background-1412-32.jpg",
            "name": "Asuna",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "img": "https://i.ibb.co/0F2YDp0/white-smartwatch-background-1412-32.jpg",
            "name": "Alice",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "img": "https://i.ibb.co/0F2YDp0/white-smartwatch-background-1412-32.jpg",
            "name": "Alice",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "img": "https://i.ibb.co/0F2YDp0/white-smartwatch-background-1412-32.jpg",
            "name": "Alice",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "img": "https://i.ibb.co/0F2YDp0/white-smartwatch-background-1412-32.jpg",
            "name": "Alice",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, my: 5, color: 'secondary.main' }} variant="h4" component="div">
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

export default Products;