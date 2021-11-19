import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Review = (props) => {
    const { name, review } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4} style={{ marginBottom: '40px' }}>
            <Card sx={{ minWidth: 275, border: 2, boxShadow: 0 }}>
                <CardContent>
                    <Typography variant="body2">

                        {review}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;