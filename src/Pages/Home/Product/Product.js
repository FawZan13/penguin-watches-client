import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, description, img } = product;
    return (
        <Grid item xs={4} sm={4} md={4} data-aos="zoom-in">
            <Card sx={{ maxWidth: 345, my: 3, p: 3, boxShadow: 4 }}>
                <CardMedia
                    component="img"
                    alt="watch"
                    style={{ width: '100%', height: '200px', margin: '0 auto' }}
                    image={img}
                />
                <CardContent style={{ height: '120px' }}>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                        Price: ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{ margin: 'auto', textDecoration: 'none' }} to={`/purchase/${_id}`}>
                        <Button color="info" variant="outlined" >Purchase</Button>
                    </Link>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;