import { render, screen } from '@testing-library/react'
import TicketDetail from '../../../pages/TicketDetail'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

describe('TicketDetail', () => {
    it('affiche l\'id du ticket dans le titre', () => {
        render(
            <MemoryRouter initialEntries={['/tickets/123']}>
                <Routes>
                    <Route path="/tickets/:ticketId" element={<TicketDetail />} />
                </Routes>
            </MemoryRouter>
        )
        expect(screen.getByText(/Détail du ticket 123/i)).toBeInTheDocument()
    })
})