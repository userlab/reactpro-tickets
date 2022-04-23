import { api } from 'api'

export const getTickets = () => api('tickets')

export const getTicket = id => api(`tickets/${id}`)

export const saveTicket = ticket =>
  api(`tickets${ticket.id ? `/${ticket.id}` : ''}`, {
    method: ticket.id ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  })

export const deleteTicket = async id =>
  api(`tickets/${id}`, {
    method: 'DELETE',
  })
