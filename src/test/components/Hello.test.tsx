import { render, screen } from '@testing-library/react'
import { Hello } from '../../components/Hello.tsx'
import {describe,it,expect} from "vitest";

describe('Hello component', () => {
  it('renders the name prop', () => {
    render(<Hello name="World" />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  it('renders a different name prop', () => {
    render(<Hello name="Vitest" />)
    expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument()
  })
})
