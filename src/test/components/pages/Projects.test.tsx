import { render, screen } from '@testing-library/react'
import Projects from '../../../pages/Projects'
import {describe,it,expect} from 'vitest'

describe('Projects', () => {
    it('affiche la page des projets', () => {
        render(<Projects />)
        expect(screen.getByText('Projets')).toBeInTheDocument()
        expect(screen.getByText('Nouveau projet')).toBeInTheDocument()
        expect(screen.getByText(/Affichage des projets/i)).toBeInTheDocument()
    })
})