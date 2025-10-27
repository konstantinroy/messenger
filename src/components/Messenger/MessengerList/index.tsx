'use client'

import { FiPlusCircle } from 'react-icons/fi'
import { FaCircle } from 'react-icons/fa'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useMessenger } from '@/src/providers/useMessenger'
import MessageBubble from './MessageBubble'
import { IMessagesList } from '@/src/info/messages-list'
import styles from './styles.module.scss'

const MessengerList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const {
    messagesList,
    humansArray,
    viewedDialogId,
    isDialogOpen,
    openUserPageHandler,
  } = useMessenger()
  const viewedDialog = humansArray.find((user) => user.id === viewedDialogId)

  const userId = viewedDialog?.id ?? 'default'
  const isOnline = viewedDialog?.isOnline
  const userPhoto = viewedDialog?.avatar
  const userName = viewedDialog?.name

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 
        messagesContainerRef.current.scrollHeight
    }
  }, [messagesList])

  if (!isDialogOpen) {
    return null // Обязательно!
  }

  return (
    <div className={styles.messengerList}>
      {/* {'Dialog with ' + dialogUserName} */}
      <div className={styles.header}>
        <div
          className={styles.userPhoto}
          onClick={() => openUserPageHandler(userId)}
        >
          <div className={styles.userPhotoImg}>
            <Image
              className={styles.userPhotoIcon}
              src={userPhoto}
              alt="avatar"
            />
          </div>

          {isOnline && (
            <div className={styles.isOnlineIcon}>
              <FaCircle />
            </div>
          )}
        </div>

        <div
          className={styles.userName}
          onClick={() => openUserPageHandler(userId)}
        >
          <h2 className={styles.userNameHeading}>{userName}</h2>
          <h3 className={styles.userNameAdditionalInfo}>
            {isOnline ? 'Online' : 'Was online...'}
          </h3>
        </div>
        {/* <button onClick={scrollToBottom}>Click</button> */}
      </div>

      <>
        <div
          className={styles.messagesContainer}
          ref={messagesContainerRef}
        >
          {messagesList.map((message: IMessagesList) => (
            <MessageBubble
              key={message.id}
              type={message.type}
              message={message.message}
              time={message.time}
            />
          ))}
        </div>
      </>

      <div className={styles.messageInput}>
        <div className={styles.addIcon}>
          <FiPlusCircle />
        </div>

        <div className={styles.input}>
          <input
            value={searchTerm}
            type="text"
            placeholder="Message..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default MessengerList
