import { FaUser, FaCircle } from 'react-icons/fa'
import Image from 'next/image'
import { HumansTypes } from '@/src/info/humans-array'
import { useMessenger } from '@/src/providers/useMessenger'

import styles from './styles.module.scss'

const FriendsList: React.FC = () => {
  const { humansArray, openUserPageHandler } = useMessenger()

  return (
    <div className={styles.friendsList}>
      {humansArray?.map((human: HumansTypes) => (
        <div key={human.id} className={styles.friendBlock}>
          <div className={styles.userPhoto} 
            onClick={() => openUserPageHandler(human.id)}>
            <div className={styles.userPhotoImg}>
              {human.avatar ? (
                <Image
                  className={styles.userPhotoIcon}
                  src={human.avatar}
                  alt="Avatar"
                />
              ) : (
                <FaUser className={styles.userPhotoIcon} />
              )}
            </div>
            {human.isOnline && (
              <div className={styles.isOnlineIcon}>
                <FaCircle />
              </div>
            )}
          </div>

          <div
            className={styles.userName}
            onClick={() => openUserPageHandler(human.id)}
          >
            <h2 className={styles.userNameHeading}>{`${
              human.name + ' ' + human.secondName
            }`}</h2>
            <h3 className={styles.userNameAdditionalInfo}>
              {human.isOnline ? 'Online' : 'Was online...'}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FriendsList
