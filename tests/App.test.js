import { MemoryRouter } from "react-router"
import { render } from '@testing-library/react'
import { expect, test } from '@jest/globals'
import App from "../src/App"
import userEvent from '@testing-library/user-event'

// Custom render function for App with routing
const renderApp = (initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  )
}

test('1. check heading in home page', async () => {
  // ARRANGE - Setup the component
  const { findByRole } = renderApp(['/'])

  // ACT & ASSERT - Find and verify the heading
  // findByRole -> akan getByRole + waitFor (nungguin sampai elementnya visible)
  const heading = await findByRole('heading')
  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent('Welcome to Admin Panel')
})


test('2. check button in home page', async () => {
  // ARRANGE - Setup the component
  const { findByRole } = renderApp(['/'])

  // ACT & ASSERT - Find and verify the button
  // findByRole -> akan getByRole + waitFor (nungguin sampai elementnya visible)
  const button = await findByRole('button')
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('View Users')
})

test('3. test navigation to list of users page', async () => {
  // ARRANGE - Setup the component
  const { findByRole } = renderApp(['/'])

  // ACT 
  // findByRole -> akan getByRole + waitFor (nungguin sampai elementnya visible)
  const viewUsersButton = await findByRole('button', { name: /view users/i })
  await userEvent.click(viewUsersButton)

  // ASSERT - Find and verify the button
  const backButton = await findByRole('button', { name: /back to home/i })
  expect(backButton).toBeInTheDocument()
  expect(backButton).toHaveTextContent('Back to Home')
})

test('4. test render & fetch data on Users page', async () => {
  // ARRANGE - Start directly on users page
  const { getByText, getByRole, findByRole } = renderApp(['/users'])
  expect(getByText(/loading users.../i)).toBeInTheDocument()

  // Wait for data to load
  // await waitFor(() => {
  //   expect(screen.getByRole('heading', { name: /users list/i })).toBeInTheDocument()
  // }, { timeout: 5000 })

  // ACT 
  // findByRole -> akan getByRole + waitFor (nungguin sampai elementnya visible)
  const heading = await findByRole('heading', { name: /users list/i })
  expect(heading).toBeInTheDocument()

  // Check table structure
  expect(getByText('Name')).toBeInTheDocument()
  expect(getByText('Email')).toBeInTheDocument()
  expect(getByText('Phone')).toBeInTheDocument()
  expect(getByText('Website')).toBeInTheDocument()

  // Wait for actual data
  const table = getByRole('table')
  const rows = table.querySelectorAll('tbody tr')
  expect(rows.length).toBeGreaterThan(0)

  // Check navigation elements
  const backButton = getByRole('button', { name: /back to home/i })
  expect(backButton).toBeInTheDocument()
})

test('5. test navigation to home page', async () => {
  // ARRANGE - Setup the component
  const { findByRole } = renderApp(['/users'])

  // ACT 
  // findByRole -> akan getByRole + waitFor (nungguin sampai elementnya visible)
  const backButton = await findByRole('button', { name: /back to home/i })
  await userEvent.click(backButton)

  // ASSERT - Find and verify the button
  const viewUsers = await findByRole('button', { name: /view users/i })
  expect(viewUsers).toBeInTheDocument()
  expect(viewUsers).toHaveTextContent('View Users')
})

test('6. test cannot load users page cause fetch failed', async () => {
  // mocking seolah olah fetch functionnya gagal!
  global.fetch = jest.fn(() => Promise.reject("MOCK ERROR!"))

  // ARRANGE - Setup the component
  const { findByText } = renderApp(['/users'])

  // make sure error message shown
  const errorElement = await findByText(/error loading users/i)
  expect(errorElement).toBeInTheDocument()
})