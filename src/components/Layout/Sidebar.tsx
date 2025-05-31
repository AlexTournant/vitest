import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Toolbar, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Dashboard,
    Assignment,
    FolderOpen,
    People,
    BarChart,
    Settings,
    BugReport,
    Star,
    Schedule
} from '@mui/icons-material';

const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { text: 'Tickets', icon: <Assignment />, path: '/tickets' },
    { text: 'Projets', icon: <FolderOpen />, path: '/projects' },
    { text: 'Équipe', icon: <People />, path: '/users' },
    { text: 'Rapports', icon: <BarChart />, path: '/reports' },
];

const quickActions = [
    { text: 'Mes tickets', icon: <Star />, path: '/tickets?filter=assigned-to-me' },
    { text: 'Bugs critiques', icon: <BugReport />, path: '/tickets?priority=critical&type=bug' },
    { text: 'En retard', icon: <Schedule />, path: '/tickets?overdue=true' },
];

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" color="primary" fontWeight="bold">
        TaskFlow Pro
    </Typography>
    </Toolbar>

    <Divider />

    <List>
        {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
    <ListItemButton
        selected={location.pathname === item.path}
    onClick={() => navigate(item.path)}
>
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText primary={item.text} />
    </ListItemButton>
    </ListItem>
))}
    </List>

    <Divider />

    <List>
        <ListItem>
            <ListItemText
                primary="Actions rapides"
    primaryTypographyProps={{ variant: 'overline', color: 'text.secondary' }}
    />
    </ListItem>
    {quickActions.map((item) => (
        <ListItem key={item.text} disablePadding>
    <ListItemButton onClick={() => navigate(item.path)}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
    </ListItemButton>
    </ListItem>
    ))}
    </List>

    <Divider />

    <List>
        <ListItem disablePadding>
    <ListItemButton onClick={() => navigate('/settings')}>
    <ListItemIcon><Settings /></ListItemIcon>
    <ListItemText primary="Paramètres" />
        </ListItemButton>
        </ListItem>
        </List>
        </>
);
};

export default Sidebar;