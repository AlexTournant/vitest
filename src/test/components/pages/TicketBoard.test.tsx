import { render, screen } from '@testing-library/react'
import TicketBoard from '../../../pages/TicketBoard'
import { describe, it, expect } from 'vitest'

describe('TicketBoard', () => {
    it('affiche la page des tickets', () => {
        render(<TicketBoard />)
        expect(screen.getByText('Tickets')).toBeInTheDocument()
        expect(screen.getByText('Nouveau ticket')).toBeInTheDocument()
        expect(screen.getByText(/Affichage des tickets/i)).toBeInTheDocument()
    })
})