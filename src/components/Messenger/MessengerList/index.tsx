import { FiPlusCircle } from 'react-icons/fi'
import { FaCircle } from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'
import { useMessenger } from '@/src/providers/useMessenger'
import styles from './styles.module.scss'

const MessngerList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { humansArray, viewedDialogId, isDialogOpen, openUserPageHandler } =
    useMessenger()
  const viewedDialog = humansArray.find((user) => user.id === viewedDialogId)

  const userId = viewedDialog?.id ?? 'default'
  const isOnline = viewedDialog?.isOnline
  const userPhoto = viewedDialog?.avatar
  const userName = viewedDialog?.name

  if (isDialogOpen) {
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

        </div>
        <div className={styles.messages}>messages</div>
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
}

export default MessngerList
