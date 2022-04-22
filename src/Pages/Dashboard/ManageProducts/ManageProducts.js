import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch('https://gentle-everglades-82582.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [control])
    const handleDelete = (id) => {
        alert('Do you want to delete this item?');
        fetch(`https://gentle-everglades-82582.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, my: 5, color: 'primary.main', textAlign: 'center' }} variant="h4" component="div">
                    Our Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Grid item xs={4} sm={4} md={4}>
                            <Card sx={{ maxWidth: 345, my: 3, p: 3 }}>
                                <CardMedia
                                    component="img"
                                    alt="watch"
                                    style={{ width: '100%', height: '250px', margin: '0 auto' }}
                                    image={product.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Price: ${product.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => handleDelete(product?._id)} color="secondary" variant="outlined" >Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ManageProducts;