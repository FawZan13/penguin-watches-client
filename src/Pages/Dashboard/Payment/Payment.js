import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Payment = () => {
    return (
        <Container>
            <Typography sx={{ fontWeight: 500, m: 2, my: 5, color: 'secondary.main' }} variant="h4" component="div">
                Pay
            </Typography>
            <Typography variant="h5" component="div">
                Payment system coming soon
            </Typography>
            <Box>
                <img style={{ width: '100%', height: '400px' }} src="https://i.ibb.co/3sBqDV5/undraw-under-construction-46pa.png" alt="undraw-under-construction-46pa" border="0"></img>
            </Box>
        </Container>
    );
};

export default Payment;