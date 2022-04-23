import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react'
import { saveTicket } from 'api/ticketApi'
import Input from 'components/Input'
import TextArea from 'components/TextArea'
import useForm from 'hooks/useForm'
import useModalContext from 'hooks/useModalContext'
import queryClient from 'queryClient'
import { useEffect } from 'react'
import { useMutation } from 'react-query'

export default function TicketFormModal() {
  const { isTicketModalOpen, editingValue, closeModal } = useModalContext()
  const { values, handleChange, handleSubmit, updateValues } = useForm({
    title: '',
    description: '',
  })
  const { mutate, isLoading } = useMutation(saveTicket, {
    onSuccess: data => {
      queryClient.invalidateQueries('tickets')
      queryClient.invalidateQueries(['ticket', String(data.id)])

      closeModal()
    },
  })

  useEffect(() => {
    if (editingValue) {
      updateValues(editingValue)
    }
  }, [editingValue, updateValues])

  return (
    <Modal isOpen={isTicketModalOpen} onClose={closeModal}>
      <ModalOverlay />

      <ModalContent>
        <form onSubmit={handleSubmit(mutate)}>
          <ModalHeader>Crear Ticket {isLoading && <Spinner />}</ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Input
              autoFocus
              name='title'
              label='Título'
              onChange={handleChange}
              value={values.title}
            />

            <TextArea
              name='description'
              label='Descripción'
              onChange={handleChange}
              value={values.description}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' disabled={isLoading} type='submit'>
              Guardar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
