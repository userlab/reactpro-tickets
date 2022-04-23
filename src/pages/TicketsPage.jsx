import {
  IconButton,
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
import { deleteTicket, getTickets } from 'api/ticketApi'
import useModalContext from 'hooks/useModalContext'
import queryClient from 'queryClient'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

export default function TicketsTable() {
  const { openTicketModal } = useModalContext()
  const navigate = useNavigate()
  const {
    isLoading,
    isFetching,
    error,
    data: tickets,
  } = useQuery('tickets', getTickets)
  const { mutate } = useMutation(deleteTicket, {
    onSuccess: () => {
      queryClient.invalidateQueries('tickets')
    },
  })

  const handleClick = ticket => () => {
    navigate(`./${ticket.id}`)
  }

  const handleEdit = ticket => event => {
    event.stopPropagation()

    openTicketModal(ticket)
  }

  const handleDelete = ticket => event => {
    event.stopPropagation()

    if (window.confirm('¿Está seguro que desea borrar este ticket?')) {
      mutate(ticket.id)
    }
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
              <Th />
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
                <Td>
                  <IconButton icon={<FaEdit />} onClick={handleEdit(ticket)} />

                  <IconButton
                    icon={<FaTrashAlt />}
                    onClick={handleDelete(ticket)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {error ? <pre>{error.message}</pre> : null}
    </>
  )
}
