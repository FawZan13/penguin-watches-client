import { Box, Button, CircularProgress } from '@mui/material';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { admin, logout, isLoading } = useAuth();

    if (isLoading) {
        return <CircularProgress color="secondary" />

    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color="secondary" position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                        {
                            admin ?
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/makeAdmin"><Button color="inherit">Make Admin</Button></NavLink>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/addProduct"><Button color="inherit">Add Product</Button></NavLink>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/manageOrders"><Button color="inherit">Manage  Orders</Button></NavLink>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/manageProducts"><Button color="inherit">Manage  Products</Button></NavLink>
                                </Box>
                                :
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/pay"><Button color="inherit">Pay</Button></NavLink>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/addReview"><Button color="inherit">Add Review</Button></NavLink>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/myOrders"><Button color="inherit">My Orders</Button></NavLink>
                                </Box>

                        }
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    );
};

export default Dashboard;
