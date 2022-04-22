import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
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
            <Box className="d-flex flex-direction-row">
                <NavLink to="/home"><Button color="inherit">Home</Button></NavLink>
                <NavLink to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
            </Box>
            {!admin ? <Box>
                <NavLink to={`/dashboard/myOrders`}>
                    <ListItem button>

                        <ListItemText primary="My Orders" />
                    </ListItem>
                </NavLink>
                <NavLink to={`/dashboard/addReview`}>
                    <ListItem button>

                        <ListItemText primary="Add Review" />
                    </ListItem>
                </NavLink>
                <NavLink to={`/dashboard/pay`}>
                    <ListItem button>

                        <ListItemText primary="Payment" />
                    </ListItem>
                </NavLink>
            </Box> :
                <Box>
                    <NavLink to={`/dashboard/manageProducts`}>
                        <ListItem button>

                            <ListItemText primary="Manage Products" />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`/dashboard/makeAdmin`}>
                        <ListItem button>

                            <ListItemText primary="Make Admin" />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`/dashboard/addProduct`}>
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
                        <Link to="/">Home</Link>
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
        // <div>
        //     <Box sx={{ flexGrow: 1 }}>
        //         <AppBar color="secondary" position="static">
        //             <Toolbar>
        //                 <IconButton
        //                     size="large"
        //                     edge="start"
        //                     color="inherit"
        //                     aria-label="menu"
        //                     sx={{ mr: 2 }}
        //                 >
        //                     <MenuIcon />
        //                 </IconButton>
        //                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //                     Dashboard
        //                 </Typography>
        //                 <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
        //                 {
        //                     admin ?
        //                         <Box>
        //                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/makeAdmin"><Button color="inherit">Make Admin</Button></NavLink>
        //                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/addProduct"><Button color="inherit">Add Product</Button></NavLink>
        //                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/manageOrders"><Button color="inherit">Manage  Orders</Button></NavLink>
        //                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/manageProducts"><Button color="inherit">Manage  Products</Button></NavLink>
        //                         </Box>
        //                         :
        //                         <Box>
        //                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/pay"><Button color="inherit">Pay</Button></NavLink>
        //                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/addReview"><Button color="inherit">Add Review</Button></NavLink>
        //                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard/myOrders"><Button color="inherit">My Orders</Button></NavLink>
        //                         </Box>

        //                 }
        //             </Toolbar>
        //         </AppBar>
        //     </Box>

        // </div>
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
