import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Login from '../../../pages/Login'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../../../store/useStore', async () => {
    const actual = await import('../../../store/useStore');
    return {
        default: actual.useStore,
        useStore: () => ({
            setUser: vi.fn(),
        }),
    }
})

describe('Login', () => {
    it('affiche le formulaire de connexion', () => {
        render(<Login />)
        expect(screen.getByLabelText('Email')).toBeInTheDocument()
        expect(screen.getByLabelText('Mot de passe')).toBeInTheDocument()
        expect(screen.getByText('Se connecter')).toBeInTheDocument()
    })

    it('affiche une erreur sur mauvais identifiants', async () => {
        render(<Login />)
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'bad@user.com' } })
        fireEvent.change(screen.getByLabelText('Mot de passe'), { target: { value: 'wrongpass' } })
        fireEvent.click(screen.getByText('Se connecter'))
        await waitFor(() => {
            expect(screen.getByText(/incorrect/i)).toBeInTheDocument()
        })
    })
})