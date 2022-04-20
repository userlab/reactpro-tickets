import { api } from 'api'

export const getUsers = () => api('users')

export const getUser = id => api(`users/${id}`)
