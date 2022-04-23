import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import TicketFormModal from 'components/TicketFormModal'
import useModalContext from 'hooks/useModalContext'
import { FaPlus } from 'react-icons/fa'
import { Link as ReachLink } from 'react-router-dom'

const Header = () => {
  const { openTicketModal, openUserModal } = useModalContext()

  const linkProps = {
    as: ReachLink,
    px: 2,
    py: 1,
    rounded: 'md',
    _hover: {
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    },
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link to='/' {...linkProps}>
              <Text fontSize='xl'>ReactPro</Text>
            </Link>

            <Link to='tickets' {...linkProps}>
              Tickets
            </Link>

            <Link to='users' {...linkProps}>
              Usuarios
            </Link>
          </HStack>

          <Flex alignItems='center'>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<FaPlus />}
                variant='outline'
              />

              <MenuList>
                <MenuItem onClick={() => openTicketModal()}>
                  Crear Ticket
                </MenuItem>

                <MenuItem onClick={() => openUserModal()}>
                  Crear Usuario
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <TicketFormModal />
    </>
  )
}

export default Header
