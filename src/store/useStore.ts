import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {User, Ticket, Project} from '../types';

interface AppState {
    // Auth
    user: User | null;
    isAuthenticated: boolean;

    // Tickets
    tickets: Ticket[];
    selectedTicket: Ticket | null;
    ticketFilters: {
        status?: string[];
        priority?: string[];
        assignedTo?: string[];
        project?: string;
        search?: string;
    };

    // Projects
    projects: Project[];
    selectedProject: Project | null;

    // UI
    sidebarOpen: boolean;
    loading: boolean;

    // Actions
    setUser: (user: User | null) => void;
    setTickets: (tickets: Ticket[]) => void;
    setSelectedTicket: (ticket: Ticket | null) => void;
    updateTicket: (ticket: Ticket) => void;
    setTicketFilters: (filters: {
            status?: string[];
            priority?: string[];
            assignedTo?: string[];
            project?: string;
            search?: string;
        }) => void;    setProjects: (projects: Project[]) => void;
    setSelectedProject: (project: Project | null) => void;
    toggleSidebar: () => void;
    setLoading: (loading: boolean) => void;
}

export const useStore = create<AppState>()(
    devtools(
        (set) => ({
            // Initial state
            user: null,
            isAuthenticated: false,
            tickets: [],
            selectedTicket: null,
            ticketFilters: {},
            projects: [],
            selectedProject: null,
            sidebarOpen: true,
            loading: false,

            // Actions
            setUser: (user) => set({ user, isAuthenticated: !!user }),

            setTickets: (tickets) => set({ tickets }),

            setSelectedTicket: (ticket) => set({ selectedTicket: ticket }),

            updateTicket: (updatedTicket) => set((state) => ({
                tickets: state.tickets.map(ticket =>
                    ticket.id === updatedTicket.id ? updatedTicket : ticket
                ),
                selectedTicket: state.selectedTicket?.id === updatedTicket.id
                    ? updatedTicket
                    : state.selectedTicket
            })),

            setTicketFilters: (filters) => set({ ticketFilters: filters }),

            setProjects: (projects) => set({ projects }),

            setSelectedProject: (project) => set({ selectedProject: project }),

            toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

            setLoading: (loading) => set({ loading })
        }),
        { name: 'taskflow-store' }
    )
);