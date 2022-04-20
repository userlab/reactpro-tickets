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
import { getUsers } from 'api/userApi'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

export default function UsersPage() {
  const {
    isLoading,
    isFetching,
    error,
    data: users,
  } = useQuery('users', getUsers)
  const navigate = useNavigate()

  const handleClick = user => () => {
    navigate(`./${user.id}`)
  }

  return (
    <>
      <Text fontSize='6xl'>Usuarios</Text>

      {isLoading || isFetching ? <Spinner /> : null}

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nombre</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users?.map(user => (
              <Tr
                key={user.id}
                onClick={handleClick(user)}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.200',
                  cursor: 'pointer',
                }}
              >
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {error ? <pre>{error.message}</pre> : null}
    </>
  )
}
