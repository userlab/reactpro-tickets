import { createContext, useState } from 'react'

export const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState()
  const [editingValue, setEditingValue] = useState()

  const isTicketModalOpen = modalOpened === 'tickets'
  const isUserModalOpen = modalOpened === 'users'

  const openTicketModal = value => {
    setEditingValue(value)
    setModalOpened('tickets')
  }

  const openUserModal = value => {
    setEditingValue(value)
    setModalOpened('users')
  }

  const closeModal = () => {
    setEditingValue({})
    setModalOpened()
  }

  return (
    <ModalContext.Provider
      value={{
        editingValue,
        isTicketModalOpen,
        isUserModalOpen,
        openTicketModal,
        openUserModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
