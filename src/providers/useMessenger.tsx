import { useContext } from 'react'
import { MessengerContext } from './MessengerProvider'

export const useMessenger = () => {
  const context = useContext(MessengerContext)
  if (!context) {
    throw new Error('useMessenger must be used within a MessengerProvider')
  }
  return context
}
