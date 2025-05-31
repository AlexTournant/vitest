import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Container,
    Alert
} from '@mui/material';
import { useStore } from '../store/useStore';
import {UserRole} from "../types";

const loginSchema = z.object({
    email: z.string().email('Email invalide'),
    password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
    const { setUser } = useStore();
    const [error, setError] = React.useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginForm) => {
        try {
            setError('');
            // Simulation d'une connexion - remplacer par une vraie API
            if (data.email === 'admin@taskflow.com' && data.password === 'password') {
                const mockUser = {
                    id: '1',
                    email: data.email,
                    firstName: 'Alex',
                    lastName: 'Tournant',
                    role: UserRole.ADMIN,
                    department: 'IT',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
                setUser(mockUser);
            } else {
                setError('Email ou mot de passe incorrect');
            }
        } catch (err) {
            setError('Erreur de connexion');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Card sx={{ width: '100%', maxWidth: 400 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Box textAlign="center" mb={3}>
                            <Typography variant="h4" component="h1" gutterBottom color="primary" fontWeight="bold">
                                TaskFlow Pro
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Connectez-vous à votre espace
                            </Typography>
                        </Box>

                        {error && (
                            <Alert severity="error" sx={{ mb: 2 }}>
                                {error}
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register('email')}
                                label="Email"
                                type="email"
                                fullWidth
                                margin="normal"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />

                            <TextField
                                {...register('password')}
                                label="Mot de passe"
                                type="password"
                                fullWidth
                                margin="normal"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                disabled={isSubmitting}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {isSubmitting ? 'Connexion...' : 'Se connecter'}
                            </Button>
                        </form>

                        <Box mt={2} p={2} bgcolor="grey.50" borderRadius={1}>
                            <Typography variant="caption" color="textSecondary">
                                <strong>Compte de démonstration :</strong><br />
                                Email: admin@taskflow.com<br />
                                Mot de passe: password
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default Login;