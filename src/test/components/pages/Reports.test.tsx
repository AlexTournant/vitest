import { render, screen } from '@testing-library/react'
import Reports from '../../../pages/Reports'
import { describe, it, expect } from 'vitest'

describe('Reports', () => {
    it('affiche la page des rapports', () => {
        render(<Reports />)
        expect(screen.getByText('Rapports & Statistiques')).toBeInTheDocument()
        expect(screen.getByText(/Tableaux de bord/i)).toBeInTheDocument()
    })
})