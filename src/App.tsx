import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import { useStore } from './store/useStore';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TicketBoard from './pages/TicketBoard.tsx';
import TicketDetail from './pages/TicketDetail';
import Projects from './pages/Projects';
import Users from './pages/Users';
import Reports from './pages/Reports';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            retry: 1,
        },
    },
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});

function App() {
    const { isAuthenticated } = useStore();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                        {isAuthenticated ? (
                            <Layout>
                                <Routes>
                                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/tickets" element={<TicketBoard />} />
                                    <Route path="/tickets/:ticketId" element={<TicketDetail />} />
                                    <Route path="/projects" element={<Projects />} />
                                    <Route path="/users" element={<Users />} />
                                    <Route path="/reports" element={<Reports />} />
                                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                                </Routes>
                            </Layout>
                        ) : (
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="*" element={<Navigate to="/login" replace />} />
                            </Routes>
                        )}
                    </Box>
                </Router>
                <Toaster position="top-right" />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;