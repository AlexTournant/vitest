import React from 'react';
import { Box, Drawer, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon, Notifications, AccountCircle } from '@mui/icons-material';
import { useStore } from '../../store/useStore';
import Sidebar from './Sidebar.tsx';

const DRAWER_WIDTH = 260;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { sidebarOpen, toggleSidebar, user } = useStore();

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${sidebarOpen ? DRAWER_WIDTH : 0}px)` },
                    ml: { sm: `${sidebarOpen ? DRAWER_WIDTH : 0}px` },
                    transition: theme => theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleSidebar}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        TaskFlow Pro
                    </Typography>

                    <IconButton color="inherit">
                        <Notifications />
                    </IconButton>

                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>

                    <Typography variant="body2" sx={{ ml: 1 }}>
                        {user?.firstName} {user?.lastName}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: sidebarOpen ? DRAWER_WIDTH : 0 }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="persistent"
                    open={sidebarOpen}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: DRAWER_WIDTH,
                        },
                    }}
                >
                    <Sidebar />
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8,
                    transition: theme => theme.transitions.create('margin', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;