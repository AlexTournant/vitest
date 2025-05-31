import { render, screen } from '@testing-library/react'
import Layout from '../../../components/Layout/Layout'
import { MemoryRouter } from 'react-router-dom'
import { vi,describe,it,expect } from 'vitest'

// Mock du store pour simuler un utilisateur connecté
vi.mock('../../../store/useStore', async (importActual) => {
    const actual = await importActual();
    return {
        default: actual,
        useStore: () => ({
            sidebarOpen: true,
            toggleSidebar: vi.fn(),
            user: { firstName: 'Alex', lastName: 'Tournant' },
        }),
    }
})

describe('Layout', () => {
    it('affiche TaskFlow Pro et le nom utilisateur', () => {
        render(
            <MemoryRouter>
                <Layout>
                    <div>Contenu enfant</div>
                </Layout>
            </MemoryRouter>
        )
        expect(screen.getByText('TaskFlow Pro')).toBeInTheDocument()
        expect(screen.getByText('Alex Tournant')).toBeInTheDocument()
        expect(screen.getByText('Contenu enfant')).toBeInTheDocument()
    })
})