import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { _id } = useParams();
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const email = user.email;
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/products/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    console.log(product)
    const onSubmit = (data) => {
        data.status = "pending";
        data.name = product.name;
        data.price = product.price;
        data.email = email;
        data.img = product.img;
        data.description = product.description;
        console.log(data);
        fetch("http://localhost:5000/myOrders", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),

        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Purchase
                    </Typography>
                    <form style={{ margin: "20px" }} onSubmit={handleSubmit(onSubmit)}>
                        <input type="date" {...register("date", { required: true })} style={{ width: '75%', margin: "5px", padding: "10px" }} />
                        <input type="text" {...register("address", { required: true })} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Your Address" />
                        <input type="number" {...register("number", { required: true })} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Your Number" />
                        <Button sx={{ width: '40%', m: 2, mt: 4, mb: 5 }} variant="contained" type="submit">Complete Purchase</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
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
                            {/* <Link style={{ margin: 'auto', textDecoration: 'none' }} to={`/purchase/${_id}`}>
                                <Button color="secondary" variant="outlined" >Purchase</Button>
                            </Link> */}

                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;