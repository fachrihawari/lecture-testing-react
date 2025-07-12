import { test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import Button from '../src/components/Button'


test('loads and displays button correctly', () => {
  // Arrange -> siapkan atau susun apa aja yg mau ditest
  render(<Button title="Create User" />)

  // Action

  // Assert
  expect(screen.getByText(/create/i)).toHaveTextContent('Create User')
  expect(screen.getByText(/create/i)).toHaveClass('btn-primary')
})


test('loads and displays button with variant correctly', () => {
  // Arrange -> siapkan atau susun apa aja yg mau ditest
  const { getByRole, asFragment } = render(<Button title="Delete" variant="danger" />)

  // Action

  // Assert
  // console.log(asFragment());

  expect(getByRole('button')).toBeInTheDocument()
  expect(getByRole('button')).toHaveTextContent('Delete')
  expect(getByRole('button')).toHaveClass('btn-danger')
  //   expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment>
  //   <button
  //     class="btn btn-danger"
  //   >
  //     Delete
  //   </button>
  // </DocumentFragment>`)
})