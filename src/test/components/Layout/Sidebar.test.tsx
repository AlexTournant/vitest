import { render, screen } from '@testing-library/react'
import Sidebar from '../../../components/Layout/Sidebar'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

describe('Sidebar', () => {
    it('affiche les liens principaux', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        )
        expect(screen.getByText('Dashboard')).toBeInTheDocument()
        expect(screen.getByText('Tickets')).toBeInTheDocument()
        expect(screen.getByText('Projets')).toBeInTheDocument()
        expect(screen.getByText('Équipe')).toBeInTheDocument()
        expect(screen.getByText('Rapports')).toBeInTheDocument()
        expect(screen.getByText('Paramètres')).toBeInTheDocument()
        expect(screen.getByText('Actions rapides')).toBeInTheDocument()
    })
})