import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { getTickets } from 'api/ticketApi'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

export default function TicketsTable() {
  const {
    isLoading,
    isFetching,
    error,
    data: tickets,
  } = useQuery('tickets', getTickets)
  const navigate = useNavigate()

  const handleClick = ticket => () => {
    console.log('handleClick', ticket)
    navigate(`./${ticket.id}`)
  }

  return (
    <>
      <Text fontSize='6xl'>Tickets</Text>

      {isLoading || isFetching ? <Spinner /> : null}

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Título</Th>
            </Tr>
          </Thead>

          <Tbody>
            {tickets?.map(ticket => (
              <Tr
                key={ticket.id}
                onClick={handleClick(ticket)}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.200',
                  cursor: 'pointer',
                }}
              >
                <Td>{ticket.id}</Td>
                <Td>{ticket.title}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {error ? <pre>{error.message}</pre> : null}
    </>
  )
}
