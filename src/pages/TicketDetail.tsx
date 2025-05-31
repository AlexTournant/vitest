import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";
const TicketDetail: React.FC = () => {
    const { ticketId } = useParams();
    // Récupération des infos du ticket avec le ticketId
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Détail du ticket {ticketId}
            </Typography>
            <Paper sx={{ p: 2 }}>
                {/* Infos du ticket, commentaires, historique, etc. */}
                <Typography variant="body1" color="textSecondary">
                    (Détail du ticket à implémenter ici)
                </Typography>
            </Paper>
        </Box>
    );
};
export default TicketDetail;