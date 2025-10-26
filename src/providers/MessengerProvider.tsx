'use client'

import React, { createContext } from 'react'
import { useMessengerStorage } from '../hooks/useMessengerStorage'

const MessengerContext = createContext<ReturnType<
  typeof useMessengerStorage
> | null>(null)

const MessengerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const messengerState = useMessengerStorage()
  return (
    <MessengerContext.Provider value={messengerState}>
      {children}
    </MessengerContext.Provider>
  )
}

export { MessengerContext, MessengerProvider }
