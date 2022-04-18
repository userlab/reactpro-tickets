import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from 'components/Header'
import HomePage from 'pages/HomePage'
import TicketProfilePage from 'pages/TicketProfilePage'
import TicketsPage from 'pages/TicketsPage'
import UserProfilePage from 'pages/UserProfilePage'
import UsersPage from 'pages/UsersPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />

        <Container maxW='container.xl'>
          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='tickets' element={<TicketsPage />} />

            <Route path='tickets/:id' element={<TicketProfilePage />} />

            <Route path='users' element={<UsersPage />} />

            <Route path='users/:id' element={<UserProfilePage />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  )
}

export default App
