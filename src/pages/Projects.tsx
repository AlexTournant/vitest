import React from "react";
import { Box, Typography, Button } from "@mui/material";
const Projects: React.FC = () => (
    <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Projets
            </Typography>
            <Button variant="contained" color="primary">
                Nouveau projet
            </Button>
        </Box>
        {/* Liste des projets */}
        <Typography variant="body1" color="textSecondary">
            (Affichage des projets à implémenter ici)
        </Typography>
    </Box>
);
export default Projects;