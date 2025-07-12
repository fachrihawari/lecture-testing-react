import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import UsersPage from './pages/UsersPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/users' element={<UsersPage />} />
    </Routes>
  )
}