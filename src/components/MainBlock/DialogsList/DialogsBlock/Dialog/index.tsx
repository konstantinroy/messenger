import { FaUser, FaCircle } from 'react-icons/fa'
import { BsCheckAll } from 'react-icons/bs'
import Image from 'next/image'
import { useMessenger } from '@/src/providers/useMessenger'
import { HumansTypes } from '@/src/info/humans-array'

import styles from './styles.module.scss'

const Dialog: React.FC<HumansTypes> = ({
  id,
  name,
  avatar,
  secondName,
  isOnline,
  timeOfLastMessage,
  newMessageQty,
}) => {
  const { messagesList, openDialogHandler, viewedDialogId, isDialogOpen } = useMessenger()
  const lastMessage = messagesList.slice(-1)[0].message
  // const dialogBlockActiveStyle = newMessageQty > 0 && styles.dialogBlockActive

  const truncateString = (str: string, maxLenght: number) => {
    if (str.lenght <= maxLenght) {
      return str
    }
    return str.slice(0, maxLenght) + '...' 
  }
  
  const dialogBlockActiveStyle =
    (id === viewedDialogId && isDialogOpen && styles.dialogOpened) ||
    (newMessageQty > 0 && styles.dialogBlockActive)

  return (
    <div
      className={`${styles.dialogBlock}
      ${dialogBlockActiveStyle}
      `}
      onClick={() => openDialogHandler(id)}
    >
      <div className={styles.userInfoBlock}>
        <div className={styles.userPhoto}>
          <div className={styles.userPhotoImg}>
            {avatar ? (
              <Image
                className={styles.userPhotoIcon}
                src={avatar}
                alt="Avatar"
              />
            ) : (
              <FaUser className={styles.userPhotoIcon} />
            )}
          </div>
          {isOnline && (
            <div className={styles.isOnlineIcon}>
              <FaCircle />
            </div>
          )}
        </div>
        <div className={styles.userName}>
          <h2 className={styles.userNameHeading}>{`${
            name + ' ' + secondName
          }`}</h2>
          <h3 className={styles.userNameAdditionalInfo}>
            {truncateString(lastMessage, 45)}
          </h3>
        </div>
      </div>
      <div className={styles.messageInfo}>
        <div className={styles.timeOfLastMessage}>
          <p>{timeOfLastMessage}</p>
        </div>
        <div className={styles.newMessageQty}>
          {newMessageQty > 0 ? (
            <div className={styles.newMessageQtyBlock}>
              <p className={styles.newMessageQtyText}>{newMessageQty}</p>
            </div>
          ) : (
            <div className={styles.statusOfLastMessage}>
              {<BsCheckAll className={styles.statusOfLastMessageIcon} />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dialog
