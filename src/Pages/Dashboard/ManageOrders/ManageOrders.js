import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://gentle-everglades-82582.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, my: 5, color: 'secondary.main' }} variant="h4" component="div">
                    Manage Orders
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        orders.map(order =>
                            <Grid item xs={4} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345, my: 3, p: 3 }}>
                                    <CardMedia
                                        component="img"
                                        alt="watch"
                                        style={{ width: '100%', height: '250px', margin: '0 auto' }}
                                        image={order.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {order.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Price: ${order.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {order.description}
                                        </Typography>
                                        <h6>Booked by:<br /><span>{order.email}</span></h6>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ManageOrders;