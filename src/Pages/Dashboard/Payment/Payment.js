import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Payment = () => {
    return (
        <Container style={{ textAlign: 'center' }}>
            <Typography sx={{ fontWeight: 500, m: 1, my: 1, color: 'primary.main' }} variant="h4" component="div">
                Pay
            </Typography>
            <Typography variant="h5" component="div">
                Payment system coming soon
            </Typography>
            <Box>
                <img style={{ height: '400px' }} src="https://i.ibb.co/rwSzCRk/Software-engineer-amico.png" alt="undraw-under-construction-46pa" border="0"></img>
            </Box>
        </Container>
    );
};

export default Payment;