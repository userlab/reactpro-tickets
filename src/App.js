import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from 'components/Header'
import { ModalProvider } from 'context/ModalContext'
import HomePage from 'pages/HomePage'
import TicketProfilePage from 'pages/TicketProfilePage'
import TicketsPage from 'pages/TicketsPage'
import UserProfilePage from 'pages/UserProfilePage'
import UsersPage from 'pages/UsersPage'
import queryClient from 'queryClient'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ModalProvider>
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
        </ModalProvider>
      </ChakraProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
