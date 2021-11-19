import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = (props) => {
    const { img, name, description } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, my: 3, p: 3 }}>
                <CardMedia
                    component="img"
                    alt="watch"
                    style={{ width: '100%', height: '250px', margin: '0 auto' }}
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="secondary" variant="outlined" style={{ margin: 'auto' }}>Purchase</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;