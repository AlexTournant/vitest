import React from "react";
import { Box, Typography, Button } from "@mui/material";
// Ajoute ici le composant Kanban ou Table
const TicketBoard: React.FC = () => (
    <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Tickets
            </Typography>
            <Button variant="contained" color="primary">
                Nouveau ticket
            </Button>
        </Box>
        {/* À remplacer par le Kanban ou la liste des tickets */}
        <Typography variant="body1" color="textSecondary">
            (Affichage des tickets à implémenter ici)
        </Typography>
    </Box>
);
export default TicketBoard;