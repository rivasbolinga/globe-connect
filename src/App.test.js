import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

test('renders welcome message', () => {
  render(<App />)
  const headingElement = screen.getByRole('heading', {
    name: /welcome to vite/i,
  })
  expect(headingElement).toBeInTheDocument()
})
