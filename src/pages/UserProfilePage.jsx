import { Spinner, Text } from '@chakra-ui/react'
import { getUser } from 'api/userApi'
import queryClient from 'queryClient'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const UserProfilePage = () => {
  const { id } = useParams()
  const {
    isLoading,
    isFetching,
    data: user,
  } = useQuery(['user', id], () => getUser(id), {
    initialData:
      queryClient.getQueryData('users')?.find(user => user.id === id) || {},
  })

  return (
    <div>
      <Text fontSize='6xl'>{user.name}</Text>

      {isLoading || isFetching ? <Spinner /> : null}
    </div>
  )
}

export default UserProfilePage
