'use client'
import { useMessenger } from '@/src/providers/useMessenger'
import UserPage from './UserPage'
import MessengerList from './MessengerList'
import styles from './styles.module.scss'

const Messenger = () => {
  const { activeButton, isDialogOpen } = useMessenger()
  const title = activeButton?.title === 'Сообщения'

  return (
    <div className={styles.messengerBlock}>
      <UserPage />
      <MessengerList />

      {title && !isDialogOpen && (
        <div className={styles.emptyMessenger}>
          <p className={styles.emptyMessengerText}>
              Select a dialog from the list
          </p>
        </div>
      )}
    </div>
  )
}

export default Messenger
