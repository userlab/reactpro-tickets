import { Spinner, Text } from '@chakra-ui/react'
import { getTicket } from 'api/ticketApi'
import queryClient from 'queryClient'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const TicketProfilePage = () => {
  const { id } = useParams()
  const {
    isLoading,
    isFetching,
    data: ticket,
  } = useQuery(['ticket', id], () => getTicket(id), {
    initialData:
      queryClient.getQueryData('tickets')?.find(ticket => ticket.id === id) ||
      {},
  })

  return (
    <div>
      <Text fontSize='6xl'>{ticket.title}</Text>

      {isLoading || isFetching ? <Spinner /> : null}

      <Text fontSize='2xl'>{ticket.description}</Text>
    </div>
  )
}

export default TicketProfilePage
