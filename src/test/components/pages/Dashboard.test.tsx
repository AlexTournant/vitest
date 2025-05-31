import { render, screen } from '@testing-library/react'
import Dashboard from '../../../pages/Dashboard'
import { describe, it, expect } from 'vitest'

describe('Dashboard', () => {
    it('affiche les stats principales', () => {
        render(<Dashboard />)
        expect(screen.getByText('Dashboard')).toBeInTheDocument()
        expect(screen.getByText('Total Tickets')).toBeInTheDocument()
        expect(screen.getByText('Ouverts')).toBeInTheDocument()
        expect(screen.getByText('En cours')).toBeInTheDocument()
        expect(screen.getByText('Terminés')).toBeInTheDocument()
        expect(screen.getByText('Progression du Sprint')).toBeInTheDocument()
        expect(screen.getByText('Tickets Récents')).toBeInTheDocument()
    })
})