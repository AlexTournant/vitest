import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    Box,
    Card,
    CardContent,
    LinearProgress,
    Chip,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@mui/material';
import {
    Assignment,
    BugReport,
    Star,
    Person,
    Schedule
} from '@mui/icons-material';

const Dashboard: React.FC = () => {
    // Données mockées - remplacer par de vraies données
    const stats = {
        totalTickets: 156,
        openTickets: 42,
        inProgress: 18,
        completed: 96
    };

    const recentTickets = [
        { id: 'TFP-123', title: 'Bug dans le module de connexion', priority: 'HIGH', assignee: 'Jean Dupont' },
        { id: 'TFP-124', title: 'Nouvelle fonctionnalité de rapport', priority: 'MEDIUM', assignee: 'Marie Martin' },
        { id: 'TFP-125', title: 'Optimisation des performances', priority: 'LOW', assignee: 'Pierre Durand' },
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold">
                Dashboard
            </Typography>

            <Grid container spacing={3}>
                {/* Statistiques */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <Assignment color="primary" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography color="textSecondary" gutterBottom>
                                        Total Tickets
                                    </Typography>
                                    <Typography variant="h5">
                                        {stats.totalTickets}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <BugReport color="error" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography color="textSecondary" gutterBottom>
                                        Ouverts
                                    </Typography>
                                    <Typography variant="h5">
                                        {stats.openTickets}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <Schedule color="warning" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography color="textSecondary" gutterBottom>
                                        En cours
                                    </Typography>
                                    <Typography variant="h5">
                                        {stats.inProgress}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <Star color="success" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography color="textSecondary" gutterBottom>
                                        Terminés
                                    </Typography>
                                    <Typography variant="h5">
                                        {stats.completed}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Progression du sprint */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Progression du Sprint
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography variant="body2">Sprint 24.1</Typography>
                                <Typography variant="body2">68%</Typography>
                            </Box>
                            <LinearProgress variant="determinate" value={68} sx={{ height: 10, borderRadius: 5 }} />
                            <Typography variant="caption" color="textSecondary" sx={{ mt: 1, display: 'block' }}>
                                14 jours restants
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Tickets récents */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Tickets Récents
                        </Typography>
                        <List>
                            {recentTickets.map((ticket) => (
                                <ListItem key={ticket.id} sx={{ px: 0 }}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Person />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Box>
                                                <Typography variant="body2" fontWeight="bold">
                                                    {ticket.id}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {ticket.title}
                                                </Typography>
                                            </Box>
                                        }
                                        secondary={
                                            <Box mt={1}>
                                                <Chip
                                                    label={ticket.priority}
                                                    size="small"
                                                    color={
                                                        ticket.priority === 'HIGH' ? 'error' :
                                                            ticket.priority === 'MEDIUM' ? 'warning' : 'success'
                                                    }
                                                />
                                            </Box>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;