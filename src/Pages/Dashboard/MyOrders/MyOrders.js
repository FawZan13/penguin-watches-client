import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();

    const email = user.email;
    useEffect(() => {
        fetch(`https://gentle-everglades-82582.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [control]);
    const handleDelete = (id) => {
        alert('Do you want to delete this item?');
        fetch(`https://gentle-everglades-82582.herokuapp.com/deleteOrder/${id}`, {
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
                <Typography sx={{ fontWeight: 500, m: 2, my: 5, color: 'secondary.main' }} variant="h4" component="div">
                    My Orders
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
                                        <Button onClick={() => handleDelete(order?._id)} color="inherit">Cancel</Button>
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

export default MyOrders;