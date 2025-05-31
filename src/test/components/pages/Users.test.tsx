import { render, screen } from '@testing-library/react'
import Users from '../../../pages/Users'
import { describe, it, expect } from 'vitest'

describe('Users', () => {
    it('affiche la page équipe', () => {
        render(<Users />)
        expect(screen.getByText('Équipe')).toBeInTheDocument()
        expect(screen.getByText(/Affichage des membres/i)).toBeInTheDocument()
    })
})