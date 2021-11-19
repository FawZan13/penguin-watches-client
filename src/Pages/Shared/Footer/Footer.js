import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box style={{
            backgroundColor: '#673ab7', height: '200px'
        }}>
            <Typography sx={{ fontWeight: 500, pt: 5 }} variant="h4" component="div">
                Please Visit Again
            </Typography>
        </Box >
    );
};

export default Footer;