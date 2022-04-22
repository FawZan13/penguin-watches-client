import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Outlet,
    Link
} from "react-router-dom";
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box className="">
                <NavLink style={{ textDecoration: 'none' }} to="/home">
                    <ListItem button>

                        <ListItemText primary="Home" />
                    </ListItem>
                </NavLink>
            </Box>
            {!admin ? <Box>
                <NavLink style={{ textDecoration: 'none' }} to={`/dashboard/myOrders`}>
                    <ListItem button>

                        <ListItemText primary="My Orders" />
                    </ListItem>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to={`/dashboard/addReview`}>
                    <ListItem button>

                        <ListItemText primary="Add Review" />
                    </ListItem>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to={`/dashboard/pay`}>
                    <ListItem button>

                        <ListItemText primary="Payment" />
                    </ListItem>
                </NavLink>
            </Box> :
                <Box>
                    <NavLink style={{ textDecoration: 'none' }} to={`/dashboard/manageProducts`}>
                        <ListItem button>

                            <ListItemText primary="Manage Products" />
                        </ListItem>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to={`/dashboard/makeAdmin`}>
                        <ListItem button>

                            <ListItemText primary="Make Admin" />
                        </ListItem>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to={`/dashboard/addProduct`}>
                        <ListItem button>

                            <ListItemText primary="Add Product" />
                        </ListItem>
                    </NavLink>
                </Box>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet></Outlet>

            </Box>
        </Box>
    );
};

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
