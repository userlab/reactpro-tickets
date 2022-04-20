import { api } from 'api'

export const getTickets = () => api('tickets')

export const getTicket = id => api(`tickets/${id}`)
