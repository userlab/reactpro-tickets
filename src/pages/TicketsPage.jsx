import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

const tickets = [
  {
    id: 1,
    title: 'Grabar video de ReactPro',
    description: 'Video de clase 9',
  },
  {
    id: 2,
    title: 'Revisar pull request',
    description: 'Aprobar pull requests de proyectos',
  },
  {
    id: 3,
    title: 'Crear repositorio de ticket',
    description: 'Crear repositorio de ticket',
  },
  {
    id: 4,
    title: 'Aprobar PRs',
    description: 'Aprobar PRs',
  },
]

export default function TicketsPage() {
  return (
    <>
      <Text fontSize='6xl'>Tickets</Text>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Título</Th>
              <Th>Descripción</Th>
            </Tr>
          </Thead>

          <Tbody>
            {tickets.map(ticket => (
              <Tr key={ticket.id}>
                <Td>{ticket.id}</Td>
                <Td>{ticket.title}</Td>
                <Td>{ticket.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
