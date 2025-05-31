import React from "react";
import { Box, Typography } from "@mui/material";
const Users: React.FC = () => (
    <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
            Équipe
        </Typography>
        {/* Liste des utilisateurs */}
        <Typography variant="body1" color="textSecondary">
            (Affichage des membres de l'équipe à implémenter ici)
        </Typography>
    </Box>
);
export default Users;